import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "./api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
