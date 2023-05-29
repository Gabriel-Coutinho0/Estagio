const Botao = ({titulo,onclick}) => {
    return (
    <button onClick={onclick} type="button" className="w-full text-gray-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{titulo}</button>
    );
}

export default Botao;