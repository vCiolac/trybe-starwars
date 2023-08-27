import styled from "styled-components";

export const ApplyButton = styled.button`
  font-family: 'Epilogue-Bold', Helvetica;
  position: relative;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #fae60a;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 98px;
  height: 85px;
  border: 0.5px #fae60a solid;
  background-color: transparent;
  margin-right: 1rem;
  @media (max-width: 768px) {
    top: 5rem;
    left: -14.4rem;
    margin-right: 0%
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 4.4rem;
  }
  @media (min-width: 1440px) {
    left: 4.3rem;
  }
`;
export const ClearButton = styled.button`
  font-family: 'Epilogue-Bold', Helvetica;
  position: relative;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #fae60a;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 98px;
  height: 85px;
  border: 0.5px #fae60a solid;
  background-color: transparent;
  margin-right: 1rem;
  left: 4.3rem;
  @media (max-width: 768px) {
    top: -0.3rem;
    left: 17rem;
  }
`;
