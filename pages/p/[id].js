import { useRouter } from 'next/router';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Layout from '../../src/components/Layout';
import { removeSource, formatDateTime } from '../../src/components/Card.js';

const News = props => {
  const router = useRouter();
  const filterNews = props.data.articles.filter(
    ele => ele.title.toLowerCase() === router.query.id
  );

  const news = {
    title: removeSource(filterNews[0].title),
    titleUrl: filterNews[0].title.toLowerCase(),
    source: filterNews[0].source.name,
    sourceUrl: filterNews[0].url,
    author: filterNews[0].author,
    date: formatDateTime(filterNews[0].publishedAt),
    description: filterNews[0].content,
    image: filterNews[0].urlToImage
  };

  return (
    <Layout>
      <Title>{news.title}</Title>
      <Information>
        <span>Source: </span>
        <a href={news.sourceUrl} target="_blank">
          {news.source}
        </a>{' '}
        | <span>Author: </span> {news.author ? news.author : 'Unknown'} |{' '}
        <span>Date: </span> {news.date}
      </Information>
      <ImageWrapper>
        <img src={news.image} alt="news-image" />
      </ImageWrapper>
      <Content>{news.description}</Content>
    </Layout>
  );
};

const Title = styled.h2``;

const Information = styled.div`
  font-size: 1vw;
  margin-top: -2%;
  margin-bottom: 5%;

  span {
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5%;

  img {
    width: 100%;
  }
`;

const Content = styled.p``;

News.getInitialProps = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=id&apiKey=fe10d3dbecfe418baeb787b670337a86'
  );
  const data = await res.json();

  return {
    data
  };
};

export default News;
