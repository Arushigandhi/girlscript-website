import { useState } from 'react'
import Image from "next/image";
import styles from './styles/team.module.scss';
import { Card } from 'antd';
import profilePics from './assets/Avatar.png'
// not needed while replacing with original pics 
import profilePics2 from './assets/Avatar2.png'
import teamstyles from './styles/team.module.scss';
import { RiInstagramFill, RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';


export default function Team() {
  var data = [
    {
      id: 1,
      name: "Jyotsna Ashok",
      profile: 'import',
      about: "First member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 2,
      name: "Second name",
      profile: 'import',
      about: "second member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 3,
      name: "third name",
      profile: 'import',
      about: "third member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 4,
      name: "fourth name",
      profile: 'import',
      about: "fourth member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 5,
      name: "fifth name",
      profile: 'import',
      about: "fifth member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 6,
      name: "sixth message",
      profile: 'import',
      about: "sixth member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 7,
      name: "seventh name",
      profile: 'import',
      about: "seventh member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },
    {
      id: 8,
      name: "eigth name",
      profile: 'import',
      about: "eighth member about section",
      instagram: "hello",
      linkedin: "linkedin",
      github: "nice"

    },

  ]

  const [presentLink, setPresentLink] = useState(1);
  return (
    <div className={styles.teamContainer}>

      {/* Team heading  */}
      <div className={teamstyles.theTeam}>
        THE <span className={teamstyles.team}> &nbsp; TEAM</span>
      </div>
      {/* Team heading end */}


      {/* Team Content */}
      <div className={teamstyles.teamContent}>
        Meet the Board of 2021-2022 who revived Girlscript. We're Girlscript.
      </div>
      {/* Team Content ends  */}


      {/* Entire team cards  */}
      <div className={teamstyles.entireTeam} style={{ display: "flex", margin: '1rem', flexWrap: 'wrap' }}>
        <Card onClick={() => setPresentLink(1)} className={presentLink === 1 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(2)} className={presentLink === 2 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(3)} className={presentLink === 3 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(4)} className={presentLink === 4 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(5)} className={presentLink === 5 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(6)} className={presentLink === 6 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(7)} className={presentLink === 7 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
        <Card onClick={() => setPresentLink(8)} className={presentLink === 8 ? teamstyles.active : ""} style={{ width: 130, height: 150, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
          <Image src={profilePics} />
        </Card>
      </div>
      {/* Entire team cards ends  */}







      {/* Individual member details code starts  */}
      {data.filter(data => (data.id == presentLink)).map(details => (

        <div className={teamstyles.individualMember} >
          <div >
            <Card className={teamstyles.card} style={{ width: 230, height: 280, background: 'E1BB8C', border: '1rem solid white', borderRadius: '0.5rem', margin: '1rem' }}>
              <div className={teamstyles.individualPic}>
                <Image src={profilePics2} />
              </div>
            </Card>
          </div>

          <div className={teamstyles.individualContent}>
            <div className={teamstyles.name}>{details.name}</div>
            <div className={teamstyles.brief}>
              <p>{details.about}</p>
            </div>

            <div className={teamstyles.socialLinks}>
              <li><a href={details.instagram}> <RiInstagramFill /></a></li>
              <li>  <a href={details.linkedin}><IoLogoLinkedin /></a></li>
              <li> <a href={details.github}><RiGithubFill /></a></li>
            </div>
          </div>
        </div>
      ))}
      {/* individual member details code ends */}

    </div >
  )
}
