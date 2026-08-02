import type { SignInDto } from "@procura/shared";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../api/auth.api";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation({
    mutationFn: async (signinData: SignInDto) => {
      return await signin(signinData);
    },
    onSuccess: (data) => {
      console.log("Signin successful, received data:", data);
      setAuthToken(data.access_token);
      navigate("/admin");
    },
  });

  return {
    Signin: mutate,
    error,
    isPending,
  };
}
