import { Router } from "express";
import {
  createOrder,
  succes,
  webhook,
} from "../Controllers/ControllerPayments.js";

const router = Router();

router.get("/create-orden", createOrder
);

router.get("/succes", succes);

router.get("/webhook", webhook);

export default router;
