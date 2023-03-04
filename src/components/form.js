import React, { Component } from "react";
import Table from "./table/table";

class Form extends Component {
  render() {
    return (
      <>
        {/*Card Table*/}
        <Table
          updateCards={this.props.updateCard}
          onDelete={this.props.onDelete}
        />
        {/*Card Form*/}
        <div>
          <div className="d-flex justify-content-center">
            <form className=" d-block mt-5 mb-2">
              <input
                type="text"
                placeholder="Front"
                name="front"
                onChange={this.props.onInput}
                value={this.props.onfront}
              />
              <input
                type="number"
                placeholder="Back"
                name="back"
                onChange={this.props.onInput}
                value={this.props.onback}
              />
              <input
                type="submit"
                onClick={this.props.onSubmit}
                value="Add Card"
              />
            </form>
          </div>
          <hr />
        </div>
      </>
    );
  }
}

export default Form;
