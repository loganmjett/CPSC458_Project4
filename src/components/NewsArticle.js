import React from 'react';
import styled from 'styled-components';

const NewsArticle = ({ title, description, url, urlImage }) => {
  return (
    <Wrapper>
      <Item>
        <Image src={urlImage} alt={urlImage} />
        <Content>
          <Title>
            <a href={url}>{title}</a>
          </Title>
          <Description>{description}</Description>
        </Content>
      </Item>
    </Wrapper>
  );
};

export default NewsArticle;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  color: #333;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0;
`;
