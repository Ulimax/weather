const router = require('express').Router();
const { getWeather } = require('../controllers/weather.controller');

router.get('/weather/:city', getWeather);

module.exports = router;