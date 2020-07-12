const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../dist");
app.use(express.static(publicDirectoryPath));
app.set("view engine", "html");

app.get("", async (req, res) => {
  try {
    res.render("index");
  } catch {
    res.status(500).send();
  }
});
app.get("/search", async (req, res) => {
  try {
    res.render("search.html");
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
