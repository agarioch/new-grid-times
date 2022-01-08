import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsScroll>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportsScroll>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  display: grid;
`;

const SportsScroll = styled.div`
  display: block;
  overflow-x: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    & > a {
      flex: 1;
      min-width: 180px;
      padding-bottom: 16px;
    }
  } ;
`;

export default SpecialtyStoryGrid;
