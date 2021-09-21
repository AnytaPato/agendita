import React, { useState } from "react";
import { v4 as uuid } from "uuid"; //dependencia para generar id aleatorio

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),  //inicializo funcion con uuid
      nombre,
      numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Ingresa el Nombre:{" "}
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Ingresa el Número:{" "}
          <input
            onChange={handleChange}
            value={numero}
            name="numero"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-outline-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioAdd;
