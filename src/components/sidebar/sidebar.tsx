import { CSSProperties } from "react";
import styles from "./sidebar.module.css";
import { Offcanvas } from "react-bootstrap";
export const Sidebar = ({
  className,
  children,
  visibilityMode,
  show,
  onClose,
  header,
}: {
  className?: string;
  style?: CSSProperties;
  header?: JSX.Element[] | never[] | JSX.Element;
  children: JSX.Element[] | never[] | JSX.Element;
  visibilityMode?: string;
  show?: boolean;
  onClose?: Function;
}) => {
  if (visibilityMode == "hide" && show == undefined && onClose)
    throw SyntaxError(
      "When visibilyMode is set to hide, You has to define show and onClose parameter"
    );
  return visibilityMode == "hide" ? (
    <Offcanvas
      className={`${styles.sidebarContainer} ${className}`}
      show={show}
      onHide={() => onClose!()}
      placement="start"
    >
      <Offcanvas.Header closeButton>{header}</Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  ) : (
    <div
      className={`${styles.sidebarContainer} ${className}`}
      style={{
        visibility: visibilityMode == "hide" && !show ? "hidden" : "visible",
      }}
    >
      <div>{header}</div>
      {children}
    </div>
  );
};
