import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { id, category, img, description, title } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 border">
        <figure className="px-10 pt-10">
          <img src={img} alt={category} className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <div className="badge badge-outline px-4 py-3">{category}</div>
          <h2 className="card-title text-blue-400">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/services/${id}`}>
              <button className="btn btn-outline">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
