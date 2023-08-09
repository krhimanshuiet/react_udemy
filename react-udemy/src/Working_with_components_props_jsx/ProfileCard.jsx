/* eslint-disable react/prop-types */
import "./ProfileCard.css";
import { skills } from "./profileData";
const ProfileCard = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img src="./pizzas/focaccia.jpg" alt="avatar" className="avatar" width="80" height="200" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Himanshu Kumar Singh</h1>
      <p>
        Full stack developer and teacher at udemy.when not coding or preparing a
        course, I Like to play board games , to cook and eat or just enjoy the
        Indian sun at the beach.
      </p>
    </div>
  );
};

// const emoji = {
//   advanced: "💪",
//   intermediate:"👍",
//   beginner:"😇",
// };

const emojiMap = new Map([
  ["advanced", "💪"],
  ["intermediate", "👍"],
  ["beginner", "😇"],
]);

// console.log(Object.fromEntries(emojiMap))

const Skill = ({ skill, level, color }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emojiMap.get(level)}</span>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} {...skill} />
      ))}
    </div>
  );
};

export default ProfileCard;
