import axios from "axios";

const fetchGitHubData = async () => {
  try {
    const response = await axios.get("https://api.github.com/users/osamaga37");
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchGitHubData;
