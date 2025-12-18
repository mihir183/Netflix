import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../feature/movie-reducer";

const Hero = () => {
  const [curUser, setCurUser] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function add(data) {
    const newData = { userId: curUser, ...data };
    dispatch(addMovie(newData))
    .then((res)=>{
      Swal.fire("Movie Added Successfully....!")
    })
    reset()
  }

  useEffect(() => {
    setCurUser(localStorage.getItem("curUser"));
  });

  return (
    <>
      <div className="relative bg-[url('assets/images/back.png')] h-screen bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col text-white items-center justify-center p-5 md:w-[700px] mx-auto text-center">
          <p className="inline font-bold text-[25px] md:text-[60px] md:leading-20 w-auto">
            Unlimited movies, shows, and more
          </p>
          <p className="font-medium text-[20px] md:my-4">
            Starts at ₹149. Cancel at any time.
          </p>
          {curUser == null ? (
            <>
              <div className="mt-3 md:mt-2 md:flex gap-3 w-full justify-center">
                <input
                  type="text"
                  className="w-75 p-3 border border-white text-gray-100 rounded bg-transparent"
                  placeholder="Email address"
                  readOnly
                />
                <button
                  className="capitalize bg-red-600 hover:bg-red-700 px-4 md:px-10 py-4 rounded font-bold duration-300 w-auto my-2 md:my-0"
                  onClick={() => {
                    toast("Login Required...!");
                  }}
                >
                  get started
                </button>
              </div>
            </>
          ) : (
            <form action="" onSubmit={handleSubmit(add)}>
              <div className="mt-2 md:flex gap-3 w-full justify-center">
                <input
                  type="url"
                  {...register("url")}
                  className="w-75 p-3 border border-white text-gray-100 rounded bg-transparent placeholder:capitalize"
                  placeholder="movie URL"
                />
                <button className="capitalize bg-red-600 hover:bg-red-700 px-10 py-4 rounded font-bold duration-300">
                  add movie
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
