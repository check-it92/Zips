import React from "react";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  background: var(--light);
  color: var(--dark);
  padding: 100px 0% 0px;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Img = styled.div`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  height: 900px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  border: 1px solid var(--border);
`;
const MainTitle = styled.div`
  display: flex;
  padding: 60px;
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
const CategoryItem = styled.ul`
  li {
    font-size: 5rem;
    /* text-transform: uppercase; */
    padding: 50px 60px;
    border-top: 1px solid var(--border);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background: var(--dark);
      color: var(--light);
    }
  }
`;

/*--- 출력 ---*/
const Category = () => {
  return (
    <Container>
      <Img>
        <img src="/src/imgs/home/category.png" alt="" />
      </Img>
      <Info>
        <MainTitle>
          <Title>Category</Title>
        </MainTitle>
        <CategoryItem>
          <li>Style</li>
          <li>Beauty</li>
          <li>Star</li>
          <li>Tattoo Zip</li>
        </CategoryItem>
      </Info>
    </Container>
  );
};

export default Category;
