import React from "react";

function NavBar() {
  return (
    <div className=' fixed top-0 inset-0 w-screen h-[10rem] bg-transparent z-40'>
      <div className="relative flex justify-between items-center h-full mx-2 px-12">
        <div className=" w-32 text-center">
          <h2 className='text-[2em]'>Test</h2>
        </div>
        <div className="flex justify-between items-center w-[28rem] mr-12 nav__text">
          <a href="">Profile</a>
          <a href="">Educational</a>
          <a href="">Skills</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
