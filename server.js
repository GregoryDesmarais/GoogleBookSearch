const express = require("express");
const path = require("path");
const routes = require("./routes")


const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Connect to DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://gbs:Access2468@ds349628.mlab.com:49628/heroku_q6kbjcqs" || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });


// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`API server accessible here: http://localhost:${PORT} !`);
});