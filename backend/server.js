(function(proc, logger) {
  'use strict';

  const express = require('express'),
    bodyParser = require('body-parser'),
    host = proc.env.HOST || '127.0.0.1',
    port = proc.env.PORT || 9001,
    beers = [
      {
        name: 'Gulden Draak'
      },
      {
        name: 'Ambar'
      },
      {
        name: 'Arran'
      },
      {
        name: 'Easy IPA'
      },
      {
        name: 'Sink the Bismark'
      },
      {
        name: 'Zwick\'l'
      }
    ];

  let app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  app.get('/api/collections/beers', (req, res) => {
    setTimeout(() => {
      res.send(beers);
    }, 1000);
  });

  app.listen(port, () => {
    logger.log('App listening at http://%s:%s', host, port);
  });
}(process, console));
