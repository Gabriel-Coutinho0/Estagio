const Navbar = () => {
  const nav = [
    { titulo: "Cadastrar", link: "/" },
    { titulo: "Visualizar", link: "/visualizar" }];


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-50  w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/visualizar" className="flex items-center">
          <img
            src="https://cdn.bitrix24.com.br/b13772517/sender/be6/be612427cf98746b2aabd3989116d1a8/c73ac8c47757f6a2ac317088ba524040.png"
            className="h-8 mr-3"
            alt="Uc Technology Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div
          className="hidden w-full md:block md:w-auto md:relative"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-50 md:dark:bg-gray-50 dark:border-gray-700">
            {nav.map((itens) => (
              <li key={itens.titulo}>
                <a
                  href={itens.link}
                  className="block py-2 pl-3 pr-4 font-bold text-white bg-gray-50 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-gray-900 "
                  aria-current="page"
                >
                  {itens.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
