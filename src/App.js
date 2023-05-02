import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>

  );
};

export default App;