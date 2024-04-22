import Navi from "./Components/Navi";
import "../src/CSS/Main.css";
import Footer from "./Components/Footer";
import RouterPage from "./Components/RouterPage";
function App() {
  return (
    <div>
      <Navi />
      <RouterPage />
      <Footer />
    </div>
  );
}

export default App;
