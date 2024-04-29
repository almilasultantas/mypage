import "../src/CSS/Main.css";
import RouterPage from "./Components/RouterPage";
import { Row, Col } from "reactstrap";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div>
      <Row>
        <Col md="3" sm="12">
          <SideBar />
        </Col>
        <Col md="9" sm="12">
          <RouterPage />
        </Col>
      </Row>

    </div>
  );
}

export default App;
