import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { type SignInDto, signInSchema } from '@procura/shared';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signin')
  @UsePipes(new ZodValidationPipe(signInSchema))
  signin(@Body() body: SignInDto): Promise<any> {
    return this.authService.signin(body);
  }
}
