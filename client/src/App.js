import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList";
import { DefaultTemplate } from "./templates/DefaultTemplate";
import { AppContext } from "./utils/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <DefaultTemplate>
          <RoutesList />
        </DefaultTemplate>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
