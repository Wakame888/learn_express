const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index.ejs', {title: "Express"}));

console.log(process.env.PORT);
console.log(process.env.IP);

let server = app.listen(process.env.PORT || 3000, 
                        process.env.IP || "0.0.0.0", 
                        () => {
                            const host = server.address().address;
                            const port = server.address().port;
                            console.log('Example app listening at http://%s:%s', host, port);
                        });
