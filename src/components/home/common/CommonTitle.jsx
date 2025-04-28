import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

/*--- 스타일 ---*/
const Container = styled.div``;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--dark);
  font-size: 10rem;
  letter-spacing: -4px;
`;
const Button = styled.button`
  font-size: 2rem;
  padding: 22px 50px;
  color: var(--light);
  background: var(--dark);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CommonTitle = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Beauty Pick</Title>
        <Button>More Zip</Button>
      </MainTitle>
    </Container>
  );
};

export default CommonTitle;
