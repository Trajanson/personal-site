import React from 'react';
import styled from 'styled-components';

import HeaderNavMenuTopItem from 'components/HeaderNavMenuTopItem';
import HeaderNavMenuTopItemButton from 'components/HeaderNavMenuTopItemButton';

export interface Props {

};

const Wrapper = styled.div`
  float: right;
  position: relative;
  z-index: 200;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  overflow: hidden;
  box-sizing: border-box;
`

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default function HeaderNavMenu(props: Props) {
  return (
    <Wrapper>
      <ListWrapper>

        <HeaderNavMenuTopItem
          title="THEODERIK"
          isSelected
        />
        <HeaderNavMenuTopItem
          title="VIDEOCASTS"
        />
        <HeaderNavMenuTopItem
          title="PRESS"
        />
        <HeaderNavMenuTopItemButton />

      </ListWrapper>
    </Wrapper>
  );
}
