import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 card-wrapper">
      <Link to={data.isMentor ? `/mentor/${data._id}` : `/student/${data._id}`}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
