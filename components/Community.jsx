import React from 'react'
import styles from './styles/community.module.scss';
import 'antd/dist/antd.css';
import CommCard from './CommunityCard';
export default function Community() {
  return (
    <div className={styles.communityContainer}>
      <div className={styles.header}>
        <div className={styles.head1}>Community</div>
        <div className={styles.head2}>Events</div>
      </div>

      <div className={styles.subhead}>
        <p>Since our inception in October of 2021, we’ve had numerous big and small events with our community. Here is a quick highlight reel of the wonderful past 6 months!</p>
      </div>

      <div className={styles.timelineContainer}>
      <CommCard
            front="Membership Drive"
            back="Event desc."
      />
      <CommCard style={{backgroundColor: "#F9917B"}}
                front="Intro to Git & Github"
                back="Event desc."
      />
      <CommCard style={{width: "17rem"}}
                front="Regional Summit"
                back="Event desc."
      />
      <CommCard style={{backgroundColor: "#F9917B"}}
                front="Epiphany Ideathon"
                back="Event desc."
          />  
      <CommCard style={{width: "17rem"}}
                front="Winter Mentorship"
                back="Event desc."
      />

      </div>
    </div>
  )
}
