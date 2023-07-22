import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-[7.5rem] py-2 fixed w-full mb-10 border">
      <div className="text-4xl">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="flex justify-between items-center w-[15rem]">
        <div className="hover:border-b-2 border-b-black">
          <NavLink to="/all-books">All Books</NavLink>
        </div>
        <div className="hover:border-b-2 border-b-black">
          <NavLink to="/sign-in">Sign In</NavLink>
        </div>
        <div className="hover:border-b-2 border-b-black">
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
