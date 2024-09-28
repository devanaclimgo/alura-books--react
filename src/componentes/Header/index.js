import './estilo.css';
import Logo from '../../componentes/Logo/index.js'
import OpcoesHeader from '../../componentes/OpcoesHeader/index.js';
import IconesHeader from '../../componentes/IconesHeader/index.js';

function Header() {
  return (
    <header className="App-header">
      <Logo></Logo>
      <OpcoesHeader></OpcoesHeader>
      <IconesHeader></IconesHeader>
    </header>
  );
}

export default Header