import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';

const Tabz = styled.div`
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
      width: 1280px;
    }
`;

const Topicz = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  span{
    font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  }
`;

const Tabs = props => {
  return (
    <Tabz>
      <Topicz>
        <span>TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map(tab => {
              return <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
            })}
      </Topicz>
    </Tabz>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
