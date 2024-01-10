//zod input validation

import z from "zod";

export const createTodoValidation = z.object({
  title: z.string(),
  description: z.string(),
});

export const completeTodoValidation = z.object({
  id: z.string(),
});
