import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
  background: var(--light-color);
  height: 1000px;
  padding: 100px 3% 0 3%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const FilterTitle = styled.h3`
  font-size: 3.6rem;
  font-family: "EHNormalTrial";
`;
const Filter = styled.ul`
  display: flex;
  gap: 16px;
`;
const FilterCategory = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  return (
    <Container>
      <FilterTitle>{categoryName}</FilterTitle>
      <Filter>
        <li>ALL</li>
        <li>SKINCARE</li>
        <li>MAKEUP</li>
        <li></li>
        <li></li>
      </Filter>
    </Container>
  );
};

export default FilterCategory;
