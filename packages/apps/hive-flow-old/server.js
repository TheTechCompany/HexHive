const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/build'));

app.all(['/', '/login*', '/dashboard*'], (req, res) => {
   res.sendfile(__dirname + '/build/index.html');
});

app.listen(4000, () => {
   console.log('listening on 4000')
}).on('error', console.log);
