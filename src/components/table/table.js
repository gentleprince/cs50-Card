import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{this.front()}</tbody>
      </table>
    );
  }

  front = () => {
    return (
      <>
        {this.props.updateCards.map((card, i) => (
          <tr key={i}>
            <td>{card.frontArray}</td>
            <td>{card.backArray}</td>
            <td>
              <button
                data-index={i}
                onClick={this.props.onDelete}
                className="m-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  };

  //   back = () => {
  //     return (
  //       <>
  //         {this.props.updateCards.backArray.map((back) => (
  //           <>back</>
  //         ))}
  //       </>
  //     );
  //   };

  //   button = () => {
  //     return (
  //       <button onClick={this.onDelete} className="m-2">
  //         Delete
  //       </button>
  //     );
  //   };
}

export default Table;
