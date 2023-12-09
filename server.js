const express = require('express');

const app = express();

const port = 3000;

const indexRouter = require('./routes/index')
const logger = require('./middlewares/logger.mdware');

const errorHandler = require('./middlewares/errors.mdware');



app.use(express.json());


app.use("/", logger, indexRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});