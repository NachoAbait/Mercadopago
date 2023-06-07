import { Router } from "express";
import { createOrder, webhook } from "../Controllers/ControllerPayments.js";

const router = Router();

router.post("/create-orden", createOrder);

router.get("/success", (req, res) => {
  res.send("success");
});

router.get("/failure", (req, res) => {
  res.send("failure");
});
router.get("/pending", (req, res) => {
  res.send("pending");
});

router.post("/webhook", webhook);

export default router;
