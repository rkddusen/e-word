import { useEffect, useState } from "react";
import Tile from "./Tile";
import "../style/keyboard.css";

function KeyBoard(props) {
  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    if (props.word && props.result) {
      let _arrWord = [];
      _arrWord[0] = props.word[0];
      let _arrResult = [];
      _arrResult[0] = props.result[0];

      let isin = false;
      for (let i = 1; i < 5; i++) {
        for (let j = 0; j < _arrWord.length; j++) {
          if (props.word[i] === _arrWord[j]) {
            // 중복 값이 있을 때
            isin = true;
            console.log(_arrResult[j]);
            console.log(props.result[i]);
            if (
              _arrResult[j] === "O" &&
              (props.result[i] === "B" || props.result[i] === "S")
            ) {
              // 기존 결과보다 더 정확한 결과
              _arrResult[j] = props.result[i];
            } else if (_arrResult[j] === "B" && props.result[i] === "S") {
              _arrResult[j] = props.result[i];
            }
            break;
          }
        }
        if (!isin) {
          _arrWord.push(props.word[i]);
          _arrResult.push(props.result[i]);
        } else {
          isin = false;
        }
      }

      if (key.length < 1) {
        // key에 아무것도 없을 때
        console.log("시작");
        setKey(_arrWord);
        setValue(_arrResult);
      } else {
        // key와의 중복 체크
        console.log("중복체크");
        for (let i = 0; i < _arrWord.length; i++) {
          let index = key.findIndex((element) => element === _arrWord[i]);
          if (index !== -1) {
            // 중복 있음
            if (value[index] === "O") {
              if (_arrResult[i] === "S" || _arrResult[i] === "B") {
                // 새로 추가되는 결과가 더 좋을 때
                value[index] = _arrResult[i];
              }
            } else if (value[index] === "B") {
              if (_arrResult[i] === "S") {
                // 새로 추가되는 결과가 더 좋을 때
                value[index] = _arrResult[i];
              }
            }
          } else {
            // 중복 없음
            key.push(_arrWord[i]);
            value.push(_arrResult[i]);
          }
        }
        setKey([...key]);
        setValue([...value]);
      }
    }
  }, [props.word, props.result]);

  return (
    <div className="keyboard">
      <div className="key-row">
        <Tile
          result={
            key.findIndex((element) => element === "Q") !== -1
              ? value[key.findIndex((element) => element === "Q")]
              : ""
          }
          value={"Q"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "W") !== -1
              ? value[key.findIndex((element) => element === "W")]
              : ""
          }
          value={"W"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "E") !== -1
              ? value[key.findIndex((element) => element === "E")]
              : ""
          }
          value={"E"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "R") !== -1
              ? value[key.findIndex((element) => element === "R")]
              : ""
          }
          value={"R"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "T") !== -1
              ? value[key.findIndex((element) => element === "T")]
              : ""
          }
          value={"T"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "Y") !== -1
              ? value[key.findIndex((element) => element === "Y")]
              : ""
          }
          value={"Y"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "U") !== -1
              ? value[key.findIndex((element) => element === "U")]
              : ""
          }
          value={"U"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "I") !== -1
              ? value[key.findIndex((element) => element === "I")]
              : ""
          }
          value={"I"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "O") !== -1
              ? value[key.findIndex((element) => element === "O")]
              : ""
          }
          value={"O"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "P") !== -1
              ? value[key.findIndex((element) => element === "P")]
              : ""
          }
          value={"P"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
      </div>
      <div className="key-row">
        <Tile
          result={
            key.findIndex((element) => element === "A") !== -1
              ? value[key.findIndex((element) => element === "A")]
              : ""
          }
          value={"A"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "S") !== -1
              ? value[key.findIndex((element) => element === "S")]
              : ""
          }
          value={"S"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "D") !== -1
              ? value[key.findIndex((element) => element === "D")]
              : ""
          }
          value={"D"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "F") !== -1
              ? value[key.findIndex((element) => element === "F")]
              : ""
          }
          value={"F"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "G") !== -1
              ? value[key.findIndex((element) => element === "G")]
              : ""
          }
          value={"G"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "H") !== -1
              ? value[key.findIndex((element) => element === "H")]
              : ""
          }
          value={"H"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "J") !== -1
              ? value[key.findIndex((element) => element === "J")]
              : ""
          }
          value={"J"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "K") !== -1
              ? value[key.findIndex((element) => element === "K")]
              : ""
          }
          value={"K"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "L") !== -1
              ? value[key.findIndex((element) => element === "L")]
              : ""
          }
          value={"L"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
      </div>
      <div className="key-row">
        <Tile
          result={""}
          value={"ENTER"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "Z") !== -1
              ? value[key.findIndex((element) => element === "Z")]
              : ""
          }
          value={"Z"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "X") !== -1
              ? value[key.findIndex((element) => element === "X")]
              : ""
          }
          value={"X"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "C") !== -1
              ? value[key.findIndex((element) => element === "C")]
              : ""
          }
          value={"C"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "V") !== -1
              ? value[key.findIndex((element) => element === "V")]
              : ""
          }
          value={"V"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "B") !== -1
              ? value[key.findIndex((element) => element === "B")]
              : ""
          }
          value={"B"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "N") !== -1
              ? value[key.findIndex((element) => element === "N")]
              : ""
          }
          value={"N"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={
            key.findIndex((element) => element === "M") !== -1
              ? value[key.findIndex((element) => element === "M")]
              : ""
          }
          value={"M"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
        <Tile
          result={""}
          value={"BACK"}
          onClickKey={(key) => {
            props.onClickKey(key);
          }}
        ></Tile>
      </div>
    </div>
  );
}

export default KeyBoard;
