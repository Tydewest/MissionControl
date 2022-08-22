const { response } = require('express');

exports.get = async (request, response) => {
    try {
        response.json({
            Status: "200 - OK",
            Message: 'All Good In The Hood'
        });
    } catch (error) {
        res.json({
            Status: "500 - Internal Server Error",
            Message: "Houston, we have a problem"
        })
    };
}