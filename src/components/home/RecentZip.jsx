import React from "react";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  background: var(--light);
  color: var(--dark);
  padding: 100px 3% 0px;
`;
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

const RecentZip = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Recent Zip</Title>
        {/* <Button>More Zip</Button> */}
      </MainTitle>
    </Container>
  );
};

export default RecentZip;
