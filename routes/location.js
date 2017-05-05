'use strict';
var request = require('request')

// const LoginService = require('qcloud-weapp-server-sdk').LoginService;
var API_URL = 'http://apis.map.qq.com/ws/geocoder/v1/?key=D2MBZ-GRNRU-WFFVT-4XKS7-GWQ55-RPFMJ&location='

module.exports = (req, res) => {
    console.log(req.query)
    var url = API_URL + req.query.p
    console.log(url)
    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    res.json({
        'code': 0,
        'message': 'ok',
    });
};