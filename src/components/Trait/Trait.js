import React, { useState } from "react";
import "./Trait.css";
import SchemaDisplay from "../SchemaDisplay/SchemaDisplay";
import ColoredDot from "../ColoredDot/ColoredDot";

export default function Trait({ schemas, setSchemas}) {
  const [selectedValue, setSelectedValue] = useState("");
  // const [schemas, setSchemas] = useState([]);

  const allSchemas = [
    { label: "First Name", value: "first_name", category: "user" },
    { label: "Last Name", value: "last_name", category: "user" },
    { label: "Gender", value: "gender", category: "user" },
    { label: "Age", value: "age", category: "user" },
    { label: "Account Name", value: "account_name", category: "user" },
    { label: "City", value: "city", category: "group" },
    { label: "State", value: "state", category: "group" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddSchema = () => {
    if (
      selectedValue &&
      !schemas.find((schema) => schema.value === selectedValue)
    ) {
      const selectedSchema = allSchemas.find(
        (schema) => schema.value === selectedValue
      );
      setSchemas([...schemas, selectedSchema]);
      setSelectedValue("");
    }
  };

  const handleSchemaChange = (event, index) => {
    const updatedSchemas = [...schemas];
    const selectedSchema = allSchemas.find(
      (schema) => schema.value === event.target.value
    );
    updatedSchemas[index] = selectedSchema;
    setSchemas(updatedSchemas);
  };

  const handleRemoveSchema = (index) => {
    const updatedSchemas = [...schemas];
    updatedSchemas.splice(index, 1);
    setSchemas(updatedSchemas);
  };

  const handleSaveSegment = () => {
    const data = {
      segment_name: "last_10_days_blog_visits",
      schema: schemas.map((schema) => ({
        [schema]:
          schema.charAt(0).toUpperCase() + schema.slice(1).replace("_", " "),
      })),
    };
    console.log("Data to be saved:", data);
    // Send data to server
  };

  return (
    <div>
      <SchemaDisplay
        schemas={schemas}
        allSchemas={allSchemas}
        onSchemaChange={handleSchemaChange}
        onRemoveSchema={handleRemoveSchema}
      />
      <select
        value={selectedValue}
        onChange={handleChange}
        className="custom-dropdown"
      >
        <option value="">Add schema to segment</option>
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

      <button onClick={handleAddSchema} className="button">
        + Add new schema
      </button>
    </div>
  );
}
