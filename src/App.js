import "./App.css";
import WordArea from "./component/WordArea";
import KeyBoard from "./component/KeyBoard";
import NE from "./component/NE";
import { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [row, setRow] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState([]);

  const [ne, setNE] = useState(false);

  const [result, setResult] = useState(['BBBBB','OOOOO','SBOSB','BOSBO','SBSBS', 'SSSSS']);

  return (
    <div className="App">
      {result[row - 1] === 'SSSSS'? <div>끝</div>: <div></div>}
      <WordArea word={word} row={row} total={total} result={result}></WordArea>
      <KeyBoard
        word={total[row - 1]}
        result={result[row - 1]}
        onClickKey={(value) => {
          if (value === "BACK") {
            if (count !== 0) {
              setCount(count - 1);
              let _word = word;
              setWord(_word.substring(0, _word.length - 1));
            } 
          } else if(value === "ENTER"){
            if(word.length === 5){ // 다음줄
              // if(){ // 해당 단어가 단어 리스트에 없을 때
              // } else {} // 통과했을 때 다음 줄로 넘어가기
              setTotal([ ...total, word]);
              setRow(row + 1);
              setWord('');
              setCount(0);
            } else { // 길이 부족할 때
              setNE(true);
            }
          }else {
            if (count <= 4) {
            setCount(count + 1);
              let _word = word;
              setWord(_word + value);
            }
          }
        }}
      ></KeyBoard>
      {ne ? <NE onOutNE={()=>{setNE(false)}}></NE> : <></>}
    </div>
  );
}

export default App;
