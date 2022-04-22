import { Schema, model } from "mongoose";

const rulingSchema = new Schema(
  {
    name: String,
    description: String,
    picture: String,
    votes: {
      positive: Number,
      negative: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Ruling", rulingSchema);
