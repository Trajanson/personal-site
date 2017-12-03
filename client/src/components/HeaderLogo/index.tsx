import React from 'react';
import styled from 'styled-components';

const logo = require('images/logo.png');

export interface Props {
};

const Wrapper = styled.div`
  display: block;
  float: left;
  margin-bottom: 20px;
  margin-right: 0px;
  margin-top: 20px;
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


export default function HeaderLogo(props: Props) {
  return (
    <Wrapper>
      <LinkWrapper>
        <Logo src={logo} />
      </LinkWrapper>
    </Wrapper>
  );
}
