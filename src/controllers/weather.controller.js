const weatherService = require('../services/weather.service');

exports.getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const data = await weatherService.getWeatherByCity(city);

    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};