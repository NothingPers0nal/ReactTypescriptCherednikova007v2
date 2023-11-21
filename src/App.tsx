import React, { useState } from 'react';
import {SpisokDel} from './SpisokDel';
import { AddNewDelo } from './AddNewDelo';

const initDelo: SpisokDel[] = [
  {
    text: 'Посидеть на кувшинке',
    //date: new Date,
    complete: false,
  },
  {
    text: 'Половить мушек',
    //date: new Date,
    complete: false,
  },
  {
    text: 'Поплавать в болотце',
    //date: new Date,
    complete: false,
  },
];



function App() {
  const [delo, setDelo] = useState(initDelo);

  //  Изменение состояния дела(зачёркнуто или нет)
  const toggleDelo = (selectedDelo: SpisokDel) => {
    const newDelo = delo.map((todo) => {
      if (todo === selectedDelo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setDelo(newDelo);
  };

  //  Добавление дела
  //const nowDate = new Date();
  const addDelo: AddDelo = (text: string) => {
    const newDelo = { text, complete: false };
    setDelo([...delo, newDelo]);
  };

  return (
    <>
      <AddNewDelo addDelo={addDelo}/>
      <SpisokDel delo={delo} toggleDelo={toggleDelo} />
    </>

    );
}

export default App;