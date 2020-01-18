import Link from 'next/link';
import styled from 'styled-components';

export const formatDateTime = dateTime => {
  const date = dateTime.split('T')[0];
  const splitDate = date.split('-');
  const dateIdn = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
  return dateIdn;
};

export const removeSource = title => {
  const newTitle = title.split(' - ')[0];
  return newTitle;
};

const Card = props => {
  const news = {
    title: removeSource(props.title),
    titleUrl: props.title.toLowerCase(),
    source: props.source.name,
    sourceUrl: props.url,
    author: props.author,
    date: formatDateTime(props.publishedAt),
    description: props.description,
    image: props.urlToImage
  };

  return (
    <Link href="/p/[id].js" as={`/p/${news.titleUrl}`}>
      <CardWrapper>
        <CardContent>
          <CardTitle>{news.title}</CardTitle>
          <CardInformation>
            <span>Source: </span>
            <a href={news.sourceUrl} target="_blank">
              {news.source}
            </a>{' '}
            | <span>Author: </span> {news.author ? news.author : 'Unknown'} |{' '}
            <span>Date: </span> {news.date}
          </CardInformation>
          <CardDescription>{news.description}</CardDescription>
        </CardContent>
        <CardThumbnail>
          {news.image && <img src={news.image} alt="news-image" />}
        </CardThumbnail>
      </CardWrapper>
    </Link>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 2.5%;
  cursor: pointer;

  &:hover {
    border: 1px solid #bbb;
  }
`;

const CardContent = styled.div`
  width: 75%;
  padding-right: 5%;
  border-radius: 10px;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  /* width: 75%;
  border-radius: 10px;
  cursor: pointer; */
`;

const CardInformation = styled.p`
  font-size: 1vw;
  margin-top: -2%;

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

const CardDescription = styled.p`
  /* width: 75%;
  border-radius: 10px;
  cursor: pointer; */
  text-align: justify;
`;

const CardThumbnail = styled.div`
  width: 25%;
  img {
    width: 100%;
  }
`;

export default Card;
