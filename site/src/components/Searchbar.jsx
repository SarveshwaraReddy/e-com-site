import React, { useContext, useEffect , useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setsearch, showSearch, setshowSearch } =
    useContext(ShopContext);
  const [visible, setvisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") ) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b transition-all duration-600" style={{backgroundColor: '#F5F0E8', borderColor: '#E8DFD5'}} >
      <div className="inline-flex items-center justify-center border px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 transition-all duration-600" style={{borderColor: '#9C9B7A', backgroundColor: '#FDF9F3', color: '#45413E'}}>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          style={{color: '#45413E'}}
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setshowSearch(false)}
        className="inline w-3 cursor-pointer transition-all duration-600 hover:opacity-60"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default Searchbar;
