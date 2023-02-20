import Word from "./Word"
import "../style/word.css";
import { useEffect, useState } from 'react';

function WordArea(props) {
    const [html, setHtml] = useState([]);
    useEffect(() => {
        let _arr = [];
        for(let i = 0; i < 6; i++){
            if(i < props.row){
                _arr.push(<Word key={i} word={props.total[i]} result={props.result[i]}></Word>)
            } else if(i === props.row){
                _arr.push(<Word key={i} word={props.word} result={''}></Word>)
            }
            else _arr.push(<Word key={i} word={""} result={''}></Word>)
        }
        setHtml(_arr)
    },[props.row, props.word])
  return (
    <div className='word-area'>
        {html}
    </div>
  );
}
export default WordArea;
