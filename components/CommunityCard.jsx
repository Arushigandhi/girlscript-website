import React from "react";
import styles from "./styles/community.module.scss"
export default function CommCard(props){
    return(
        <div className={styles.Card} style={props.style}>
        {/* <div className={styles.cardContent}> */}
        <div className={styles.cardFront}>
                {props.front}
          </div>
          <div className={styles.cardBack}>
               {props.back}
          </div>
        {/* </div> */}
          
   
      </div>
    )
   
}