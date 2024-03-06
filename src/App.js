import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

import { Cart } from "./components/pages/Cart";
import { SignIn } from "./components/pages/SignInAndSignOut/SignIn";
import Help from "./components/pages/Help";
import JoinUs from "./components/pages/JoinUs";
import FindStore from "./components/pages/FindStore";
import MinimalLayout from "./components/pages/Layouts/MinimalLayout";
import MainLayout from "./components/pages/Layouts/MainLayout";

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
          <Route path="/api/sign-in" element={<MinimalLayout />}>
            <Route index element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
