import dbConnect from "./DB.js";
import express from "express";
import cors from "cors";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import orderRouter from "./routes/oderRouter.js";
import feedbackRouter from "./routes/feedbackRouter.js";
import messageRouter from "./routes/messageRouter.js";
dbConnect();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/message", messageRouter);

export default app;
