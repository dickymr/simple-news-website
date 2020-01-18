// import { useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../src/components/Layout';
import Card from '../src/components/Card';
// import UserContext from '../src/context/context';

const index = props => {
  // const { category } = useContext(UserContext).state;

  return (
    <Layout>
      {props.news.map((ele, index) => {
        return <Card key={index} {...ele} />;
      })}
    </Layout>
  );
};

index.getInitialProps = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=id&apiKey=fe10d3dbecfe418baeb787b670337a86'
  );
  const data = await res.json();

  return {
    news: data.articles.map(item => item)
  };
};

export default index;
