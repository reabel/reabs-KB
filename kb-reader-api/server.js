import * as fs from "fs";
import express from "express";
const app = express();
const port = 8000;

//const test = path.resolve("../podcasts.md");
const test = "podcasts.md";
//Don't fetch, juts read from FS and return text, duh.
const testFetch = () => {
  return fs.readFileSync(test);
};

const lookup = (path) => {
  console.log("looking up ", path);
  return fs.readFileSync("../" + path);
};

app.get("/", (req, res) => {
  res.send("Main - Structure");
});

app.get("/test/:route", (req, res) => {
  console.log("test w/ route", req.params, req.body);
  res.send(lookup(req.params["route"] || test));
});

app.get("/test", (req, res) => {
  console.log("test w/o route", req.params, req.body, req.query.route);
  res.send(lookup(req.query.route || test));
});

app.get("/structure", (req, res) => {
  res.send(testFetch());
});

app.get("/markdown", (req, res) => {
  res.send("Markdown");
});

app.listen(port, () => {
  console.log("We are live on " + port);
});
