// // import React, { useState } from "react";
// // import "./Trait.css";
// // import ColoredDot from "../ColoredDot/ColoredDot";

// // export default function Trait() {
// //   const [selectedValue, setSelectedValue] = useState("");
// //   const [schemas, setSchemas] = useState([]);

// //   const allSchemas = [
// //     { label: "First Name", value: "first_name", category: "user" },
// //     { label: "Last Name", value: "last_name", category: "user" },
// //     { label: "Gender", value: "gender", category: "user" },
// //     { label: "Age", value: "age", category: "user" },
// //     { label: "Account Name", value: "account_name", category: "user" },
// //     { label: "City", value: "city", category: "group" },
// //     { label: "State", value: "state", category: "group" },
// //   ];
// //   const handleChange = (event) => {
// //     setSelectedValue(event.target.value);
// //   };

// //   const handleAddSchema = () => {
// //     if (
// //       selectedValue &&
// //       !schemas.find((schema) => schema.value === selectedValue)
// //     ) {
// //       const selectedSchema = allSchemas.find(
// //         (schema) => schema.value === selectedValue
// //       );
// //       setSchemas([...schemas, selectedSchema]);
// //       setSelectedValue("");
// //     }
// //   };

// //   const renderSchemaDropdowns = () => {
// //     return (
// //       <select
// //         value={selectedValue}
// //         onChange={handleChange}
// //         className="custom-dropdown"
// //       >
// //         <option value="">Add schema to segment</option>
// //         {allSchemas.map((schema) => (
// //           <option
// //             key={schema.value}
// //             value={schema.value}
// //             disabled={schemas.find(
// //               (selectedSchema) => selectedSchema.value === schema.value
// //             )}
// //             category={schema.category}
// //           >
// //             {schema.label}
// //           </option>
// //         ))}
// //       </select>
// //     );
// //   };

// //   const handleSchemaChange = (event, index) => {
// //     const updatedSchemas = [...schemas];
// //     const selectedSchema = allSchemas.find(
// //       (schema) => schema.value === event.target.value
// //     );
// //     updatedSchemas[index] = selectedSchema;
// //     setSchemas(updatedSchemas);
// //   };

// //   const handleSaveSegment = () => {
// //     const data = {
// //       segment_name: "last_10_days_blog_visits",
// //       schema: schemas.map((schema) => ({
// //         [schema]:
// //           schema.charAt(0).toUpperCase() + schema.slice(1).replace("_", " "),
// //       })),
// //     };
// //     console.log("Data to be saved:", data);
// //     // Send data to server
// //   };

// //   return (
// //     <div>
// //       {schemas.map((schema, index) => (
// //         <>
// //           {console.log("schemas: ", schemas)}
// //           {console.log("schema: ", schema)}
// //           {console.log("schema.category: ", schema.category)}
// //           {schema.category === "user" ? (
// //             <ColoredDot color="green" size={16} />
// //           ) : (
// //             <ColoredDot color="red" size={16} />
// //           )}

// //           <select
// //             key={index}
// //             value={schema.value} // Use schema.value as the value
// //             onChange={(event) => handleSchemaChange(event, index)}
// //             className="custom-dropdown"
// //           >
// //             <option
// //               value=""
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "first_name"
// //               )}
// //             >
// //               First Name
// //             </option>
// //             <option
// //               value="last_name"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "last_name"
// //               )}
// //             >
// //               Last Name
// //             </option>
// //             <option
// //               value="gender"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "gender"
// //               )}
// //             >
// //               Gender
// //             </option>
// //             <option
// //               value="age"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "age"
// //               )}
// //             >
// //               Age
// //             </option>
// //             <option
// //               value="account_name"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "account_name"
// //               )}
// //             >
// //               Account Name
// //             </option>
// //             <option
// //               value="city"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "city"
// //               )}
// //             >
// //               City
// //             </option>
// //             <option
// //               value="state"
// //               disabled={schemas.find(
// //                 (selectedSchema) => selectedSchema.value === "state"
// //               )}
// //             >
// //               State
// //             </option>
// //           </select>
// //         </>
// //       ))}
// //       {/* <button onClick={handleSaveSegment}>Save the Segment</button> */}
// //       {renderSchemaDropdowns()}
// //       <button onClick={handleAddSchema} className="button">
// //         + Add new schema
// //       </button>
// //     </div>
// //   );
// // }


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Trait.js
// import React, { useState } from "react";
// import "./Trait.css";
// import SchemaDropdown from "../SchemaDropdown/SchemaDropdown";
// import SchemaDisplay from "../SchemaDisplay/SchemaDisplay";

// export default function Trait() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [schemas, setSchemas] = useState([]);

//   const allSchemas = [
//     { label: "First Name", value: "first_name", category: "user" },
//     { label: "Last Name", value: "last_name", category: "user" },
//     { label: "Gender", value: "gender", category: "user" },
//     { label: "Age", value: "age", category: "user" },
//     { label: "Account Name", value: "account_name", category: "user" },
//     { label: "City", value: "city", category: "group" },
//     { label: "State", value: "state", category: "group" },
//   ];

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleAddSchema = () => {
//     if (selectedValue && !schemas.find((schema) => schema.value === selectedValue)) {
//       const selectedSchema = allSchemas.find((schema) => schema.value === selectedValue);
//       setSchemas([...schemas, selectedSchema]);
//       setSelectedValue("");
//     }
//   };

//   const handleSchemaChange = (event, index) => {
//     const updatedSchemas = [...schemas];
//     const selectedSchema = allSchemas.find((schema) => schema.value === event.target.value);
//     updatedSchemas[index] = selectedSchema;
//     setSchemas(updatedSchemas);
//   };

//   const disabledSchemas = schemas.map((schema) => schema.value);

//   return (
//     <div>
//       <SchemaDisplay schemas={schemas} />
//       <SchemaDropdown
//         value={selectedValue}
//         onChange={handleChange}
//         allSchemas={allSchemas}
//         disabledSchemas={disabledSchemas}
//       />
//       <button onClick={handleAddSchema} className="button">
//         + Add new schema
//       </button>
//     </div>
//   );
// }


//////////////////////////////////////////////////////////////////////////////////////////
// Trait.js
import React, { useState } from "react";
import "./Trait.css";
import ColoredDot from "../ColoredDot/ColoredDot";
import SchemaDisplay from "../SchemaDisplay/SchemaDisplay";

export default function Trait() {
  const [selectedValue, setSelectedValue] = useState("");
  const [schemas, setSchemas] = useState([]);

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
        className="custom-dropdown"
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

