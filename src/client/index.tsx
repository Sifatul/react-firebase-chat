import React,{useState} from 'react';
import Styles from './client.style.module.css';
import {FiMessageSquare,FiMinus} from "react-icons/fi";
import InputPopUp from '../Common/InputPopUP';

export default function Index(props:any) {
    const [isShowPopUP,setIsShowPopUp] = useState(false);
    return (
        <>
            <div className={Styles.clientPopUPWrapper} onClick={e => setIsShowPopUp(!isShowPopUP)}>
                {isShowPopUP && <FiMinus/>}
                {!isShowPopUP && <FiMessageSquare/>}
            </div>
            {isShowPopUP && <InputPopUp {...props}/>}
        </>
    )
}
