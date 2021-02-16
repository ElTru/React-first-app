import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} heroImage={faqContent.image} />
    <div>
      {faqContent.content}
    </div>
  </Container>
);

export default FAQ;
