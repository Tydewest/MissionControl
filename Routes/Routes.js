// Initialize express router
const router = require('express').Router()
const Default = require('../Controllers/DefaultController');
const Error = require('../Controllers/ErrorController');

// Main Content Route
router.route('/')
    .get(Default.get)

// Error Route
router.route('*')
    .get(Error.get)

// Export API routes
module.exports = router;