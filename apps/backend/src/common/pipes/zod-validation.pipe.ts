import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      // If validation succeeds, return the parsed value
      return this.schema.parse(value);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        // Map over Zod's issues array to extract the field name and message
        const zodError = err;
        const formattedErrors = zodError.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));

        // Pass the formatted errors into the NestJS Exception
        throw new BadRequestException({
          message: 'Validation failed',
          errors: formattedErrors,
          error: 'Bad Request',
          statusCode: 400,
        });
      }

      // Fallback for non-Zod errors
      throw new BadRequestException('Validation failed');
    }
  }
}
