'use strict';
var request = require('request')

// const LoginService = require('qcloud-weapp-server-sdk').LoginService;
var API_URL = 'http://apis.map.qq.com/ws/geocoder/v1/?key=D2MBZ-GRNRU-WFFVT-4XKS7-GWQ55-RPFMJ&location='

module.exports = (req, res) => {
    // log(req.query)
    var url = API_URL + req.query.p
    log(url)
    request(url, function (error, response, body) {
        log('error:', error); // Print the error if one occurred
        log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // log('body:', body); // Print the HTML for the Google homepage.
        if (error) {
            res.json({'code': -1, 'message': 'nolocation'})
        }
        res.json({'code': 0, 'message': 'ok', 'location': body.result.address_component.city});

    });

};