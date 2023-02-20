// 입력한 단어가 5자가 안될때
import { useEffect, useState } from "react";
import "../style/ne.css";

function NE(props) {
    useEffect(()=>{
        let timer = setTimeout(() => {
            props.onOutNE();
        }, 2000);

        return () => { clearTimeout(timer)}
    },[])
  return <div className='not-enough'>Not Enough!</div>;
}
export default NE;
