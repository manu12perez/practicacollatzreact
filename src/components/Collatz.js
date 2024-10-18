import React, { Component } from "react";

export default class Collatz extends Component {
  state = {
    secuencia: [],
  };

  generarCollatz = () => {
    let numero = parseInt(this.props.numero);
    let nuevaSecuencia = [];

    while (true) {
      nuevaSecuencia.push(numero);
      if (numero === 1) break;

      if (numero % 2 === 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
    }

    this.setState({
      secuencia: nuevaSecuencia,
    });
  };

  componentDidMount() {
    this.generarCollatz();
  }

  render() {
    return (
      <div>
        <h1>CONJETURA DE COLLATZ</h1>
        <ul>
          {this.state.secuencia.map((numero, index) => {
            return <li key={index}> {numero} </li>;
          })}
        </ul>
      </div>
    );
  }
}
