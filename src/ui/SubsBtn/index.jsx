import React from "react";

import styles from "./index.module.css";
import Button from "../../widgets/Button";

const SubsBtn = ({ name }) => {
  return <Button className={styles.btn}>{name}</Button>;
};

export default SubsBtn;
