import React from "react";

const Article = ({ item }) => {
  return (
    <>
      <div>
        <h5>Producto: {item.nombreProducto}</h5>
        <h5>Precio unidad: {item.precioUnd}</h5>
        <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
        <h5>Cantidad máxima: {item.cantidadMax}</h5>
        <h5>Cantidad mínima: {item.cantidadMin}</h5>
      </div>
    </>
  );
};

export default Article;
