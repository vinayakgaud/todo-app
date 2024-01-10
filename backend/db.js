import { model, Schema, connect } from "mongoose";
import "dotenv/config";
import { boolean } from "zod";

connect(`${process.env.DB_PATH}${process.env.DB_NAME}`)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB error", err));

const todoSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model("todo", todoSchema);
export default Todo;
