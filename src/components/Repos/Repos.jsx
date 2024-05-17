import React, { useState, useEffect } from "react";
import { getRepos } from "../../Api/ReposApi";
import "./Repos.css";

const ReposList = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repositories = await getRepos(username);
        setRepos(repositories);
      } catch (error) {
        // Handle error
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      <section class="portfolio" id="portfolio">
        <h2 class="heading">
          latest <span>projects</span>
        </h2>

        <ul>
          <div class="portfolio-container">
            {repos.map((repo) => (
              <div class="portfolio-box">
                <h3>Name:</h3>
                <li key={repo.id}>{repo.name}</li>
                <a href={repo.html_url}>
                  <button type="button">GitHub Repo link</button>
                </a>
              </div>
            ))}
          </div>
        </ul>
      </section>
    </div>
  );
};

export default ReposList;
