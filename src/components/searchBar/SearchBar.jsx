import { ButtonIcon, SearchBox } from 'components/styles/Element.styled';
import { BsSearch } from 'react-icons/bs';
import SearchForm from './searchForm';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </SearchForm>
  </SearchBox>
);
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};