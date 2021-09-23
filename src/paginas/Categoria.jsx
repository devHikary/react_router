import React, { useState, useEffect } from "react";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import "../assets/css/blog.css";
import {
  Route,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import { busca } from "../api/api";


const Categoria = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
    </>
  )
}
export default Categoria
