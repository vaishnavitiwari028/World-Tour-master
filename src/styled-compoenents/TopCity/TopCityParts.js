import styled from "styled-components";
import Wrapper from "../Wrapper";

export const TopCityContainer = styled(Wrapper)`
  margin: 5rem 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const TopCityTextContainer = styled.div`
  width: 40%;
  margin: 2rem auto;
  i {
    color: red;
    cursor: pointer;
    transition: 0.1s ease-in-out transform;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 800px) {
    width: 80%;
  }
`;
export const TopCityImgContainer = styled.div`
  margin-top: 20%;
  width: 50%;
  max-width: 600px;
  @media (max-width: 800px) {
    width: 80%;
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
