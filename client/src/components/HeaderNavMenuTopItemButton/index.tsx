import React from 'react';
import styled from 'styled-components';


export interface Props {
};

const Wrapper = styled.div`
  display: block;
  list-style: none;

  padding-right: 0;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`

const LinkWrapper = styled.a`
  border-bottom: 0px none rgba(0, 0, 0, 0);
  border-left: 0px none rgba(0, 0, 0, 0);
  border-right: 0px none rgba(0, 0, 0, 0);
  border-top: 1px solid rgba(0, 0, 0, 0);
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  display: block;
  font: normal normal 400 normal 15px / 100px Roboto, Arial, Helvetica, sans-serif;
  height: 100px;
  list-style: none outside none;
  outline: rgb(255, 255, 255) none 0px;
  perspective-origin: 51px 50.5px;
  text-align: left;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  transform-origin: 51px 50.5px;
  width: 102px;
`

const ButtonWrapper = styled.span`
  background: rgba(255, 255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border: 2px solid rgb(220, 220, 220);
  bottom: 0px;
  box-sizing: border-box;
  caret-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
  column-rule-color: rgb(220, 220, 220);
  cursor: pointer;
  display: inline-block;
  font: normal normal 700 normal 13px / 16px "PT Sans", Arial, Helvetica, sans-serif;
  height: 42px;
  left: 0px;
  list-style: none outside none;
  outline: rgb(220, 220, 220) none 0px;
  padding: 11px 23px;
  perspective-origin: 51px 21px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(220, 220, 220);
  text-size-adjust: 100%;
  text-transform: uppercase;
  top: -18%;
  transform-origin: 51px 21px;
  transition: all 0.2s ease 0s;
  width: 102px;

  :hover {
  background-color: white;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  color: black;
  transition-duration: 0.65s;
  }
`

export default function HeaderNavMenuTopItemButton(props: Props) {
  return (
    <Wrapper>
      <LinkWrapper>
        <ButtonWrapper>
          CONTACT
        </ButtonWrapper>
      </LinkWrapper>
    </Wrapper>
  );
}
