import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      /* -> this is a special type (after define type user ref: {that which model is to define here}) */
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // from User Schema
    },
    subTodos: [
      {
        /*-> here am using ref of subtodos schema */
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], //Array of Sub-Todos
  },

  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
