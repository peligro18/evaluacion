import 'bootstrap/dist/css/bootstrap.min.css';


const Body = ({  title, subtitle, imageUrl }) => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="col-md-6">
          <img src={imageUrl} className="img-fluid" alt="Devices" />
        </div>
      </div>
    </div>
  );
};

export default Body;