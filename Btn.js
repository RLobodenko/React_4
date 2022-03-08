import React from 'react';

function Btn({ setSelectedBtn,number }) {
  return (
    <div>
      <button onClick={() => setSelectedBtn(number)}>
       кнопка {number}
      </button>
    </div>
  );
}

export default Btn;
