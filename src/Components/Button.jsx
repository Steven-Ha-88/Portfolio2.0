import styled from "styled-components";

const Button = styled.a`
  padding: 5px 15px;
  font-size: 1rem;
  background: ${(props) => props.bg};
  border: ${(props) => props.borderColor} solid 3px;
  color: ${(props) => props.textColor};
  box-shadow: 2px 2px 0 0 ${(props) => props.shadowColor};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.22s ease-in-out;

  :hover {
    box-shadow: 5px 5px 0 0 ${(props) => props.shadowColor};
  }

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export default Button;
