import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './App.styled';

const Filter = ({ filter, onChange }) => (
  <FilterContainer>
    <FilterLabel>Filter contacts by name:</FilterLabel>
    <FilterInput
      type="text"
      value={filter}
      onChange={event => onChange(event.target.value)}
    />
  </FilterContainer>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
