import PropTypes from 'prop-types';

export const Filter = ({ value, handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
