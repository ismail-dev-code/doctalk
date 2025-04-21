import { useState } from "react";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router";
import { BookingContext } from "./context/BookingContext.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  const [booking, setBooking] = useState([]);

  return (
    <div>
      <BookingContext.Provider value={{ booking, setBooking }}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={3000} />
      </BookingContext.Provider>
    </div>
  );
}

export default App;
