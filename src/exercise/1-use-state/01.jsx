// Exercice 1 : 2 minutes
// Exercice 2 : 5 minutes
// Exercice 3 : 7 minutes
// Exercice 4 : 10 minutes

import { useState } from 'react';

const Name = ({ name, isReversed }) => {
  if (!name) {
    return <p>Write your name</p>;
  }
  return (
    <p>
      {isReversed
        ? `Hello ${name.split('').reverse().join('')}`
        : `Hello ${name}`}
    </p>
  );
};

const useStateHistory = (defaultValue) => {
  let [histoName, setHistoName] = useState(defaultValue);

  const deleteHistory = (indexToDel) => {
    setHistoName(histoName.filter((name, index) => index != indexToDel));
  };

  return [histoName, setHistoName, deleteHistory];
};

const ListHistoName = ({ listName, onClickEvent }) => {
  return (
    <ul>
      {listName.map((name, i) => (
        <li onClick={() => onClickEvent(i)} key={i}>
          {name}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  let [name, setName] = useState('');
  let [isReverseName, setIsReverseName] = useState(false);
  let [histoName, setHistoName, deleteHistory] = useStateHistory([]);

  const handleChange = (event) => {
    setHistoName([...histoName, event.target.value]);
    setName(event.target.value);
    console.log(histoName);
  };

  const reverseName = () => {
    setIsReverseName(!isReverseName);
  };

  return (
    <div>
      <input type="text" placeholder="Name" onChange={handleChange} />
      <input type="checkbox" checked={isReverseName} onChange={reverseName} />
      <Name name={name} isReversed={isReverseName} />
      <ListHistoName listName={histoName} onClickEvent={deleteHistory} />
    </div>
  );
};

export default App;
