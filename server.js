// set up ========================
var express = require('express'),
    pg = require('pg');
var app = express(); // create our app w/ express
var connectionString = 'postgres://postgres:postgres@localhost/postgres';

// configuration =================

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
//app.use(express.logger('dev')); // log every request to the console
//app.use(express.bodyParser()); // pull information from html in POST

// listen (start app with node server.js) ======================================




/*app.get('/api/pg', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('select * from pg_stat_user_tables', function(err, result) {
            //call `done()` to release the client back to the pool
            res.json(result);
            done();

            if (err) {
                return console.error('error running query', err);
            }
            console.log(result.rows[0].number);
            //output: 1
        });
    });
});*/

app.get('*', function(req, res) {
    res.sendfile('./index.html')
});
console.log("App listening on port 5000");
app.listen(5000);

