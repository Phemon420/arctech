import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

// Configure CORS to allow the frontend origin
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use(router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});