import express from "express";

const app = express();

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.json({ message: "Bien" });
});

export default app;
