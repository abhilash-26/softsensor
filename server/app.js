const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", require("./routes/productRoute"));

app.listen(8080, () => {
  console.log("server is running..");
});
