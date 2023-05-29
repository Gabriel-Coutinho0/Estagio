import { useEffect, useState } from "react"
const Swal = require('sweetalert2')


const VisualizarFuncionario = () => {
    const header = ["Nome", "Sobrenome", "Cargo", "Data de inicio", "Ativo", "Atualizar", "Deletar"]
    const [data, setData] = useState([])


    function getData() {
        fetch("http://187.60.56.72:3131/funcionario", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then((resposta) => resposta.json()).then((data) => {
            var users = []
            data.forEach(element => {
                users.push({
                    id: element.id,
                    nome: element.nome,
                    sobrenome: element.sobrenome,
                    cargo: element.cargo,
                    dataInicio: element.dataInicio,
                    ativo: element.ativo
                })
            });

            setData(users)
        })



    }

    function deletarFunc(id) {
        Swal.fire({
          title: 'Você tem certeza?',
          text: "Essa ação não pode ser revertida!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Deletar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch("http://187.60.56.72:3131/funcionario/" + id, {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({ id: id })
            }).then((response) => {
              if (response.status === 200) {
                Swal.fire({
                  icon: 'success',
                  title: "Funcionário deletado com sucesso!",
                }).then(() => {
                  window.location.reload(); 
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: "Erro ao deletar o funcionário.",
                });
              }
            });
          }
        });
      }
      

    function verificarAtivo() {

        if (data.ativo === false) {
            return "Inativo"
        } else {
            return "Ativo"
        }
    }

    useEffect(() => {
        getData();

    }, [])
    return (

        <>
            <section className="bg-gray-50  dark:bg-blue-300">
                <div className="flex flex-col w-auto z-0 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-auto xl:p-0 dark:bg-blue-50 dark:border-gray-900">
                        <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:gray-900">
                                Visualizar funcionário
                            </h1>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  shadow dark:border">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 content-center ">
                                    <tr>
                                        {header.map((header) =>
                                            <th scope="col" className="px-6 py-3 " key={header}>
                                                {header}
                                            </th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(dat => {
                                        return (
                                            <tr key={dat.id} className="bg-white hover:bg-gray-50 dark:hover:bg-gray-300 content-center">
                                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    {dat.nome}
                                                </td>
                                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    {dat.sobrenome}
                                                </td>
                                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    {dat.cargo}
                                                </td>
                                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    {dat.dataInicio}
                                                </td>
                                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    {verificarAtivo(dat.ativo)}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    <button onClick={() => { window.location.href = "/atualizar/" + dat.id }} className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center right-20">Atualizar</button>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                    <button
                                                        onClick={() => deletarFunc(dat.id)} className="bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center right-20"
                                                    >Deletar
                                                    </button>
                                                </td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VisualizarFuncionario;