/* eslint-disable max-lines */
import { styled } from 'styled-components';

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  @media (max-width: 768px) {
    max-width: 100vh;
  }
   @media (min-width: 769px) and (max-width: 1367px) {
    max-width: 205vh;
  }
  @media (min-width: 1440px) {
    max-width: 205vh;
  }
`;
export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 20px;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 20px;
  max-width: 90%;
  overflow: auto;
  border: 1px solid white;
`;
export const Select = styled.select`
  font-family: 'Inter', sans-serif;
  position: relative;
  padding: 8px;
  background-color: transparent;
  border-radius: 10px;
  border-bottom: 1px solid white;
  color: #FFF;
  font-family: Epilogue;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-right: -1.5rem;
  @media (max-width: 768px) {
  margin-right: -1.5rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: -1.5rem;
  }
  @media (min-width: 1440px) {
    left: -1.5rem;
  }
`;
export const SelectPor = styled.select`
  font-family: 'Inter', sans-serif;
  position: relative;
  padding: 8px;
  background-color: transparent;
  border-radius: 10px;
  border-bottom: 1px solid white;
  color: #FFF;
  font-family: Epilogue;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-right: -1.5rem;
  @media (max-width: 768px) {
    top: 5.2rem;
    left: -8.9rem;
    margin-bottom: 5rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 1.5rem;
  }
  @media (min-width: 1440px) {
    left: 1.5rem;
  }
`;
export const InputASC = styled.input`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (max-width: 768px) {
    top: 4.45rem;
    left: 5rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 1.5rem;
  }
  @media (min-width: 1440px) {
    left: 1.5rem;
  }
`;
export const InputDSC = styled.input`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (max-width: 768px) {
    top: 6.67rem;
    left: -0.2rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 1.5rem;
  }
  @media (min-width: 1440px) {
    left: 1.5rem;
  }
`;
export const InputValue = styled.input`
  position: relative;
  padding: 5px;
  color: #ccc;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 8vh;
  background: transparent;
  @media (max-width: 768px) {
    left: 4rem;
    width: 15vh;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 2.5rem;
  }
  @media (min-width: 1440px) {
    left: 2.5rem;
  }
`;
export const SearchInput = styled.input`
  position: relative;
  border-radius: 5px;
  border: 1px solid #FFF;
  width: 671px;
  height: 42px;
  flex-shrink: 0; 
  margin-bottom: 1rem;
  background-color: transparent;
  font-family: 'Epilogue-Regular', Helvetica;
  left: 20rem;
  @media (max-width: 768px) {
    max-width: 27rem;
    left: 2.8rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    left: 12.5rem;
  }
  @media (min-width: 1440px) {
    left: 13.5rem;
  }
`;
export const Label = styled.label`
  color: #aeaeae;
  font-family: 'Epilogue-Regular', Helvetica;
  font-size: 12px;
  position: relative;
  @media (max-width: 768px) {
    top: -2.2rem;
    left: 5.2rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    top: -2.2rem;
    left: 1.2rem;
  }
  @media (min-width: 1440px) {
    top: -2.2rem;
    left: 1.2rem;
  }
`;
export const Label2 = styled.label`
  color: #aeaeae;
  font-family: 'Epilogue-Regular', Helvetica;
  font-size: 12px;
  position: relative;
  @media (max-width: 768px) {
    top: -2.2rem;
    left: 5rem;
  }
  @media (min-width: 769px) and (max-width: 1439px) {
    top: -2.2rem;
    left: 1.2rem;
  }
  @media (min-width: 1440px) {
    top: -2.2rem;
    left: 2rem;
  }
`;
export const Label3 = styled.label`
  color: #aeaeae;
  font-family: 'Epilogue-Regular', Helvetica;
  font-size: 12px;
  position: relative;
  @media (max-width: 768px) {
    left: -3rem;
    top: 3rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    top: -2.2rem;
    left: 6rem;
  }
  @media (min-width: 1440px) {
    top: -2.2rem;
    left: 6rem;
  }
`;
