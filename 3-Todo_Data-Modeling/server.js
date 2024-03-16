import exprees from "express";

const app = exprees();

const PORT = 4000;
app.get("/", (req, res) => {
  res.send("server is working well...");
});

app.listen(PORT, () => {
  console.log(`Server is at PORT no - ${PORT}`);
});
