import mongoose from "mongoose";

const SubmissionSchema =
  new mongoose.Schema({

    username: String,

    problem: String,

    language: String,

    status: String,

    runtime: String,

    memory: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },

  });



export default
  mongoose.models.Submission ||

  mongoose.model(
    "Submission",
    SubmissionSchema
  );