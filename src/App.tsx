import { StrictMode } from 'react';
import './App.css';

const App = () => {
    const onClickButton = () => alert();
    const contentStyle = {
        color: "red",
        fontSize: "20px"
    };
  return (
    <>
        <h1 style={contentStyle}>こんにちは</h1>
        <p>おげんきですか</p>
        <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
