import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';

const Carouselz = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  img {
    width: 100%;
    display: none;
  }
  @media (min-width: 1200px) {
      width: 1200px;
    }
`;
const Buttonz= styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  transform: translate(0, -50%);
  &:hover{
    color: #333;
  background-color: #fff;
  border: 2px solid #333;
  }
`;

const LBut = styled(Buttonz)`
  left: 25px;
`

const RBut = styled(Buttonz)`
  right: 25px;
`




// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPhoto: 2,
      photos: [],
    }
  }
  componentDidMount(){
this.setState({
  photos: carouselData,
})
  }

  leftClick = () => {
    if(this.state.currentPhoto > 0) {
      this.setState({
        currentPhoto : this.state.currentPhoto -1
      })
    } else {
      this.setState({
        currentPhoto : carouselData.length - 1
      })
    }
  }

  rightClick = () => {
    var num = this.state.currentPhoto
    if(this.state.currentPhoto < carouselData.length -1 ) {
      this.setState({
        currentPhoto : num +1
      })
    } else if(this.state.currentPhoto === carouselData.length - 1) {
      this.setState({
        currentPhoto : 0
      })
    }

  }

  selectedImage = () => {
    return <img src={this.state.photos[this.state.currentPhoto]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <Carouselz>
        <LBut onClick={this.leftClick}>{"<"}</LBut>
        {this.selectedImage()}
        <RBut onClick={this.rightClick}>{">"}</RBut>
      </Carouselz>
    )
  }
}