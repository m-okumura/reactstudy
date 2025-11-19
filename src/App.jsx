import { StrictMode } from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import { ColorfullMessage } from './components/ColorfullMessage';

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
  }, [num]);



  return (
    <>
      <h1 style={{ color: "red"}}>こんにちは</h1>
      <ColorfullMessage color="red">お元気ですか</ColorfullMessage>
      <ColorfullMessage color="green">元気です</ColorfullMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>奥村</p>}
    </>
  );
};

// export default App;
