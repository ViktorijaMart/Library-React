import { React, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]); // creating cart object

  function addToCart(book) {
    setCart([
      ...cart,
      { ...book, quantity: 1 } /* to book object add a key with a value 1 */,
    ]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id)); //it basically goes through all the books in the cart and keeps only ones which doesn't match the id of a book function is passing (the one on which Remove button was pressed)
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route
          path="/books/:id"
          element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
