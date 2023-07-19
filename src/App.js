import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
