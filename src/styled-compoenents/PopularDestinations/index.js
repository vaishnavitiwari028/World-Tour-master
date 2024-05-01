import React from "react";
import styled from "styled-components";
import { Header, PlaceCard, PlaceCardWrapper } from "../../styled-compoenents";
const PopularDestinationsData = [
  {
    title: "FRANCE",
    to: "region/France",
    src:
      "https://images.unsplash.com/photo-1542654071-7ded22488685?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "INDIA",
    to: "region/India",
    src:
      "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=720&w=960",
  },
  {
    title: "UNITED STATES OF AMERICA",
    to: "region/United_States_of_America",
    src:
      "https://cdn.pixabay.com/photo/2013/10/29/08/34/queen-of-liberty-202218_960_720.jpg",
  },
  {
    title: "SOUTH AFRICA",
    to: "region/South_Africa",
    src:
      "https://images.unsplash.com/photo-1532301371038-85df63be6e13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  },
  {
    title: "UNITED KINGDOM",
    to: "region/United_Kingdom_of_Great_Britain_and_Northern_Ireland",
    src:
      "https://cdn.pixabay.com/photo/2018/01/12/11/55/london-3078109_960_720.jpg",
  },
  {
    title: "AUSTRALIA",
    to: "region/Australia",
    src:
      "https://cdn.pixabay.com/photo/2019/07/15/08/32/australia-4338882_960_720.jpg",
  },
];
const PopularDestinationsContainer = styled.div`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    text-align: center;
  }
`;
const PopularDestinations = () => {
  return (
    <PopularDestinationsContainer>
      <Header>Popular Destinations</Header>
      <PlaceCardWrapper>
        {PopularDestinationsData.map(({ title, to, src }, index) => (
          <PlaceCard to={to} key={`popular_destination-${index}`}>
            <PlaceCard.SubHeader color="white">{title}</PlaceCard.SubHeader>
            <PlaceCard.Background bgHeight="100%">
              <img src={src} alt={title} />
            </PlaceCard.Background>
          </PlaceCard>
        ))}
      </PlaceCardWrapper>
    </PopularDestinationsContainer>
  );
};
export default PopularDestinations;
