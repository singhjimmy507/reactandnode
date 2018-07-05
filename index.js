// const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/signIn', (req, res) => {
	res.send({ hi: ' there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
	console.log('The server is running');
});
