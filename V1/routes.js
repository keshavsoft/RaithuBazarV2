import express from 'express';

const router = express.Router();

import { router as routerFromVegetablesTable } from "./VegetablesTable/routes.js";

router.use("/VegetablesTable", routerFromVegetablesTable);

export { router };