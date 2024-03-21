// // SchemaDisplay.js
// import React from "react";
// import ColoredDot from "../ColoredDot/ColoredDot";
// import SchemaDropdown from "../SchemaDropdown/SchemaDropdown";

// export default function SchemaDisplay({ schemas }) {
//   return (
//     <div>
//       {schemas.map((schema, index) => (
//         <div key={index}>
//           {schema.category === "user" ? (
//             <ColoredDot color="green" size={16} />
//           ) : (
//             <ColoredDot color="red" size={16} />
//           )}
//           <span>{schema.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// }


///////////////////////////////////////////////////////////////////

// SchemaDisplay.js
import React from "react";
import ColoredDot from "../ColoredDot/ColoredDot";
import "./SchemaDisplay.css"

export default function SchemaDisplay({ schemas, allSchemas, onSchemaChange }) {
  return (
    <div >
      {schemas.map((schema, index) => (
        <div key={index}>
          {schema.category === "user" ? (
            <ColoredDot color="green" size={16} />
          ) : (
            <ColoredDot color="red" size={16} />
          )}
          <select
            value={schema.value}
            onChange={(event) => onSchemaChange(event, index)}
            className="custom-dropdown"
          >
            {allSchemas.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

