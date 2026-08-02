import type { SignInDto } from "@procura/shared";
import { client } from "./client";

export const signin = async (signinData: SignInDto) => {
  try {
    const response = await client.post("auth/signin", signinData);
    console.log("Response from signin API:", response.data);
    return response.data;
  } catch (err) {
    if (err && typeof err === "object" && "response" in err) {
      const axiosError = err as { response?: { data?: unknown } };
      console.log(axiosError.response?.data);
    } else {
      console.log("An unexpected error occurred:", err);
    }
    throw err;
  }
};
