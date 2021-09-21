import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

//configuracion del local storage, graba, lee etc con el metodo getItem (key)
const init = () => {
  const contactos = localStorage.getItem("contactos");//contactos=key

  return contactos ? JSON.parse(contactos) : []; //?=si contactos es nulo manda array vacio o si existe parsea contactos ya grabados
};
//se inicia la  configuracion del array vacio 
const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);//dispatch inicia contactos grabados para que persistan

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));//stringgify convierte a string 
  }, [state]);

  const [formView, setFormView] = useState(false); //state del formulario nuevo contacto

  //formulario para agregar contacto
  return (
    <div className="container mt-3">

<TablaContactos contactos={state} dispatch={dispatch} />

      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-outline-success"
      >
        {!formView ? "Agregar nuevo contacto" : "Cerrar"} 
      </button>
      {formView && <FormularioAdd dispatch={dispatch} />}

     
    </div>
  );
};

export default Contactos;
