import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
`;

const Cards = props => {
  return (
    <CardContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
          props.cards.map(card => {
            return <Card card={card}/>
          })}
    </CardContainer>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {};

Cards.defaultProps = {
  card: []
}

export default Cards;