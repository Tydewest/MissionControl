const { response } = require('express');

exports.get = async (request, response) => {
    try {
        response.json({
            Status: "404 - Page Not Found",
            Message: 'The Requested Resource Was Not Found.'
        });
    } catch (error) {
        res.json({
            Status: "500 - Internal Server Error",
            Message: "Houston, we have a problem"
        })
    };
}