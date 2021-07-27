import { useHistory } from "react-router-dom";
import { Button } from "antd";
import image from "../../image/404.png";

function PageNotFound() {
  const history = useHistory();

  return (
    <div className="pageNotFound row">
      <div className="pageNotFound__img col-sm-6">
        <img src={image} alt="page not found"></img>
      </div>
      <div className="pageNotFound__info col-sm-6">
        <h1>PAGE NOT FOUND</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => {
            history.push("/");
          }}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
