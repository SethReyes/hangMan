var fs = require("fs");
fs.readFile("./listofwords.txt", function(text){
    var text = fs.readFileSync("./file.txt").toString('utf-8').split("\n");
    for (let i=0; i<text.length; i++){
        if (text[i].length<5){
            text.splice(i,1)
        }
    }
    const writeStream = fs.createWriteStream('file.txt');
    const pathName = writeStream.path;
     
      
    // write each value of the array on the file breaking line
    text.forEach(value => writeStream.write(`${value}\n`));
    
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

