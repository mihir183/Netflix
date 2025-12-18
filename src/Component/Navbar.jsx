import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [curUser, setCurUser] = useState(null);

  async function login() {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      localStorage.removeItem("curUser");
      location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setCurUser(JSON.parse(localStorage.getItem("curUser")));
  }, []);
  return (
    <>
      <div className="w-full absolute z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-primary pt-3 px-2 gap-2 justify-start md:justify-between items-center w-full">
          <div>
            <img src="/assets/images/netflix.png" alt="" width={155} />
          </div>
          <div>
            <div className="flex justify-start md:justify-end gap-5">
              <select
                name=""
                id=""
                className="bg-transparent text-white w-auto md:w-50 border border-white py-2 px-2 rounded"
              >
                <option value="English" className="text-black hover:bg-primary">
                  English
                </option>
                <option value="Hindi" className="text-black hover:bg-primary">
                  Hindi
                </option>
              </select>
              {curUser == null ? (
                <button
                  className="px-5 py-1 rounded text-white font-medium bg-red-600 hover:cursor-pointer hover:bg-red-700 capitalize duration-300"
                  onClick={login}
                >
                  sign in
                </button>
              ) : (
                <>
                  <button
                    className="px-5 py-1 rounded text-white font-medium bg-red-600 hover:pointer hover:bg-red-700 capitalize duration-300 hover:cursor-pointer"
                    onClick={logout}
                  >
                    logout
                  </button>
                  <img
                    src={curUser.photo}
                    alt=""
                    width={40}
                    className="cursor-pointer border rounded-full"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
