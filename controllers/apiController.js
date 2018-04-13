var bodyParser = require('../node_modules/body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/acme/api/v45.1/order', function(req, res) {
        if (req.body.api_key && ['cascade.53bce4f1dfa0fe8e7ca126f91b35d3a6'].indexOf(req.body.api_key) !== -1) {
            var order_id = Math.floor(Math.random() * Math.floor(1000000));
            res.json({order: order_id });
        } else {
            res.status(403).send('api key not accepted');
        }
    });
}