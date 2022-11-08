import Spinner from "react-bootstrap/Spinner";
import './loader.scss'

function BasicExample() {
  return (
    <div className="spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default BasicExample;
