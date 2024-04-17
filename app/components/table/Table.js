import React from "react";
import PropTypes from "prop-types";

const Table = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {props.thead &&
            props.thead.map((data, index) => (
              <td
                key={index}
                className="text-table font-weight-bold"
                style={{ letterSpacing: 0.0, backgroundColor: "#EFEFEF" }}
              >
                {data.name}
              </td>
            ))}
        </tr>
      </thead>
      {props.text && (
        <div
          className="text-md"
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            letterSpacing: 0.5,
          }}
        >
          {props.text}
        </div>
      )}

      <tbody>
        {Array.isArray(props.tbody) && props.tbody.length > 0 ? (
          props.tbody.map((row, index) => (
            // console.log(row)

            <tr
              key={index}
              style={{
                lineHeight: 2,
                // backgroundColor:
                //   row.active == "In-Active"
                //     ? "#7283ac"
                //     : row.title == "Total Gross"
                //     ? "#efefef"
                //     : row.title == "Net Pay" && "#efefef",
                // cursor: props.options && "pointer",
                // color : row.active == "In-Active"  && '#fff'
              }}
              onClick={props.options ? () => props.makeOption(row) : null}
            >
              {Object.values(row).map(
                (data, index) =>
                  index != 0 && (
                    <td
                      key={index}
                      className="text-xs font-weight-normal"
                      style={{
                        ...props.style,
                        letterSpacing: 0.0,
                        // backgroundColor: data.background ? "#efefef" : "",
                        // color : props.background ? '#efefef' : ""
                      }}
                    >
                      {data}
                    </td>
                  )
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-table"> No data Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  // placeholder: PropTypes.string.isRequired
};

export default Table;
