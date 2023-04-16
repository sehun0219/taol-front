import { Container, LogoImg, MenuWrap, LoginWrap, LoginText } from './styles';

const NavBar = () => {
  return (<Container>
    <LogoImg src="http://49.247.22.45/images/seekhan_logo_final.png" />
    <MenuWrap></MenuWrap>
    <LoginWrap>
      <LoginText>로그인</LoginText>
      <LoginText>회원가입</LoginText>
    </LoginWrap>
  </Container>);
};

export default NavBar;