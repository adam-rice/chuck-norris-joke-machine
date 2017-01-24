/*jshint esversion: 6 */

import axios from 'axios';

const CHUCK_DATABASE_URL = 'http://api.icndb.com/jokes/random';

module.exports = {
  getJoke: function() {
    return axios.get(CHUCK_DATABASE_URL).then(function(response) {
      if(response.data.cod && response.data.message) {
        throw new Error('error');
      } else {
        return response;
      }
    }, function(response) {
      throw new Error(response.data.message);
    });
  }
};
