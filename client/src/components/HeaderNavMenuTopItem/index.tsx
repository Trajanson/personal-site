import React from 'react';
import styled, { StyledFunction } from 'styled-components';


export interface Props {
  isSelected?: boolean;
  title: string;
};

const Wrapper = styled.div`
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
`

const linkWrapper: StyledFunction<Props & React.HTMLProps<HTMLInputElement>> = styled.a;
const LinkWrapper = linkWrapper`
  text-decoration: none;

  display: block;
  box-sizing: content-box;

  color: #ffffff;
  font-size: 15px;
  border-top: 2px solid transparent;
  line-height: 64px;
  height: 64px;

  border-top-width: 2px;
  border-top-style: solid;
  border-color: ${p => p.isSelected ? '#b8e8ff' : 'transparent'};

  :hover {
    border-color: #b8e8ff;
    color: #b8e8ff;
  }
`;

export default function HeaderNavMenuTopItem(props: Props) {
  const { title } = props;

  return (
    <Wrapper>
      <LinkWrapper {...props}>
        <span>
          {title}
        </span>
      </LinkWrapper>
    </Wrapper>
  );
}
