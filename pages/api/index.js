import express from "express";
import cors from 'cors'

const app = express();

// Config Express
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.json({ message: "Bien" });
});

export default app;
