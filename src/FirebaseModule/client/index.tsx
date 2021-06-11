import {useState} from 'react';
// import Styles from './client.style.module.css';
import {FiMessageSquare,FiMinus} from "react-icons/fi";
import InputPopUp from '../Common/InputPopUP';
const Styles:{
    clientPopUPWrapper: React.CSSProperties,
    clientPopUPWrappersvg: React.CSSProperties,
} = {
    clientPopUPWrapper:{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        padding: "10px",
        zIndex: 2147483644,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-background)",
        borderRadius: "50%",
        cursor: "pointer"
    },
    clientPopUPWrappersvg:{
        width: "40px",
        height: "40px",
        color: "var(--color-font)"
    }
}
export default function Index(props:any) {
    const [isShowPopUP,setIsShowPopUp] = useState(false);
    return (
        <>
            <div style={Styles.clientPopUPWrapper} onClick={() => setIsShowPopUp(!isShowPopUP)}>
                {isShowPopUP && <FiMinus/>}
                {!isShowPopUP && <FiMessageSquare/>}
            </div>
            {isShowPopUP && <InputPopUp {...props}/>}
        </>
    )
}
