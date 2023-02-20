import { useEffect, useState } from 'react';

function Tile(props) {
  const [style, setStyle] = useState({backgroundColor:'white'});
  useEffect(()=>{
    if(props.result === 'S'){
      setStyle({backgroundColor:'green'});
    } else if(props.result === 'B'){
      setStyle({backgroundColor:'yellow'});
    } else if(props.result === 'O'){
      setStyle({backgroundColor:'gray'});
    }
  }, [props.result])
  return (
    <button
      style={style}
      className={
        props.value === "ENTER" || props.value === "BACK"
          ? "key-tile key-etc"
          : "key-tile"
      }
      onClick={() => {
        props.onClickKey(props.value);
      }}
    >
      {props.value === "BACK" ? "<-" : props.value}
    </button>
  );
}

export default Tile;
