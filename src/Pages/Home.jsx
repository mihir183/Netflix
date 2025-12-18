import { useEffect } from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Cards from "../Component/Cards";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Footer from "../Component/Footer";

const Home = () => {
  let arr = [];
  async function getCurUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem(
          "curUser",
          JSON.stringify({
            uid: user.uid,
            photo: user.photoURL,
            email: user.email,
            name: user.displayName,
          })
        );
      }
    });
  }

  useEffect(() => {
    getCurUser();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
