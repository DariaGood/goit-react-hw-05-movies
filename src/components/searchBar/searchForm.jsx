import PropTypes from 'prop-types';
import { Form } from 'components/styles/Element.styled';

const SearchForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};