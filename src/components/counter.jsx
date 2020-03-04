import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log(this);
  }

  state = {
    count: 0,
    tags: [1, 2, 3]
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return <p style={{ margin: 20 }}>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-md badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement() {
    console.log("Increment Clicked", this.state.count);
  }

  render() {
    return (
      <div>
        <span
          className={this.getBadgeClasses()}
          style={{ padding: 10, margin: 5 }}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
