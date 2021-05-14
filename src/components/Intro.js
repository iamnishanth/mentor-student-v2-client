import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro-section">
      <h1>Mentor & Student with MongoDB</h1>
      <div>
        <Link to="/add-mentor">
          <button className="button">Add Mentor</button>
        </Link>
        <Link to="/add-student">
          <button className="button">Add Student</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
