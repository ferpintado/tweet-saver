import styled from 'styled-components';

interface Props {
  color?: string;
  size?: number;
}

const Header = styled.h1`
  color: ${(props: Props) => (props.color ? props.color : '#000')};
  padding-bottom: 10px;
  font-size: ${(props) => (props.size ? `${props.size}px` : '40px')};
`;

export default Header;
