const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require('hbs')


// public static path
const static_path = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname, "../templates/views"));
const partials_path = (path.join(__dirname, "../templates/patials"));


app.set('views engine','hbs')
app.set('views',template_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

// routing
app.get("/", (req, res) => {
    res.render("index.hbs")
})
app.get("/home", (req, res) => {
    res.render("index.hbs")
})

app.get("/about", (req, res) => {
    res.render("about.hbs")
})

app.get("/weather", (req, res) => {
    res.render("weather.hbs")
})

app.get("*", (req, res) => {
    res.render("404error.hbs", {
        errorMsg: "Oops! Page Not Found"
    })
})



app.listen(port, () => {
    console.log("listening on port :", port)
});