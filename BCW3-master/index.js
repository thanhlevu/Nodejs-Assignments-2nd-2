console.log('Server running ...');

var express = require('express')
var app = express()
//var fs = require("fs")
var multer = require('multer')

app.get('/', (req, res) => {
	console.log(__dirname)
	res.sendFile(__dirname + '/task_b.html')
})

var storage = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'uploads/')
	},
	filename: function(req,file,cb){ 
        cb(null,file.originalname)
    }
})

var upload = multer({storage: storage})

app.post('/', upload.single('file'), (req, res) => {
	console.log(req.file)
	res.send("Done")
})

app.listen(3000);
