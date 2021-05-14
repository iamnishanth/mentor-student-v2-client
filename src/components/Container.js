import SubContainer from "./SubContainer";

const Container = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <SubContainer title="Mentors" classes="row" data={data.mentors} />
        <SubContainer
          title="Students"
          classes="row student-row"
          data={data.students}
        />
      </div>
    </div>
  );
};

export default Container;
