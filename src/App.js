import React from 'react';

const App = () => {
  const date = new Date();
  console.log(date.toJSON())
  return (
    <div>
      <h1>Public and Private Routes</h1>
      <h2>data</h2>
      <p>{date.toString().slice(4,24)}</p>
    </div>
  );
}

export default App;
