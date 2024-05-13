import flag from "../Images/american-flag-chinese-flag-circuit-board-as-technology-background-1-1024x683.jpg";
import art from "../Images/11168982161662873167.jpg";
const Demo = () => {
  return (
    <>
      <div className="container main-header">

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 box1">
            <img src={flag} alt="flag" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 box2">
            <img src={art} alt="art" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
