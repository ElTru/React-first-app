import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} heroImage={infoContent.image} />
    <div>
      {infoContent.content}
    </div>
  </Container>
);

export default Info;
