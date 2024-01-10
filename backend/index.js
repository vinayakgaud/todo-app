import express from "express";
import "dotenv/config";
import {
  createTodoValidation,
  completeTodoValidation,
} from "./typeValidation.js";
import Todo from "./db.js";

const app = express();
app.use(express.json());

app.post("/createTodo", async (req, res) => {
  const createdPayload = req.body;
  const parsedPayload = createTodoValidation.safeParse(createdPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      err: "You sent the wrong inputs",
    });
    return;
  }

  //inserting in mongodb
  await Todo.create({
    title: createdPayload.title,
    description: createdPayload.description,
    completed: false,
  });
  res.json({
    msg: "TODO created",
  });
});
app.get("/getTodos", async (req, res) => {
  //get from DB
  const todos = await Todo.find({});
  res.json({
    todos,
  });
});
app.put("/completeTodo", async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = completeTodoValidation.safeParse(updatedPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      err: "You sent the wrong inputs",
    });
    return;
  }

  //update in DB
  await Todo.findOneAndUpdate(
    { _id: updatedPayload.id },
    { $set: { completed: true } }
  );

  res.json({
    msg: "TODO is marked as completed",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on http://localhost/${process.env.PORT}`);
});
