'use strict';

const request = require('supertest');
const app = require('../../src/app');

describe('Weather API', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  /**
   * Ciudad válida
   */
  test('Debe responder clima de Madrid', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        name: 'Madrid',
        sys: { country: 'ES' },
        main: {
          temp: 13.23,
          humidity: 58
        },
        weather: [
          {
            description: 'muy nuboso'
          }
        ]
      })
    });

    const res = await request(app).get('/api/weather/Madrid');

    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual({
      ciudad: 'Madrid',
      pais: 'ES',
      temperatura: 13.23,
      descripcion: 'muy nuboso',
      humedad: 58
    });
  });

  /**
   * Debe incluir propiedades principales
   */
  test('Debe incluir ciudad, temperatura y humedad', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        name: 'Madrid',
        sys: { country: 'ES' },
        main: {
          temp: 20,
          humidity: 40
        },
        weather: [
          {
            description: 'soleado'
          }
        ]
      })
    });

    const res = await request(app).get('/api/weather/Madrid');

    expect(res.body).toHaveProperty('ciudad');
    expect(res.body).toHaveProperty('temperatura');
    expect(res.body).toHaveProperty('humedad');
  });

  /**
   * Ciudad inválida
   */
  test('Debe manejar ciudad inexistente', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({
        message: 'city not found'
      })
    });

    const res = await request(app).get('/api/weather/xxxxzzz');

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });

  /**
   * Error externo
   */
  test('Debe manejar error de red', async () => {

    global.fetch = jest.fn().mockRejectedValue(
      new Error('Network Error')
    );

    const res = await request(app).get('/api/weather/Madrid');

    expect(res.statusCode).toBe(500);
  });

  /**
   * Ruta inexistente
   */
  test('Debe responder 404 en ruta no válida', async () => {

    const res = await request(app).get('/api/no-existe');

    expect(res.statusCode).toBe(404);
  });

  /**
   * Método incorrecto
   */
  test('Debe rechazar POST', async () => {

    const res = await request(app).post('/api/weather/Madrid');

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });

});