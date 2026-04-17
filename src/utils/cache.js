'use strict';

const cache = new Map();

/**
 * Guarda datos con expiración
 */
function setCache(key, value, ttlMs = 300000) {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttlMs
  });
}

/**
 * Lee caché si sigue vigente
 */
function getCache(key) {
  const item = cache.get(key);

  if (!item) return null;

  if (Date.now() > item.expiresAt) {
    cache.delete(key);
    return null;
  }

  return item.value;
}

module.exports = {
  getCache,
  setCache
};