import express from "express";
import path from"path";
import open from "open"; // used to open site in the browser
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000; // port view app
const app = express(); // instance of express
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// handles what happens when this route is hit
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err){
    if(err){
        console.log(err)
    } else{
        open("http://localhost:" + port);
    }
});
