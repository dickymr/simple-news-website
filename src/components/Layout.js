import Navigation from './Navigation';
import styled from 'styled-components';

const Layout = props => {
  return (
    <LayoutContainer>
      <Navigation />
      {props.children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 2.5% 5%;
  padding-bottom: 10%;
  border: 1px solid #bbb;
  box-sizing: border-box;
  margin: 2.5% auto;

  * {
    box-sizing: border-box;
  }
`;

export default Layout;
