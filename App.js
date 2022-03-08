import React, { useEffect, useState } from 'react';
import './App.css';
import Btn from './Btn';
import Content from './Content';

const App = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  // useEffect(() => {
  //   if (selectedBtn % 5 == 0) {
  //     console.log('asds');
  //   }
  // }, [selectedBtn]);
  // let a=5
  // if(a>4){
  //  console.log(a)
  // }else if (a<2){
  // console.log(a+1)
  // }else{
  // console.log(a+1)
  // }
  // a > 4
  //   ? console.log(a)
  //   : a < 2
  //   ? console.log(a + 1)
  //   : console.log(a + 1);
  // a > 4 && console.log(a);
  // 0 undefined null '' === false
  console.log(selectedBtn);
  return (
    <div className="App">
      {/* <button onClick={() => setSelectedBtn(1)}>
        нажать
      </button>
      <button onClick={() => setSelectedBtn(2)}>
        нажать
      </button>
      <button onClick={() => setSelectedBtn(3)}>
        нажать
      </button>
      {selectedBtn === 1 && (
        <div>
          <ul>
            <li>asdasd</li>
          </ul>
        </div>
      )}
      {selectedBtn === 2 && (
        <div>HHHHHHHHHHHHHHHHHHHHHHHHhh</div>
      )}
      {selectedBtn === 3 && (
        <div>DDDDDDDDDDDDDDDDDDDDD</div>
      )} */}
      <Btn setSelectedBtn={setSelectedBtn} number='1'/>
       <Btn setSelectedBtn={setSelectedBtn} number='2' />
      <Btn setSelectedBtn={setSelectedBtn} number='3' />
      <Content selectedBtn={selectedBtn}/>
    </div>
  );
};

export default App;
