import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

class SearchResults extends React.Component {

  static propTypes = {
    icon: PropTypes.node,
    cards: PropTypes.array,
    searchString: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {icon, cards, children} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          {children}
          <div className={styles.icon}>
            <Icon name={icon} />
          </div>
          <div>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
