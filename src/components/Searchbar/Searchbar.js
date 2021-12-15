import PropTypes from 'prop-types';
import SearchFrom from '../SearchForm/SearchForm';

import styles from './searchbar.module.scss';

const Searchbar = ({ onSearch }) => (
  <header className={styles.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;