import { Inter } from "next/font/google";
import style from "./headerButton.module.css";
import Image from "next/image";
import { NextRouter } from "next/router";
const intel = Inter({
  weight: "700",
  style: "normal",
  subsets: ["vietnamese", "latin"],
});
export const HeaderButton = ({
  title,
  icon,
  onClick,
  hideIcon,
}: {
  title: string;
  icon?: JSX.Element;
  onClick?: Function;
  hideIcon?: boolean | true;
}): JSX.Element => {
  return (
    <div
      className={`${
        !hideIcon ? style.buttonContainer : style.hideIconButtonContainer
      }`}
    >
      {!hideIcon ? <div>{icon ? icon : <></>}</div> : <></>}
      <button className={`${style.headerButton}`} onClick={() => onClick != undefined? onClick(): {}}>{title}</button>
    </div>
  );
};
