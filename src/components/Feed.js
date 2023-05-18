import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
      );
      console.log(response);
      setArticles(response.data.articles);
    };

    getArticles();
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <FeedWrapper>
      <SearchBar onSearch={handleSearch} />
      {articles.map((article) => (
        <NewsArticle
          title={article.title}
          description={article.description}
          url={article.url}
          urlImage={article.urlToImage}
        />
      ))}
    </FeedWrapper>
  );
};

export default Feed;

const FeedWrapper = styled.div`
  background-color: #AEC6CF;
`;
