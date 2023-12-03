import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Store from "./components/pages/Store";
import Nav from "./components/navigation/Nav";
import { Cart } from "./components/pages/Cart";
import { CartProvider } from "./providers/CartProvider";
import { ThemeProvider } from "./providers/themeProvider";

const App = () => {
    return (
        <>
            <ThemeProvider>
                <CartProvider>
                    <Router>
                        <Nav />
                        <Routes>
                            <Route exact path="/" Component={Home} />
                            <Route path="/place-order" Component={Store} />
                            <Route path="/cart" Component={Cart} />
                        </Routes>
                    </Router>
                </CartProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
