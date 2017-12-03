import React, { SFC } from 'react';

import styled from 'styled-components';

const logo = require('images/logo.png')

import HeaderMainMenu from 'components/HeaderMainMenu';

export interface Props {

};

const Wrapper = styled.div`
  background-color: rgba(12,12,13,0.9);

  height: 65px;
  top: 0px;
  overflow: visible;
`;

const HeaderRowWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  max-width: 100%;
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
`

const LogoContainerWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 0px;
  display: block;
  float: left;
  max-width: 100%;
  zoom: 1;
`

const LinkWrapper = styled.a`
  display: block;
  max-width: 100%;
  color: #ffffff;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;


const HeaderNavWrapper = styled.nav`
  float: right;
  position: relative;
  z-index: 200;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  overflow: hidden;
  box-sizing: border-box;
`;

const HeaderMainMenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const HeaderMainMenuItem = styled.li`
  padding-right: 45px;
  float: left;
  margin: 0;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.88;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
`;

const HeaderMainMenuItemLink = styled.a`
text-decoration: none;

display: block;
box-sizing: content-box;

color: #ffffff;
font-size: 15px;
border-top: 1px solid transparent;
line-height: 64px;
height: 64px;
border-color: #ffffff;
`;

type Header = SFC<Props>;
const Header: Header = (props: Props) => {
  <HeaderMainMenu />

  return (
    <Wrapper>
      <HeaderRowWrapper>
        <LogoContainerWrapper>
          <LinkWrapper>
            <Logo src={logo} />
          </LinkWrapper>
        </LogoContainerWrapper>
      </HeaderRowWrapper>

      <HeaderNavWrapper>
        <HeaderMainMenuWrapper>
          <HeaderMainMenuItem>
            <HeaderMainMenuItemLink>
              Theoderik
            </HeaderMainMenuItemLink>
          </HeaderMainMenuItem>
          <HeaderMainMenuItem>
            <HeaderMainMenuItemLink>
              PODCASTS
            </HeaderMainMenuItemLink>
          </HeaderMainMenuItem>
          <HeaderMainMenuItem>
            <HeaderMainMenuItemLink>
              PRESS
            </HeaderMainMenuItemLink>
          </HeaderMainMenuItem>
        </HeaderMainMenuWrapper>
      </HeaderNavWrapper>
    </Wrapper>
  );
}
export default Header;
