import React from 'react';
import './App.css';
import Test from './components/Test';

function App() {

  const [Getter, Setter] = React.useState(1);

  console.log(Getter);

  return (
    <div className="App" id="" onClick={() => Setter(Getter+1)}>
      <Test title='Oui le test'></Test>
      {Getter}
    </div>
  );
}

export default App;
