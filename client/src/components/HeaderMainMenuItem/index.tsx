import React from 'react';
import styled from 'styled-components';


export interface Props {
  title: string;
};

const Wrapper = styled.li`
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  padding-right: 45px;

  font-family: Roboto, Arial, Helvetica, sans-serif;
`;

const LinkWrapper = styled.a`
  color: #ffffff;
  border-color: #ffffff;
  font-size: 15px;
  border-top: 1px solid transparent;
  -webkit-font-smoothing: subpixel-antialiased;
  display: block;
  box-sizing: content-box;
  text-decoration: none;
`;

export default function HeaderMainMenuItem(props: Props) {
  const { title } = props;

  return (
    <Wrapper>
      <LinkWrapper href='#'>
        {title}
      </LinkWrapper>
    </Wrapper>
  );
}
