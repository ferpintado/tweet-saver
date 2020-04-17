import styled from 'styled-components';

const Header = styled.h1`
  color: ${(props) => (props.color ? props.color : '#000')};
  padding-bottom: 10px;
  border-bottom: 3px solid ${(props) => (props.color ? props.color : '#000')};
`;

export default Header;
