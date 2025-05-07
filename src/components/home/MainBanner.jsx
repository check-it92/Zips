import React from "react";
import styled from "styled-components";

//스타일
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* letter-spacing: -2px; */
`;
const Video = styled.div`
  width: 100%;
  height: 600px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  width: 100%;
  position: absolute;
  padding: 0 3%;
  span {
    font-size: 2.4rem;
    font-weight: bold;
  }
  p {
    letter-spacing: -4px;
    font-size: 8rem;
    font-weight: 200;
    line-height: 9rem;
    margin-top: 70px;
    b {
      font-weight: bold;
    }
  }
`;

//출력
const MainBanner = () => {
  return (
    <Container>
      <Title>
        <span>Today's Contents</span>
        <p>
          <b>서강준</b>의 가방 속 <br /> 리얼템을
          <b> ZIP.</b>
        </p>
      </Title>
      <Video>
        {/* <video
          src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4"
          muted
          autoPlay
          loop
        ></video> */}
        {/* <video src="https://youtu.be/QOZcIWeQYBc"></video> */}
        {/* <img src="/public/img/thumbnail.png" alt="" />   */}
      </Video>
    </Container>
  );
};

export default MainBanner;
