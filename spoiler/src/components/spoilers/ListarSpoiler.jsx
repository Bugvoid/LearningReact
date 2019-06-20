import React, { Component } from "react";
import fon from "../../img/fon.jpg";
import { Link } from "react-router-dom";

class ListarSpoiler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spoilers: [],
      erro: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/spoilers`, {
      headers: {
        rejectUnauthorized: false
      }
    })
      .then(spoilers =>
        spoilers.json().then(spoilers => this.setState({ spoilers }))
      )
      .catch(erro => this.setState({ erro }));
  }

  exibeErro() {
    const { erro } = this.state;

    if (erro) {
      return (
        <div className="alert alert-danger" role="alert">
          Erro de conexão com o servidor
        </div>
      );
    }
  }

  exibeSpoilers() {
    const { spoilers } = this.state;

    if (spoilers && spoilers.length) {
      return spoilers.map((item, indice) => (
        <div key={indice} className="card">
          <img className="card-img-top" src={fon} alt="SPOILER!!" />
          <div className="card-body">
            <h5 className="card-title">{item.titulo}</h5>
            <p className="card-text">{item.descricao}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.espoliador}</li>
          </ul>
          <div className="card-body">
            <Link
              to={`/remover/${item._id}`}
              className="btn btn-danger mr-3"
              role="button"
            >
              Remover
            </Link>
            <Link
              to={`/editar/${item._id}`}
              className="btn btn-primary"
              role="button"
            >
              Editar
            </Link>
          </div>
        </div>
        
      ));
    } else {
      return (
        <div className="alert alert-light" role="alert">
          Sem spoilers ainda (/◕ヮ◕)/
        </div>
      );
    }
  }

  render() {
    return <div>{this.exibeErro() || this.exibeSpoilers()}</div>;
  }
}

export default ListarSpoiler;
