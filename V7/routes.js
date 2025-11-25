import express from 'express';

const router = express.Router();

import { router as routerFromVegTable } from "./VegTable/routes.js";

router.use("/VegTable", routerFromVegTable);

export { router };