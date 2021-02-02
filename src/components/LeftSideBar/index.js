import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function LeftSideBar() {
  return (
    <div className={styles.sideBar}>
      <img
        src={useBaseUrl("img/avatar.jpeg")}
        className={styles.bioPhoto}
        alt="Muhriddin Ismoilov"
      ></img>

      <h3>Muhriddin Ismoilov</h3>
      <p>Machine Learning, Artificial Intelligence, Computer Science.</p>
      <a
        href="https://www.linkedin.com/in/muhriddin-ismoilov-uz/"
        className={styles.authorSocial}
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/IsmoilovMuhriddin"
        className={styles.authorSocial}
        target="_blank"
      >
        GitHub
      </a>
      <a
        href={`mailto:muhriddin.ismoilov.job`}
        className={styles.authorSocial}
        target="_blank"
      >
        E-Mail
      </a>
    </div>
  );
}

export default LeftSideBar;
