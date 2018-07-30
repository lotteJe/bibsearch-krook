const express = require('express');
var cors = require('cors');
const app = express();

// app.use(cors({
//     origin: 'http://bibsearch-krook.herokuapp.com/',
//     credentials: true
// }));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//     next();
// });

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);