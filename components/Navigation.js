import styled from 'styled-components';

const categories = [
  'home',
  'business',
  'health',
  'science',
  'sports',
  'technology'
];

const Navigation = () => {
  return (
    <NavWrapper>
      {categories.map((category, i) => (
        <NavItem key={i}>{category}</NavItem>
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div`
  width: 12.5%;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export default Navigation;
