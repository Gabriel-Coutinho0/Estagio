const Navbar = () => {
  const nav = [
    { titulo: "Cadastrar", link: "/" },
    { titulo: "Visualizar", link: "/visualizar" }];


  return (
    // <nav className="bg-white border-gray-200 dark:bg-gray-50  w-full z-10">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="/visualizar" className="flex items-center">
    //       <img
    //         src="https://cdn.bitrix24.com.br/b13772517/sender/be6/be612427cf98746b2aabd3989116d1a8/c73ac8c47757f6a2ac317088ba524040.png"
    //         className="h-8 mr-3"
    //         alt="Uc Technology Logo"
    //       />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    //     </a>
    //     <div
    //       className="hidden w-full sm:flex sm:w-auto sm:relative md:flex md:w-auto md:relative"
    //       id="navbar-default"
    //     >
    //       <ul className="font-medium flex flex-col p-4 sm:p-0 md:p-0 mt-4 border rounded-lg bg-gray-50 sm:flex-row md:flex-row sm:space-x-8 md:space-x-8 sm:mt-0 md:mt-0 sm:border-0 md:border-0 sm:bg-white md:bg-white dark:bg-gray-50 sm:dark:bg-gray md:dark:bg-gray-50 border-gray-700">
    //         {nav.map((itens) => (
    //           <li key={itens.titulo}>
    //             <a
    //               href={itens.link}
    //               className="sm:flex md:flex py-2 pl-3 pr-4 font-bold text-white bg-gray-50 rounded bg-transparent sm:p-0 md:p-0 dark:text-gray-900 "
    //               aria-current="page"
    //             >
    //               {itens.titulo}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white border-gray-200 dark:bg-gray-50 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/visualizar" className="flex items-center">
          <img
            src="https://cdn.bitrix24.com.br/b13772517/sender/be6/be612427cf98746b2aabd3989116d1a8/c73ac8c47757f6a2ac317088ba524040.png"
            className="h-8 mr-3"
            alt="Uc Technology Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex items-center space-x-4 sm:hidden">
          <button
            type="button"
            className="text-gray-900 dark:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="flex space-x-8">
          {nav.map((item) => (
            <li key={item.titulo}>
              <a
                href={item.link}
                className="py-2 px-4 font-bold text-gray-900 dark:text-gray-900"
                aria-current="page"
              >
                {item.titulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
