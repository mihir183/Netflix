import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./Layout";
import { ToastContainer,Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {Routing.map((ele) => (
            <Route path={ele.path} element={<ele.element />} />
          ))}
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default App;
