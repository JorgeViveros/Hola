const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 5000, function(){
	console.log('http://localhost:5000');
});

/*
app.listen(3000, function(){
	console.log('App funcionando en el puerto 3000');
})*/