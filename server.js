const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// web routes
app.use("/", require("./routes/countries"));

app.listen(port, function () {
  console.log(`Server running on : ${port}`);
});
