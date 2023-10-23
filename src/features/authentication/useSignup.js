import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success(
        "Account successfully created. A link has been sent to your email, use it to verify your account."
      );
    },
  });

  return { signup, isLoading };
}
