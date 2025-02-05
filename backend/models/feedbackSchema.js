import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    message: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestaps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
