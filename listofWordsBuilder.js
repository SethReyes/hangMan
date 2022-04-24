var fs = require("fs");
fs.readFile("./listofwords.txt", function(text){
    var text = fs.readFileSync("./file.txt").toString('utf-8').split("\n");
    const writeStream = fs.createWriteStream('listofwords3.txt');
    const pathName = writeStream.path;
     
      
    // write each value of the array on the file breaking line
    text.forEach(value => writeStream.write(`\'${value}\', `));
    
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
       console.log(`wrote all the array data to file ${pathName}`);
    });
    
    // handle the errors on the write process
    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`)
    });
    
    // close the stream
    writeStream.end();
});

