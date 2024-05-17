// src/GitHubService.js
import axios from 'axios';

const API_URL = 'https://api.github.com';

const getRepos = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};

export { getRepos };
