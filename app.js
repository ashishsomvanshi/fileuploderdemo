const fs = require('fs');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

var fileNames = [];

if (fs.exists("./Data/" + argv.fileName)) {

    console.log("File Already Exists. Please Enter New Filename.");

} else {

    fs.write(argv.fileName, "You are awesome", function(err) {

        console.log("File Writern Sucessfully.");
        fileNames.push(argv.fileName)
        saveFileName(argv.fileName)
    });
}

function saveFileName(filename) {

    fs.appendfile("savedFiles", filename,
        function(err) {
            console.log("Filenames Saved Sucssesfully.");
        })

}