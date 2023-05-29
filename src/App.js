import './App.css';
import CadastroFuncionario from './pages/cadastroFuncionario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VisualizarFuncionario from './pages/visualizarFuncionario';
import Navbar from './components/navbar';
import AtualizarFuncionario from './pages/atualizarFuncionario';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<CadastroFuncionario />} />
            <Route path='/visualizar' element={<VisualizarFuncionario />} />
            <Route path='/atualizar/:id' element={<AtualizarFuncionario />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
