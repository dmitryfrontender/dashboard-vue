import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const footballTeamsStatistics = defineStore('footballTeamsStatistics', async() => {
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
    params: {
      league: '39',
      season: '2020',
      team: '33'
    },
    headers: {
      'X-RapidAPI-Key': 'e5fbf27d94msh191e6cfec51810fp1901d4jsne99a630e19a3',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})
