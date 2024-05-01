import styled from "styled-components";
import LinkedCard from "../LinkedCard";

const RegionWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RegionCard = styled(LinkedCard)`
  color: var(--clr-secondary);
  font-size: 2.8rem;
  text-decoration: none;
  background-color: white;
  padding: 0.3em;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  text-align: center;
  box-shadow: 5px 5px 10px grey;
  display: block;
  transition: 0.5s ease transform;
  width: 160px;
  margin: 5px 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
`;
export { RegionCard, RegionWrapper };
