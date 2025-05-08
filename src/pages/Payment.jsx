import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PaymentTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 4rem 0;
`;

const PaymentFormWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PaymentFormSection = styled.div`
  flex: 3;
`;

const OrderSummarySection = styled.div`
  flex: 1;
  position: sticky;
  top: 2rem;
  align-self: flex-start;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  font-size: 1.4rem;
`;

const AddressInputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PostcodeInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--border-color);
  font-size: 1.4rem;
`;

const PostcodeButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const RequiredMark = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
`;

const CheckboxGroup = styled.div`
  margin: 1.5rem 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  margin-right: 0.8rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 3rem 0 1.5rem;
`;

const CouponGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CouponInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--border-color);
  font-size: 1.4rem;
`;

const CouponButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

const CouponButtonLight = styled.button`
  background-color: #f1f1f1;
  color: #000;
  padding: 0 1.5rem;
  border: 1px solid #ddd;
  cursor: pointer;
  font-size: 1.3rem;
`;

const PointsInfo = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PaymentMethodButton = styled.button`
  padding: 1rem;
  border: 1px solid var(--border-color);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 5.5rem;
`;

const PaymentMethodButtonWide = styled(PaymentMethodButton)`
  grid-column: span 2;
  font-size: 1.4rem;
`;

const PaymentMethodImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const AgreementSection = styled.div`
  margin: 3rem 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  margin-bottom: 3rem;
`;

const OrderItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 2rem;
`;

const ItemImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemBrand = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const ItemName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ItemColor = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const ItemSize = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const ItemQuantity = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const Payment = () => {
  const [usePoints, setUsePoints] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfo: false,
    refundPolicy: false,
  });

  // 주문 상품 데이터 (실제로는 API나 상태 관리를 통해 가져올 것입니다)
  const orderItems = [
    {
      id: 1,
      brand: "CONVERSE",
      name: "CONVERSE CHUCK 70 HI",
      color: "VERSAL POOL/EGRET/BLACK",
      size: "240",
      quantity: 1,
      price: 69000,
    },
    {
      id: 2,
      brand: "CONVERSE",
      name: "CONVERSE CHUCK 70 HI",
      color: "BLACK",
      size: "240",
      quantity: 1,
      price: 69000,
    },
    {
      id: 3,
      brand: "Treatment",
      name: "routine",
      size: "",
      quantity: 1,
      price: 65000,
    },
  ];

  const handleCheckboxChange = (name) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleUsePointsChange = () => {
    setUsePoints((prev) => !prev);
  };

  return (
    <Container>
      <PaymentTitle>Payment</PaymentTitle>
      <PaymentFormWrapper>
        <PaymentFormSection>
          {/* 배송 정보 입력 폼 */}
          <FormGroup>
            <InputLabel>신규 입력</InputLabel>
            <FormInput type="text" placeholder="신규 입력" />
          </FormGroup>
          <FormGroup>
            <InputLabel>이름</InputLabel>
            <FormInput type="text" placeholder="이름" />
          </FormGroup>
          <FormGroup>
            <InputLabel>주소</InputLabel>
            <AddressInputGroup>
              <PostcodeInput type="text" placeholder="우편번호" />
              <PostcodeButton>우편번호 검색</PostcodeButton>
            </AddressInputGroup>
            <FormInput type="text" placeholder="주소" />
            <FormInput type="text" placeholder="상세주소" />
          </FormGroup>
          <FormGroup>
            <InputLabel>휴대폰 번호</InputLabel>
            <FormInput type="text" placeholder="휴대폰 번호" />
          </FormGroup>
          <RequiredMark>하이픈(-) 빼고 입력</RequiredMark>
          <CheckboxGroup>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={usePoints}
                onChange={handleUsePointsChange}
              />
              기본 배송지로 저장
            </CheckboxLabel>
          </CheckboxGroup>
          {/* 쿠폰 & 마일리지 */}
          <SectionTitle>쿠폰 & 마일리지</SectionTitle>
          <CouponGroup>
            <CouponInput type="text" placeholder="쿠폰 할인" />
            <CouponButton>쿠폰 사용</CouponButton>
          </CouponGroup>
          <CouponGroup>
            <CouponInput type="text" placeholder="적립금 사용" />
            <CouponButtonLight>모두 사용</CouponButtonLight>
          </CouponGroup>
          <PointsInfo>보유 적립금: 0원</PointsInfo>
          <PointsInfo>사용가능한 적립금: 0원</PointsInfo>
          {/* 결제 방법 */}
          <SectionTitle>결제 방법</SectionTitle>
          <PaymentMethodsGrid>
            <PaymentMethodButton>
              <PaymentMethodImg
                src="/api/placeholder/170/50"
                alt="네이버페이"
              />
            </PaymentMethodButton>
            <PaymentMethodButton>
              <PaymentMethodImg
                src="/api/placeholder/170/50"
                alt="카카오페이"
              />
            </PaymentMethodButton>
            <PaymentMethodButton>
              <PaymentMethodImg src="/api/placeholder/170/50" alt="토스페이" />
            </PaymentMethodButton>
            <PaymentMethodButton>
              <PaymentMethodImg src="/api/placeholder/170/50" alt="페이코" />
            </PaymentMethodButton>
            <PaymentMethodButton>
              <PaymentMethodImg src="/api/placeholder/170/50" alt="삼성페이" />
            </PaymentMethodButton>
            <PaymentMethodButton>
              <PaymentMethodImg src="/api/placeholder/170/50" alt="애플페이" />
            </PaymentMethodButton>
            <PaymentMethodButtonWide>신용카드 결제</PaymentMethodButtonWide>
          </PaymentMethodsGrid>

          {/* 이용약관 동의 */}
          <AgreementSection>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={agreements.termsAgreed}
                onChange={() => handleCheckboxChange("termsAgreed")}
              />
              주문 내용을 확인했으며, 이용약관에 모두 동의합니다.
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={agreements.personalInfo}
                onChange={() => handleCheckboxChange("personalInfo")}
              />
              [필수] 개인정보 이용/수집 동의
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={agreements.refundPolicy}
                onChange={() => handleCheckboxChange("refundPolicy")}
              />
              [필수] 교환하실 상품의 경계상품으로 발송하셔오며, 구매단계에서
              동의 됩니다. 주문이 확정하여 상패고 보다 많은 수량의 동이를 경우
              결제가 취소 될 수 있습니다.
            </CheckboxLabel>
          </AgreementSection>

          <SubmitButton>주문하기</SubmitButton>
        </PaymentFormSection>

        {/* 주문 상품 요약 */}
        <OrderSummarySection>
          <SectionTitle>주문 상품</SectionTitle>

          <OrderItemList>
            {orderItems.map((item) => (
              <OrderItem key={item.id}>
                <ItemImageWrapper>
                  <ItemImage src="/api/placeholder/80/80" alt={item.name} />
                </ItemImageWrapper>
                <ItemDetails>
                  <ItemBrand>{item.brand}</ItemBrand>
                  <ItemName>{item.name}</ItemName>
                  <ItemColor>COLOR: {item.color}</ItemColor>
                  {item.size && <ItemSize>SIZE: {item.size}</ItemSize>}
                  <ItemQuantity>개수: {item.quantity}</ItemQuantity>
                  <ItemPrice>KRW {item.price.toLocaleString()}</ItemPrice>
                </ItemDetails>
              </OrderItem>
            ))}
          </OrderItemList>
        </OrderSummarySection>
      </PaymentFormWrapper>
    </Container>
  );
};

export default Payment;
