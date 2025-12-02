import express from 'express';

const router = express.Router();

import { router as routerFromVegGroup } from "./VegGroup/routes.js";
import { router as routerFromVegTable } from "./VegTable/routes.js";

router.use("/VegGroup", routerFromVegGroup);
router.use("/VegTable", routerFromVegTable);

export { router };