import express from 'express';
import cookieParser from 'cookie-parser';

import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";
import { router as routerFromV9 } from "./V9/routes.js";

const app = express();

var port = normalizePort(process.env.PORT || 3000);

// serve static files from Public
app.use(express.static('Public'));

app.use(cookieParser());
app.use("/V7", routerFromV7);
app.use("/V8", routerFromV8);
app.use("/V9", routerFromV9);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});