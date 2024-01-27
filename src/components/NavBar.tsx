function NavBar() {
  return (
    <div className='fixed left-0 w-[20rem] h-screen bg-transparent z-20'>
      <div className="relative flex flex-col h-full mx-8 my-4">
        <div className="text-start">
          <h2>zombox.io</h2>
        </div>
        <div className="flex flex-col justify-between items-start nav__text mt-56">
          <a href="">Home</a>
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
