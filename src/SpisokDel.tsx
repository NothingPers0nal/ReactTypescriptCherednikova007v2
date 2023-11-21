import React from 'react';
import {SpisokDelDela} from './DelishkiDela';

interface Props {
    delo: SpisokDel[];
    toggleDelo: ToggleDelo;
}

export const SpisokDel: React.FC<Props> = ({ delo, toggleDelo }) => {
    return (
        <ul>
          {delo.map((todo) => (<SpisokDelDela key={todo.text} delo={todo} toggleDelo={toggleDelo} />))}
        </ul>
    );
};