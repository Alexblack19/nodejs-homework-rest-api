const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config(); // метод config шукає в проекті файл <.env> (текстовий файл), читає його построково та додає в process.env змінні оточення DB_HOST та PORT (у вигляді ключ-значення)

const authRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");

const app = express(); // app - веб-сервер

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public")); // middleware для роздачі статичних файлів з папки public

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
