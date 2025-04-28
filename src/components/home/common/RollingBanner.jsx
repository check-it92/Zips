import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  /* margin: 60px 0; */
  width: 100%;
  height: 80px;
  background: var(--dark);
  color: var(--light);
`;
const LogoWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BrandLogo = styled.li`
  width: 80px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const RollingBanner = () => {
  return (
    <Container>
      <LogoWrapper>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
      </LogoWrapper>
    </Container>
  );
};

export default RollingBanner;
