import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/collatz/9">Collatz del 9</a>
          </li>
          <li>
            <a href="/collatz/6">Collatz del 6</a>
          </li>
          <li>
            <a href="/collatz/1895">Collatz del 1895</a>
          </li>
          <li>
            <a href="/collatz/164">Collatz del 164</a>
          </li>
          <li>
            <a href="/notfound">Not Found</a>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
