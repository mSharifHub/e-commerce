import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Nav from "./components/navigation/Nav";
import { Cart } from "./components/pages/Cart";
import { SignIn } from "./components/pages/SignIn";
import Help from "./components/pages/Help";
import JoinUs from "./components/pages/JoinUs";
import FindStore from "./components/pages/FindStore";

export function App() {
  return (
    <Router>
      <div className="w-screen ">
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/api/find-store" Component={FindStore} />
        <Route path="/api/help" Component={Help} />
        <Route path="/api/join-us" Component={JoinUs} />
        <Route path="/api/sign-in" Component={SignIn} />
        <Route path="/api/cart" Component={Cart} />
      </Routes>
    </Router>
  );
}

export default App;
