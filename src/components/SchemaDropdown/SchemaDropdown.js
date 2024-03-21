// SchemaDropdown.js
import React from "react";

export default function SchemaDropdown({ value, onChange, allSchemas, disabledSchemas }) {
  return (
    <select value={value} onChange={onChange} className="custom-dropdown">
      <option value="">Add schema to segment</option>
      {allSchemas.map((schema) => (
        <option key={schema.value} value={schema.value} disabled={disabledSchemas.includes(schema.value)}>
          {schema.label}
        </option>
      ))}
    </select>
  );
}
