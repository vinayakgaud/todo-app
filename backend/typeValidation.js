//zod input validation

import z from "zod";

export const createTodoValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const completeTodoValidation = z.object({
  id: z.string(),
});
