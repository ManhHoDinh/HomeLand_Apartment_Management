"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import "./globals.css";
import { useEffect, useState } from "react";
import { ringift } from "../../public/fonts/Ringift";
import { Sidebar } from "@/components/sidebar/sidebar";
import styles from "./layout.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { Images } from "../../public/images";
import { futuna } from "../../public/fonts/futura";
import { sidebarInfo } from "@/constraints/sidebarRoutes";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const ringgift_font = ringift;
  const pathName = usePathname();
  const router = useRouter();
  function handleRouting(route: string): void {
    router.push(route);
  }
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <html lang="en">
      <body className={ringgift_font.className}>
        <Button className={styles.drawerButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="black"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
            onClick={() => setShowDrawer(true)}
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </Button>
        <Sidebar
          className={styles.sidebar}
          visibilityMode="hide"
          show={showDrawer}
          onClose={() => setShowDrawer(false)}
          drawerClass={styles.drawer}
          header={
            <div
              className={styles.header}
            >
              <Image
                src={Images.Logo}
                alt="logo"
                width={50}
                height={50}
                style={{ marginRight: "0.5rem" }}
              />
              <p
                style={{
                  textAlign: "center",
                  margin: "auto 0",
                  fontSize: "1.7rem",
                  height: "fit-content",
                }}
              >
                {" "}
                HomeLand
              </p>
            </div>
          }
        >
          <div className={styles.sidebarBody}>
            {sidebarInfo.map((value, index) => (
              <Button
                key={index}
                className={`${
                  pathName == "/" + value.title.toLowerCase()
                    ? styles.current
                    : ""
                } ${styles.sidebarButton} `}
                onClick={() => handleRouting("/" + value.title.toLowerCase())}
                style={futuna.style}
              >
                {value.svg}
                <span style={{ margin: "auto 0" }}>{value.title}</span>
              </Button>
            ))}
          </div>
        </Sidebar>
        {children}
      </body>
    </html>
  );
}
