import flag from "../Images/koli.png";
const Demo = () => {
  return (
    <>
      <div className="container main-header">

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 box1">
            <img src={flag} alt="flag" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 box2">
            <img src={flag} alt="art" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
