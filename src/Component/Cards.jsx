import { useEffect, useState } from "react";
import { Sample } from "./Sample";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, editMovie, showMovie } from "../feature/movie-reducer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";


const Cards = () => {
  const [curUser, setCurUser] = useState(null);
  const [selectMovie, setSelectMovie] = useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const { moviesData } = useSelector((state) => state.movies);
  let movies = [...moviesData];

  function getMovies() {
    dispatch(showMovie());
  }

  function updateMovie(data) {
    dispatch(editMovie({ id: selectMovie.id, data }))
      .then(() => {
        setSelectMovie(null);
        toast("Movie Update SuccessFully....!")
      })
      .catch(() => {
        Swal.fire("Update failes");
      });
  }

  function delMovie(id){
    dispatch(deleteMovie(id))
    .then(()=>{
      toast("Movie Deleted Successfully...!")
      setSelectMovie(null)
    })
  }

  useEffect(() => {
    const user = localStorage.getItem("curUser");
    if (user) {
      setCurUser(user);
      getMovies();
    }
  }, []);

  return (
    <>
      <div className="bg-black text-white w-full h-full py-4 px-2 md:px-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white font-bold capitalize text-[30px]">
            trending now
          </h2>

          <div className="max-w-7xl max-auto px-6 md:px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
            {curUser == null
              ? Sample.map((ele, index) => (
                  <div
                    className="relative bg-black h-[350px] md:h-[350px] hover:scale-105 duration-300"
                    key={index}
                  >
                    <img
                      src={ele}
                      alt=""
                      className="w-full h-full object-cover object-center rounded-xl opacity-80 hover:opacity-100"
                    />
                    <h2
                      className="absolute start-2 bottom-0 font-extrabold text-[80px] z-30 text-white"
                      style={{ WebkitTextStroke: "3px black" }}
                    >
                      {index + 1}
                    </h2>
                  </div>
                ))
              : movies.reverse().map((ele, index) => (
                  <div
                    className="relative bg-black h-[350px] hover:scale-105 duration-300"
                    key={index}
                  >
                    <img
                      src={ele.url}
                      alt=""
                      className="w-full h-full object-cover object-center rounded-xl opacity-80 hover:opacity-100"
                      command="show-modal"
                      commandfor="dialog"
                      onClick={() => {
                        setSelectMovie(ele);
                      }}
                    />
                    <h2
                      className="absolute bottom-0 font-extrabold text-[80px] z-30 text-white"
                      style={{ WebkitTextStroke: "3px black" }}
                    >
                      {index + 1}
                    </h2>
                  </div>
                ))}
          </div>
        </div>

        <div className="text-center my-5">
          <button className="px-5 py-3 bg-red-600 hover:bg-red-700 mx-auto rounded-3xl capitalize font-medium">
            add movie
          </button>
        </div>
      </div>

      {selectMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-800 rounded-lg p-6 w-[400px]">
            <div className="flex justify-between">
              <h2 className="text-white text-xl font-bold mb-3 capitalize">
                update movie
              </h2>
              <MdDelete className="text-red-600 text-[30px]" onClick={()=>{delMovie(selectMovie.id)}} />
            </div>

            <form onSubmit={handleSubmit(updateMovie)}>
              <img
                src={selectMovie.url}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <input
                type="url"
                defaultValue={selectMovie.url}
                {...register("url")}
                className="w-full bg-white p-2 rounded select-all mb-2"
              />
              <input
                type="hidden"
                {...register("userId")}
                value={selectMovie.userId}
              />
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 bg-gray-600 rounded"
                  onClick={() => setSelectMovie(null)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded capitalize text-white"
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
