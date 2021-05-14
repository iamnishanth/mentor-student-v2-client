import { useState, useEffect } from "react";
import { fetchAll, changeMentor } from "../utils/netwokHandler";

const Student = ({ match }) => {
  const [data, setData] = useState({
    mentors: [],
    students: [],
  });
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
  });
  const [toggle, setToggle] = useState(false);
  const [newMentor, setNewMentor] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAll();
      setData(res);
      selectStudent(res.students);
    };
    fetchData();
  }, []);

  const selectStudent = (students) => {
    let selectedStudent = students.find(
      (student) => student._id == match.params.id
    );
    setStudentData(selectedStudent);
  };

  const handleChangeMentor = async () => {
    if (newMentor === "") {
      alert("Select a mentor");
    } else {
      let res = await changeMentor({
        id: studentData._id,
        newMentor: newMentor,
      });
      setData(res);
      selectStudent(res.students);
    }
  };

  return (
    <div className="container">
      <div className="mentor-container">
        <div className="mentor-inner">
          <h1>{studentData.name}</h1>
          <p>{studentData.email}</p>
        </div>
      </div>
      <h4 className="mt-5">Assigned Mentor :</h4>
      <h3>
        {studentData.mentor === "" ? "No mentor assigned" : studentData.mentor}
      </h3>
      <button className="button button-sm" onClick={() => setToggle(!toggle)}>
        {studentData.mentor === "" ? "Assign Mentor" : "Change Mentor"}
      </button>
      {toggle && (
        <div className="d-flex mt-3">
          {data.mentors.map((mentor) => {
            if (mentor.name !== studentData.mentor) {
              return (
                <div
                  key={mentor._id}
                  className={
                    newMentor === mentor.name
                      ? "available-mentor add-bg-color"
                      : "available-mentor"
                  }
                  onClick={() => setNewMentor(mentor.name)}
                >
                  {mentor.name}
                </div>
              );
            }
          })}
          <button className="button button-sm" onClick={handleChangeMentor}>
            {studentData.mentor === "" ? "Assign" : "Change"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Student;
