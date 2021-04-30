const express = require("express");
// is an Express middleware library that you can incorporate in your apps for server-side data validation
const expressValidator = require("express-validator");
require("dotenv").config();

// App
const app = express();
app.get("/api", (req, res) => {
    res.send("Hello from Notion team!");
})

// getting the port from env and listening to it
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`notion is running on port ${port}`);
})