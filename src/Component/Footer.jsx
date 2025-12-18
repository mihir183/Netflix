const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto pt-3 pb-10 bg-transparent px-2">
          <p className="text-gray-400 text-[18px]">Questions? Call <span className="underline hover:cursor-pointer">000-800-919-1743</span></p>

          <div className="grid grid-cols-1 md:grid-cols-4 mt-5 mb-4 gap-5">
            <ul className="text-gray-400 underline leading-[2] capitalize">
              <li className="hover:cursor-pointer">FAQ</li>
              <li className="hover:cursor-pointer">investor relation</li>
              <li className="hover:cursor-pointer">privacy</li>
              <li className="hover:cursor-pointer">speed test</li>
            </ul>
            <ul className="text-gray-400 underline leading-[2] capitalize">
              <li className="hover:cursor-pointer">help center</li>
              <li className="hover:cursor-pointer">jobs</li>
              <li className="hover:cursor-pointer">cookie preference</li>
              <li className="hover:cursor-pointer">legal notices</li>
            </ul>
            <ul className="text-gray-400 underline leading-[2] capitalize">
              <li className="hover:cursor-pointer">account</li>
              <li className="hover:cursor-pointer">way to watch</li>
              <li className="hover:cursor-pointer">corporation information</li>
              <li className="hover:cursor-pointer">only on netflix</li>
            </ul>
            <ul className="text-gray-400 underline leading-[2] capitalize">
              <li className="hover:cursor-pointer">media center</li>
              <li className="hover:cursor-pointer">terms of use</li>
              <li className="hover:cursor-pointer">contact us</li>
            </ul>
          </div>

          <select className="text-gray-400 border border-gray-500 py-2 ps-1 px-4 rounded-sm">
            <option>Englis</option>
            <option>Hindi</option>
          </select>

          <span className="text-gray-400 block mt-5 capitalize">
            netflix india
          </span>

          <span className="text-gray-400 block mt-5 capitalize">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-600 underline hover:cursor-pointer">Learn more.</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
