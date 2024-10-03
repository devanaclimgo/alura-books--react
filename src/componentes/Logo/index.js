import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  gap: 10px;
`

const LogoImage = styled.img`
  margin-right: 0;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo"/>
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  );
}

export default Logo