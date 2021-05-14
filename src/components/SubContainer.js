import Card from "./Card";

const SubContainer = ({ title, classes, data }) => {
  return (
    <div className="sub-container col-12 col-md-6">
      <h2>{title}</h2>
      <div className={classes}>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SubContainer;
