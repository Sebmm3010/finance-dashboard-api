import express from "express";
import { KpiModel } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const kpis = await KpiModel.find();
    res.status(200).json(kpis);
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
});

export default router;
