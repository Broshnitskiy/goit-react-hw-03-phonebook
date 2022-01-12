export const Filter = ({ value, handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </label>
  );
};
