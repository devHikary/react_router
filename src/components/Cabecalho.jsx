import React from "react";
import imagem from "../assets/img/doguito.svg";
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icone"></span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img src={imagem} alt="Logo do Doguito" />
        </a>
        <h1 className="cabecalho__titulo">PetShop</h1>
      </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <a href="#" className="menu-item menu-item--entrar">Produtos</a>
          </li>
          <li>
            <a href="#" className="menu-item menu-item--entrar">Blog</a>
          </li>
          <li>
            <a href="#" className="menu-item menu-item--entrar">Sobre</a>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;
