import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Route from "./routes";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Route />
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
    </Provider>
  );
}

export default App;
