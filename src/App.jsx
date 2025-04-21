import { useState } from "react";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router";
import { BookingContext } from "./context/BookingContext.js";

function App() {
  const [booking, setBooking] = useState([]);

  return (
    <div>
      <BookingContext.Provider value={{ booking, setBooking }}>
        <RouterProvider router={router} />
      </BookingContext.Provider>
    </div>
  );
}

export default App;
