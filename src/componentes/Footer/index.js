import styled from "styled-components"

const FooterContainer = styled.div `
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const FooterTexto = styled.p `
  font-size: 18px;
  color: #000;
  font-weight: 300;

`

function Footer() {
  return (
    <FooterContainer>
      <FooterTexto>© Feito por Ana Gomes 2024</FooterTexto>
    </FooterContainer>
  )
}

export default Footer