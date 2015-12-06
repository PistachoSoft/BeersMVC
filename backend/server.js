(function(proc, logger) {
  'use strict';

  const express = require('express'),
    bodyParser = require('body-parser'),
    host = proc.env.HOST || '0.0.0.0',
    port = proc.env.PORT || 9001,
    beers = require('./data/beers.json');

  let app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  app.get('/collections/beers', (req, res) => {
    setTimeout(() => {
      res.send(beers);
    }, 1000);
  });

  app.listen(port, host, () => {
    logger.log('App listening at http://%s:%s', host, port);
  });
}(process, console));
