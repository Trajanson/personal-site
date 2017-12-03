import React from 'react';
import styled from 'styled-components';

import HeaderMainMenuItem from 'components/HeaderMainMenuItem';

export interface Props {

};

const Wrapper = styled.div`
  width: 100%;
  float: right;
  position: relative;
  overflow: hidden;
`

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default function HeaderMainMenu(props: Props) {
  return (
    <Wrapper>
      <ListWrapper>
        <HeaderMainMenuItem
          title='THEODERIK'
        />
        <HeaderMainMenuItem
          title='VIDEOCASTS'
        />
        <HeaderMainMenuItem
          title='PRESS'
        />
        <HeaderMainMenuItem
          title='CONTACT'
        />
      </ListWrapper>
    </Wrapper>
  );
}
