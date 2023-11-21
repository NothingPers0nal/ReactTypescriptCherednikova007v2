import React from 'react';
  
interface Props {
    delo: SpisokDel;
    toggleDelo: ToggleDelo;
}

const date = new Date().toLocaleDateString();

export const SpisokDelDela: React.FC<Props> = ({ delo, toggleDelo }) => {
    return (
      <li>
        <label style={{ textDecoration: delo.complete ? 'line-through' : undefined }}>
          <input type='checkbox' checked={delo.complete} onClick={() => {toggleDelo(delo);}}/>{delo.text}<button type="reset">❎</button>
        </label>
        <label dangerouslySetInnerHTML={{__html: date}}></label>
      </li>
    );
};