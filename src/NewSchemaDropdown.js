import React from 'react';

export default function NewSchemaDropdown({ label, options, onSelect }) {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(e) => onSelect(options.find((o) => o.value === e.target.value))}>
        <option value="">Select Schema</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
