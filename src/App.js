import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Cart } from "./components/pages/Cart";
import { CheckEmail } from "./components/pages/SignInAndSignOut/CheckEmail";
import Help from "./components/pages/Help";
import JoinUs from "./components/pages/JoinUs";
import FindStore from "./components/pages/FindStore";
import MinimalLayout from "./components/pages/Layouts/MinimalLayout";
import MainLayout from "./components/pages/Layouts/MainLayout";
import TwoWayAuthentication from "./components/pages/SignInAndSignOut/TwoWayAuthentication";

import Register from "./components/pages/SignInAndSignOut/Register";

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
            <Route path="authenticate" element={<TwoWayAuthentication />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route
            path="/api/credentials/check-email/authenticate"
            element={<MinimalLayout />}
          >
            <Route index element={<TwoWayAuthentication />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
