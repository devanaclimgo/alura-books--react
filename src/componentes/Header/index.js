import Logo from '../../componentes/Logo/index.js'
import OpcoesHeader from '../../componentes/OpcoesHeader/index.js';
import IconesHeader from '../../componentes/IconesHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: space-evenly;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo></Logo>
      <OpcoesHeader></OpcoesHeader>
      <IconesHeader></IconesHeader>
    </HeaderContainer>
  );
}

export default Header