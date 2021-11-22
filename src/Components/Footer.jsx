import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footerstyled>
      <p>&copy; 2021 Steven ~ Created using React</p>
      <p>
        <a href="#top" className="hover-animation">
          Go to top
        </a>
      </p>
    </Footerstyled>
  );
};

export default Footer;

const Footerstyled = styled.footer`
  display: flex;
  background: #1f1f1f;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  padding: 20px 100px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 420px) {
    font-size: 0.75rem;
  }
`;
