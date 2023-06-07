import express from "express";
import { PORT } from "./congif.js";
import morgan from "morgan";
import PaymentsRoutes from "./Routes/Payments.routes.js";

const app = express();
app.listen(PORT);
console.log(`Server on port: ${PORT}`);

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(PaymentsRoutes);
