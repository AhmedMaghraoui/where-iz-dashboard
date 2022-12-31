import React from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const SearchInput = ({ tableInstance, onChange }) => {
  const {
    state: { globalFilter },
  } = tableInstance;

  const [value, setValue] = React.useState(globalFilter);

  return (
    <>
      <input
        className="form-control datatable-search"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Recherche"
      />
      {value && value.length > 0 ? (
        <span
          className="search-delete-icon"
          onClick={() => {
            setValue('');
            onChange('');
          }}
        >
          <CsLineIcons icon="close" />
        </span>
      ) : (
        <span className="search-magnifier-icon pe-none">
          <CsLineIcons icon="search" />
        </span>
      )}
    </>
  );
};

export default SearchInput;
