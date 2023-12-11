import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Nav from "./components/navigation/Nav";
import { Cart } from "./components/pages/Cart";
import { CartProvider } from "./providers/CartProvider";
import { ThemeProvider } from "./providers/themeProvider";
import { SignIn } from "./components/pages/SignIn";
import UserProfile from "./components/pages/UserProfile";
import { FilterProvider } from "./providers/FilterProvider";

export function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FilterProvider>
          <Router>
            <Nav />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="/sign-in" Component={SignIn} />
              <Route path="/user-profile" Component={UserProfile} />
              <Route path="/cart" Component={Cart} />
            </Routes>
          </Router>
        </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
