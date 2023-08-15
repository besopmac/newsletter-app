import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

export function useSendMail() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (data: { email: string }) => {
      return axios.post(
        "https://idonh5ia7uy3oajrcdt23k6rdi0xwjyr.lambda-url.sa-east-1.on.aws/",
        data
      );
    },
    onSuccess: () => {
      toast("Assinatura confirmada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        type: "success",
        theme: "dark",
      });
    },
    onError: () => {
      toast("Erro ao confirmar. Verifique seu e-mail e tente novamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        type: "error",
      });
    },
  });

  return {
    isSuccess,
    mutate,
    isError,
  };
}
