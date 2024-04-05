const fs = require('fs');
const path = require('path')
const base = "../../";

// fs.readdirSync(base, function(err, files) {
//     const txtFiles = files.filter(file => {path.extname(file).toLowerCase() === '.md'})
//     // do something with your files, by the way they are just filenames...
//     console.log('files unfiltered ==>', files);
//     console.log('err', err);
//     console.log('files filtered ==>', txtFiles);
//   })
  
  /**
   * recursive via https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directories-nodejs
   */

//using generators / yield (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions)  
function *walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      if(file.name === 'node_modules')
        yield;
      else
        yield* walkSync(path.join(dir, file.name));
    } else {
      if(path.extname(file.name).toLowerCase() === '.md')
        yield path.join(dir, file.name);
    }
  }
}
//https://www.learn-ts.org/en/Arrays
//let filteredFiles: Array<string> = []
//for (const filePath of walkSync(__dirname)) {
  for (const filePath of walkSync('../')) {
  //filteredFiles.push('meow');
  console.log(filePath);
}

//console.log(filteredFiles);