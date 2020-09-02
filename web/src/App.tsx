import React from 'react';
import { useHelloQuery } from './generated/graphql';

const App: React.FC = () => {
  // format of query is taken from graphql_playground
  const {data, loading} = useHelloQuery();
  if (loading || !data) { return <div>loading...</div>; }
  return <div>{data.hello}</div>;
  // return <div>Hello</div> ;
}

export default App;
