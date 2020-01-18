import styled from 'styled-components';
import Link from 'next/link';

const categories = ['home'];

const Navigation = () => {
  return (
    <NavWrapper>
      {categories.map((category, i) => (
        <Link key={i} href="/">
          <NavItem>{category}</NavItem>
        </Link>
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2.5%;
`;

const NavItem = styled.div`
  width: 15%;
  font-size: 1.1vw;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 1%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2.5%;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #bbb;
  }
`;

export default Navigation;
