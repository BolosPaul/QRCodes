import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <div className={`${styles.main2} ${styles.flex}`}>
          <div className={styles.generatorTitle}>Generate QR</div>

      {qrCodeValue != "" && (
        <QRCode value={qrCodeValue} className={styles.qrcode} />
      )}
      <input
        className={styles.input}
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Generate;