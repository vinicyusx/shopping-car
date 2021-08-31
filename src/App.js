import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ImgAdd from "./assets/add.svg";
import ImgRv from "./assets/remove.svg";
import Car from "./assets/car.svg";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Boxmap = styled.div`
  width: 56%;
  display: flex;
  height: 30vh;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  margin: 0.5rem;
`;
const Heandercar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid;
  height: 9vh;
  width: 200px;
  font-weight: bold;
  background-color: #ededed;
  padding: 0 1rem 0 1rem;
`;
const Maincar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;

  p {
    font-size: 15px;
    margin: 5px;
  }
  span {
    font-weight: bold;
  }
`;
const Div = styled.div`
  background-color: #5bc0de;
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 0 1rem 0 1rem;

  p {
    font-size: 1rem;
    padding: 0.3rem;
  }
  button {
    outline: none;
    border: none;
    background-color: #5bc0de;
  }
`;
const Boxcarrinho = styled.div`
  border: 1px solid;
  width: 30%;
  height: 500px;
  overflow: scroll;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled.button`
  outline: none;
  border: none;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  list-style: none;
  span {
    font-weight: bold;
  }
`;

class App extends Component {
  state = {
    carros: [
      {
        id: 1,
        desabilitar: false,
        name: "Jetta",
        montadora: "Volkswagem",
        preço: 144000,
        tipo: "Sedan"
      },
      {
        id: 2,
        desabilitar: false,
        name: "Polo",
        montadora: "Volkswagen",
        preço: 70000,
        tipo: "Hatch"
      },
      {
        id: 3,
        desabilitar: false,
        name: "T-Cross",
        montadora: "Volkswagen",
        preço: 123000,
        tipo: "SUV"
      },
      {
        id: 4,
        desabilitar: false,
        name: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146000,
        tipo: "SUV"
      },
      {
        id: 5,
        desabilitar: false,
        name: "Civic",
        montadora: "Honda",
        preço: 115000,
        tipo: "Sedan"
      },
      {
        id: 6,
        desabilitar: false,
        name: "Corolla",
        montadora: "Toyota",
        preço: 110000,
        tipo: "Sedan"
      },
      {
        id: 7,
        desabilitar: false,
        name: "Corolla Cross",
        montadora: "Toyota",
        preço: 184000,
        tipo: "SUV"
      },
      {
        id: 8,
        desabilitar: false,
        name: "Compass",
        montadora: "Jeep",
        preço: 132000,
        tipo: "SUV"
      },
      {
        id: 9,
        desabilitar: false,
        name: "Golf GTI",
        montadora: "Volkswagem",
        preço: 138000,
        tipo: "Hatch"
      }
    ],
    Carroscomprado: []
  };
  Addcar = (id) => {
    const { Carroscomprado, carros } = this.state;
    const car = carros.find((item) => item.id === id);

    this.setState({
      Carroscomprado: Carroscomprado.concat(car)
    });
  };
  Removercar = (id) => {
    const { Carroscomprado } = this.state;
    this.setState({
      Carroscomprado: Carroscomprado.filter((item) => {
        return item.id != id;
      })
    });
  };
  render() {
    return (
      <section>
        <Container>
          <Boxmap>
            {this.state.carros.map((item, index) => (
              <Card key={index}>
                <Heandercar>
                  <p>{item.name}</p>
                  <Button
                    onClick={() => {
                      this.Addcar(item.id);
                    }}
                  >
                    <img src={ImgAdd} alt="botão de adicionar" />
                  </Button>
                </Heandercar>
                <Maincar>
                  <p>
                    {" "}
                    <span>Montadora:</span>
                    {item.montadora}
                  </p>
                  <p>
                    <span>Preço:</span>R${item.preço}
                  </p>
                  <p>
                    <span>Tipo:</span>
                    {item.tipo}
                  </p>
                </Maincar>
              </Card>
            ))}
          </Boxmap>
          <Boxcarrinho>
            {this.state.Carroscomprado.map((item, index) => (
              <div key={index}>
                <Div>
                  <p>{item.name}</p>
                  <button
                    onClick={() => {
                      this.Removercar(item.id);
                    }}
                  >
                    <img src={ImgRv} alt="botão de remover" />
                  </button>
                </Div>
                <Ul>
                  <li>
                    <span>Tipo:</span>
                    {item.tipo}
                  </li>
                  <li>
                    <span>Preço:</span>
                    {item.preço}
                  </li>
                </Ul>
              </div>
            ))}

            <h2>
              Total:{this.state.Carroscomprado.reduce((a, b) => a + b.preço, 0)}
            </h2>
          </Boxcarrinho>
        </Container>
      </section>
    );
  }
}
export default App;
