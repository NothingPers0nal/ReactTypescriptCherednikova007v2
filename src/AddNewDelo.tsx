import React, { useState } from 'react';

interface Props {
    addDelo: AddDelo;
  }

export const AddNewDelo: React.FC<Props> = ({addDelo}) => {
  const [text, setText] = useState('');
  return (
    <form>
        <input id="input-delishki" type="text" value={text} onChange={(e) => {setText(e.target.value);}}/>
        <button type="reset" onClick={(e) => {setText('');}}>❎</button>
        <button type="submit" onClick={(e) => {e.preventDefault(); addDelo(text); setText('');}}>Записать дельце</button>
    </form>
  );
};