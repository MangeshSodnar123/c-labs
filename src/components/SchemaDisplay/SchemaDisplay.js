import React from "react";
import ColoredDot from "../ColoredDot/ColoredDot";
import "./SchemaDisplay.css";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

export default function SchemaDisplay({
  schemas,
  allSchemas,
  onSchemaChange,
  onRemoveSchema,
}) {
  return (
    <div>
      {schemas.map((schema, index) => (
        <div key={index} className="flexbox">
          {schema.category === "user" ? (
            <ColoredDot color="#5DDB78" size={16} />
          ) : (
            <ColoredDot color="#D24572" size={16} />
          )}
          <select
            value={schema.value}
            onChange={(event) => onSchemaChange(event, index)}
            className="custom-dropdown-d"
          >
            {allSchemas.map((schema) => (
              <option
                key={schema.value}
                value={schema.value}
                disabled={schemas.find(
                  (selectedSchema) => selectedSchema.value === schema.value
                )}
                category={schema.category}
              >
                {schema.label}
              </option>
            ))}
          </select>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => onRemoveSchema(index)}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
