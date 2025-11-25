import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js"
import { router as routerFromInsert } from "./Insert/routes.js"
import { router as routerFromAlter } from "./Alter/routes.js"
import { router as routerFromGroupBy } from "./GroupBy/routes.js"

router.use("/Read", routerFromRead);
router.use("/Insert", routerFromInsert);
router.use("/Alter", routerFromAlter);
router.use("/GroupBy", routerFromGroupBy);

export { router };