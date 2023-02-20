import { useEffect, useState } from "react";
import "../style/word.css";

function Word(props) {
  const [html, setHtml] = useState([]);
  useEffect(() => {
    let tile = [];
    if (props.word) {
      let _check = false;
      if (props.result.length === 5) {
        _check = true;
      }
      for (let i = 0; i < 5; i++) {
        if (props.word[i]) {
          if (_check) {
            if (props.result[i] === "S") {
              tile.push(
                <div key={i} className="tile s-tile">
                  {props.word[i]}
                </div>
              );
            } else if (props.result[i] === "B") {
              tile.push(
                <div key={i} className="tile b-tile">
                  {props.word[i]}
                </div>
              );
            } else {
              tile.push(
                <div key={i} className="tile o-tile">
                  {props.word[i]}
                </div>
              );
            }
          } else{
          tile.push(
            <div key={i} className="tile">
              {props.word[i]}
            </div>
          );
          }
        } else {
          tile.push(<div key={i} className="tile"></div>);
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        tile.push(<div key={i} className="tile"></div>);
      }
    }
    setHtml(tile);
  }, [props.word, props.result]);

  //   useEffect(() => {
  //     let word = fullWord;
  //     if(props.newKey === 'BACK'){
  //         setFullWord(word.substring(0,word.length - 1))
  //     } else{
  //         setFullWord(word + props.newKey);
  //     }
  //   }, []);
  return <div className="row">{html}</div>;
}
export default Word;
