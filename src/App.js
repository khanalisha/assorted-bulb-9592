import logo from "./logo.svg";
import "./App.css";

import Routing from "./component/Routing";
import NavBBar from "./component/NavBBar";

function App() {
  return (
    <div className="App">
      <NavBBar />
    
      <Routing />
    </div>
  );
}

export default App;
