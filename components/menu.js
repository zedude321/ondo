import React from "react";

function Menu() {
  return (
    <div>
      <svg className="dark:flex hidden" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
        <path fill="white" d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
      </svg>
      <svg className="dark:hidden flex" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
        <path fill="black" d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
      </svg>
    </div>
  );
}

export default Menu;
