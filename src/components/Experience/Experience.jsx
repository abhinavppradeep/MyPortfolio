import React from "react";
import styles from "./Experience.module.css";

// Import skills images
import flutterImage from "../../../asset/skills/flutter.png";
import pytorchImage from "../../../asset/skills/pytorch.png";
import reactImage from "../../../asset/skills/react.png";
import nodeImage from "../../../asset/skills/node.png";
import mysqllImage from "../../../asset/skills/mysql.png";
import mongodbImage from "../../../asset/skills/mongodb.png";
import ltspiceImage from "../../../asset/skills/ltspice.png";

// Import history images
import googleImage from "../../../asset/history/google.png";
import isroImage from "../../../asset/history/microsoft.png";
import aiclubImage from "../../../asset/history/aiclub.png";

// Import data
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Map skills and history images
const skillImages = {
  flutter: flutterImage,
  pytorch: pytorchImage,
  react: reactImage,
  node: nodeImage,
  ltspice: ltspiceImage,
  mongodb: mongodbImage,
  mysql: mysqllImage,
};

const historyImages = {
  google: googleImage,
  isro: isroImage,
  aiclub: aiclubImage,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History Section */}
        <div className={styles.history}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.historyItem}>
              <img
                src={historyImages[historyItem.imageSrc]}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
