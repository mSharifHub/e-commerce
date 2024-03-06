import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Cart } from "./components/pages/Cart";
import { CheckEmail } from "./components/pages/SignInAndSignOut/CheckEmail";
import Help from "./components/pages/Help";
import JoinUs from "./components/pages/JoinUs";
import FindStore from "./components/pages/FindStore";
import MinimalLayout from "./components/pages/Layouts/MinimalLayout";
import MainLayout from "./components/pages/Layouts/MainLayout";
import Register from "./components/pages/SignInAndSignOut/Register";
import Authenticate from "./components/pages/SignInAndSignOut/Authenticate";

export function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          {/* Main layout routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="api/find-store" element={<FindStore />} />
            <Route path="api/help" element={<Help />} />
            <Route path="api/join-us" element={<JoinUs />} />
            <Route path="api/cart" element={<Cart />} />
          </Route>

          {/* Minimal layout route */}
          <Route
            path="/api/credentials/check-email"
            element={<MinimalLayout />}
          >
            <Route index element={<CheckEmail />} />
            <Route path="register" element={<Register />} />
            <Route path="authenticate" element={<Authenticate />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
