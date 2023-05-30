import { useState, } from "react";
import Botao from "../components/botao";
import CampoCadastro from "../components/campoCadastro";
import SelectCargo from "../components/select";
import { validador } from "../utils/validador";
import { useNavigate, } from "react-router-dom";
const Swal = require('sweetalert2')


const CadastroFuncionario = () => {

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [data, setData] = useState("")
  const cargos = ["DESENVOLVEDOR", "ADMINISTRADOR"]
  const [cargo, setCargo] = useState("")

  let location = useNavigate();
  function comeback() {
    location('/visualizar');
  }

  function CadastrarFunc() {
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ nome: nome, sobrenome: sobrenome, cargo: cargo, dataInicio: data + "T03:00:00.000Z", ativo: true })
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: "Funcionário cadastrado com sucesso.",
        }).then((result) => result.isConfirmed ? comeback() : '')
      } else {
        Swal.fire({
          icon: 'error',
          title: "Erro ao cadastrar o funcionário.",
        })
      }
    })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <div className="w-full bg-white rounded-lg shadow dark:border max-w-md p-0 dark:bg-blue-50 dark:border-gray-900">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:gray-900">
              Cadastro de Funcionário
            </h1>
            <form className="space-y-4" action="#">
              <CampoCadastro
                titulo="Nome"
                type="text"
                id="nome"
                placeholder="Digite o nome"
                value={nome}
                setValue={setNome}
              />
              <CampoCadastro
                para="sobrenome"
                titulo="Sobrenome"
                type="text"
                name="sobrenome"
                id="sobrenome"
                placeholder="Digite o sobrenome"
                value={sobrenome}
                setValue={setSobrenome}
              />
              <CampoCadastro
                para="data"
                titulo="Data de início"
                type="date"
                name="data"
                id="data"
                value={data}
                setValue={setData}
              />
              <SelectCargo setCargo={setCargo} listaCargos={cargos} />
              <Botao titulo="Cadastrar" onclick={() => CadastrarFunc()} />
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default CadastroFuncionario;
