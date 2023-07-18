import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
