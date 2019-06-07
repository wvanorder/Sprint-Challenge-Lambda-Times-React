import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cardz = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const Author =styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span{
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const Image= styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img{
    width: 40px;
  }
`;



const Card = props => {
  return (
    <Cardz>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <Image>
          <img src={props.card.img} />
        </Image>
        <span>By {props.card.author}</span>
      </Author>
    </Cardz>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: 
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
    
  
      
    };

Card.defaultProps = {
  card: {}
}

export default Card;
