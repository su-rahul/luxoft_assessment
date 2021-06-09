const express = require("express");
const app = express();
// importing Router
const userRouter = require("./routers/users");

const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(userRouter);

app.listen(port, () => {
  console.log("Server started at port " + port);
});
