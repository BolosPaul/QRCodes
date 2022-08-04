import React from 'react'
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";
import Button from '@mui/material/Button'

const scan = () => {
    const [data, setData] = React.useState("No result");
    return (
      <div className={styles.container}>
      <div className={styles.container}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
            
          } 
        }
        constraints	={{ facingMode:  "environment"  }}
          style={{ width: "40%", height: "40%" }} className={styles.scanner}
        />
        <p>{data}</p>
        <a href={data} className={styles.gotolink}>GO TO LINK</a>
      </div>
    </div>
    );
}

export default scan;