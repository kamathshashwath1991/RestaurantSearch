import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer F2kcc8HU2aTHuxBdKgGU4dA8bfcKXypzMtoOywVWjx6ECWhsBdmdvRGpvanhoBA53YSBFRhGZQIUj6c7GdP2NeX3fksfuPvfckkAtgaE8LRvSIfNYoEqau1uzqw0YXYx',
  },
});
