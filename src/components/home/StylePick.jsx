import React from "react";
import styled from "styled-components";
// import CommonTitle from "./common/CommonTitle";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
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
const CardSlide = styled.div`
  width: 100%;
`;
const CardList = styled.ul`
  display: flex;
  width: 100%;
`;
const CardItem = styled.li`
  width: 400px;
  height: 500px;
  background: var(--border);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const CardItemInfo = styled.div`
  position: absolute;
  width: inherit;
  padding: 40px;
  border: 1px solid #00f;
  border: 1px solid #00f;
  span {
    font-size: 2.2rem;
  }
  p {
    max-width: 300px;
    font-size: 3.6rem;
    font-weight: bold;
    margin: 14px 0 30px;
  }
  button {
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    background: var(--dark);
    color: var(--light);
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
const CardImg = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;

  border: 1px solid #f00;
  img {
    /* width: 100%; */
    /* height: 100px; */
    object-fit: cover;
  }
`;

const StylePick = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Style Pick</Title>
        <Button>More Zip</Button>
      </MainTitle>
      <CardSlide>
        <CardList>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명 상품명 상품명</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </CardList>
      </CardSlide>
    </Container>
  );
};

export default StylePick;
