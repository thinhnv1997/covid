import { useHistory } from "react-router-dom";
import { Button, Col, Row } from "antd";
import image from "../../image/404.png";

function PageNotFound() {
  const history = useHistory();

  return (
    <Row>
      <Col xs={24} sm={12}>
        <div className="pageNotFound__img">
          <img src={image} alt="page not found"></img>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className="pageNotFound__info">
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
      </Col>
    </Row>
  );
}

export default PageNotFound;
