import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestaps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
