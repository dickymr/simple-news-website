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
  margin: 2.5% 15%;
  padding: 2.5% 2%;
  border: 1px solid #ddd;
`;

export default Layout;
