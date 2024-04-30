/**
 * KB Reader API 2024 - Ryan Reabel
 * 
 * TODO: Sanitize input from request:
 *   - ensure only scope of internal project is allowed.
 *   - ensure only markdown files are retrieved.
 *   - ensure yaml spec isn't impacted by these changes.
 * TODO: General error handling
 *   - File not found.
 * TODO: MD file structure retrieval
 */
import * as fs from "fs";
import express from "express";
const app = express();
const port = 8000;

const test = "podcasts.md";

/**
 * fetchMD returns text from markdown files
 * TODO: Check integrity of
 * @returns Markdown text
 */
const lookup = (path) => {
  console.log("looking up ", path);
  return fs.readFileSync("../" + path);
};

const analyzeStruct = () => {
  return "WIP";
};

app.get("/", (req, res) => {
  res.send("**KB Reader API - WIP** \n Routes available: \n /markdown - query for md files \n /structure - returns a list of queryable markdown files \n /spec - returns API info in YAML form");
});

app.get("/spec", (req, res) => {
  res.send(lookup("./kb-reader-api/spec.yaml"));
});

app.get("/structure", (req, res) => {
  res.send(analyzeStruct());
});

app.get("/markdown", (req, res) => {
  res.send(lookup(req.query.route || test));
});

app.listen(port, () => {
  console.log("Server active on " + port + " Routes available: \n /markdown - query for md files \n /structure - returns a list of queryable markdown files \n /spec - returns API info in YAML form");
});
