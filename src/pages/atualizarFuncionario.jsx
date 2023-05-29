import { useEffect, useState } from "react";
import Ativo from "../components/ativo";
import Botao from "../components/botao";
import CampoCadastro from "../components/campoCadastro";
import SelectCargo from "../components/select";
import { validador } from "../utils/validador";
import { useNavigate, useParams } from "react-router-dom";
const Swal = require('sweetalert2')


const AtualizarFuncionario = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [data, setData] = useState("")
    const cargos = ["DESENVOLVEDOR", "ADMINISTRADOR"]
    const [cargo, setCargo] = useState("")
    const [ativo, setAtivo] = useState(false)
    const { id } = useParams();


    let location = useNavigate();
    function comeback() {
      location('/visualizar');
    }

    function AtualizarFuncionario() {
        console.log(data);
        if (validador.estaVazio(nome)) {
            Swal.fire({
                icon: 'error',
                title: "O nome não pode estar vazio.",
                text: "Por favor preencha o nome.",
            })
            return
        }
        if (validador.estaVazio(sobrenome)) {
            Swal.fire({
                icon: 'error',
                title: "O sobrenome não pode estar vazio.",
                text: "Por favor preencha o sobrenome.",
            })
            return
        }

        if (!data) {
            Swal.fire({
                icon: 'error',
                title: "A data não pode esta vazia.",
                text: "Por favor preencha a data;.",
            })
            return
        }
        if (validador.validarSelect(cargo)) {
            Swal.fire({
                icon: 'error',
                title: "Por favor selecione uma opção.",
            })
            return
        }

        fetch("http://187.60.56.72:3131/funcionario", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: id, nome: nome, sobrenome: sobrenome, cargo: cargo, dataInicio: data, ativo: ativo })
        }).then((response) => {
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: "Funcionário Atualizar com sucesso.",
                }).then((result) => result.isConfirmed ? comeback() : '')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Erro ao Atualizar o funcionário.",
                })
            }
        })
    }
    function getPorId(id) {
        if (id) {
            fetch("http://187.60.56.72:3131/funcionario/" + id, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then((resposta) => resposta.json())
                .then((data) => {
                    if (data != null) {
                        setNome(data.nome)
                        setSobrenome(data.sobrenome)
                        setCargo(data.cargo)
                        setData(data.dataInicio)
                        setAtivo(data.ativo)
                    }
                });
        }
    }
    useEffect(() => {
        getPorId(id);

    }, [])
    return (
        <>
            <section className="bg-gray-50  dark:bg-blue-300">
                <div className="flex flex-col z-0 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-50 dark:border-gray-900">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:gray-900">
                                Cadastro de Funcionário
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <CampoCadastro titulo="Nome" type="text" id="nome" placeholder="Digite o nome" value={nome} setValue={setNome} />
                                <CampoCadastro para="sobrenome" titulo="Sobrenome" type="text" name="sobrenome" id="sobrenome" placeholder="Digite o sobrenome" value={sobrenome} setValue={setSobrenome} />
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <CampoCadastro para="data" titulo="Data de inicio" type="date" name="data" id="data" value={data} setValue={setData} />
                                    <SelectCargo cargo={cargo} setCargo={setCargo} listaCargos={cargos} />
                                </div>
                                <div className="md:flex md:space-x-6">
                                    <Ativo ativo={ativo} setAtivo={setAtivo} />
                                </div>
                                <Botao titulo="Salvar" onclick={() => AtualizarFuncionario()} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AtualizarFuncionario;
