import Feedback from "../models/feedbackSchema.js";

const createFeedback = async (req, res) => {
  const { message, rating } = req.body;

  if (!rating) {
    return res.status(400).json({ error: "Please provide a rating" });
  }

  const feedback = new Feedback({
    message,
    rating,
  });

  try {
    await feedback.save();
    res.status(201).json({
      message: "Feedback created successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
};

export { createFeedback };
