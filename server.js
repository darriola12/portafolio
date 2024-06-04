const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const expressLayouts = require("express-ejs-layouts");
const path = require("path"); // Import path module
const bodyParser = require("body-parser")


// Set view engine and templates
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root


/* ***********************
 * Middleware
 * ************************/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

// Serve static files (including CSS) from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "public"), {
  // Specify MIME types for CSS files
  setHeaders: (res, path) => {
    if (path.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css");
    }
  }
}));

// Routes
app.use(static);
app.get("/", function(req, res) {
  res.render("index", { title: "Home" });
});

// Local Server Information
const port = process.env.PORT;
const host = process.env.HOST;

// Log statement to confirm server operation
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});

