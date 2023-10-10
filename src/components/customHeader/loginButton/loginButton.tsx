import { Inter } from "next/font/google";
import style from "./loginButton.module.css";
const intel = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['vietnamese', 'latin']
})
export const LoginButton = ({onClick}:{onClick:Function}):JSX.Element => {
    return<button className={`${style.buttonContainer}`} onClick={() => onClick()}>
        Log in
    </button>
}