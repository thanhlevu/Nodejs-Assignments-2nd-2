const sharp = require('sharp');

const doResize = (pathToFile, width, newPath, next) => {
    sharp(pathToFile)
        .resize(width)
        .toFile('thumbfilename',(err, info)=>{
            console.log('Resize OK');
            next();
        }).catch(err =>{
            console.log(err)
    });
};

module.exports = {
    doResize: doResize,
};