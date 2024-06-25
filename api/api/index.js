import express from "express";
import "dotenv/config";

const port = process.env.PORT || 4000;
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to DoubtEase!!");
});

app.listen(port, () => {
  console.log("App listening on http://localhost:" + port);
});
