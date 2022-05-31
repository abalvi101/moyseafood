import GlobalStyles from "./components/styled/GlobalStyles";
import StTable from "./components/styled/StTable";
import { Routes, Route, Link} from "react-router-dom";
import StUserProfile from "./views/styled/StUserProfile";

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  return (
    <div>
      <GlobalStyles />
    
      <Routes>
        <Route path="/" element={<StTable url={URL}/>} />
        <Route path="/user/:id" element={<StUserProfile url={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
