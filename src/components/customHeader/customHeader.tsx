"use client";
import { HeaderButton } from "./headerButton/headerButton";
import style from "./customHeader.module.css";
import { LoginButton } from "./loginButton/loginButton";
import { FaHome, FaList } from "react-icons/fa";
import { Button, Form, Modal, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomModal } from "./customModal/customModal";
const CustomHeader = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handleRoute = (href: string) => {
    router.push(href);
  };
  return (
    <>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={style.drawer}>HomeLand</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button className={style.drawerItemButton}></Button>
        </Offcanvas.Body>
      </Offcanvas>
      <CustomModal show={showModal} onHide={() => setShowModal(false)}/>
      <header
        style={{
          width: "100%",
          height: "130px",
          display: "flex",
          padding: "0 2rem",
        }}
      >
        <div className={style.drawerButtonContainer}>
          <button className={style.drawerButton} onClick={() => setShow(true)}>
            <FaList size={23} />
          </button>
        </div>
        <div className={style.logoContainer}>
          <div className={style.brandLabel}>HomeLand</div>
        </div>
        <div className={style.menuContainer}>
          <HeaderButton
            title={"Home"}
            icon={<FaHome width={"100%"} />}
            hideIcon={true}
            onClick={() => handleRoute("/")}
          />
          <HeaderButton
            title={"Apartments"}
            onClick={() => handleRoute("apartments")}
          />
          <HeaderButton
            title={"Residents"}
            onClick={() => handleRoute("residents")}
          />
          <HeaderButton
            title={"Services"}
            onClick={() => handleRoute("services")}
          />
        </div>
        <div className={style.loginContainer}>
          <LoginButton onClick={() => setShowModal(true)}></LoginButton>
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
