import flag from "../Images/images.png";
import art from "../Images/images.png";
const Demo = () => {
  return (
    <>
      <div className="container main-header">

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 box1">
            <img src={flag} alt="flag" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 box2">
            <img src={art} alt="art" className="rounded" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
