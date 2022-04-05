const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const { notFoundMiddleware } = require('./middleware/not-found');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const connectDB = require('./db/connection');
const auth = require('./middleware/auth');
require('dotenv').config();
connectDB(process.env.URL);
require('express-async-errors');


const PORT = process.env.PORT || 4500;

app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/jobs',auth,require('./routes/jobRoutes'));

app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server is Running");
});