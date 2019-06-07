import React from 'react';
import styled from 'styled-components';

const NormalTab = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`;

const ActiveTab = styled(NormalTab)`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      const TheTab = props.tab === props.selectedTab ? ActiveTab : NormalTab;
  return (
    <TheTab onClick={() => props.selectTabHandler(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      
    >
      {props.tab.toUpperCase()}
    </TheTab>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
