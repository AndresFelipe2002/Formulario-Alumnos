import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Table from './Table'


import "./LinksForm.css";

const LinksForm = (props) => {
  const initialStateValues = {
    NombreCompleto: "",
    Formación: "",
    TipoDeDocumento: "",
    No_Documento: "",
    FechaDeNacimiento: "",
    FechaDeIngreso: "",
    FechaDeEgreso: "",
    No_Trimestre: "",

  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("Formulario Realizado").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <div className="container-main">
      <form className= "MyForm" onSubmit={handleSubmit} className="card card-body border-primary">
        <h1 className="mb-4 text-center">Formulario</h1>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">person</i>
          </div>
          <input
            type="text"
            value={values.NombreCompleto}
            name="NombreCompleto"
            placeholder="Ingresa tu nombre completo"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light mb-4">
            <i className="material-icons">people</i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Formación"
            value={values.Formación}
            name="Formación"
            onChange={handleInputChange}
          />
        </div>

        <h4 className="text-center mb-5">Tipo de documento</h4>
        <select value={values.TipoDeDocumento} onChange={handleInputChange} name="TipoDeDocumento" className="Select">
          <option>Seleccione su documento de identidad</option>
          <option>Cedula ciudadania</option>
          <option>Tarjeta identidad</option>
          <option>Cedula extranjeria</option>
          <option>Numero de identificación personal</option>
          <option>Numero de identificacion tributaria</option>
          <option>Pasaporte</option>
        </select>
        <br />
        <br />

        <div className="form-group input-group">
          <div className="input-group-text bg-light mb-2">
            <i className="material-icons">chrome_reader_mode</i>
          </div>

          <input
            type="number"
            placeholder="Ingresa el No. de documento"
            className="form-control"
            value={values.No_Documento}
            name="No_Documento"
            onChange={handleInputChange}
          />
        </div>
        <h7 className="text-left">Fecha de nacimiento</h7>
        <div className="form-group input-group mb-4">
          <input
            type="date"
            name="FechaDeNacimiento"
            placeholder="date_of_birth"
            value={values.FechaDeNacimiento}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <h7 className="text-left">Fecha de ingreso</h7>
        <div className="form-group input-group">
          <input
            type="date"
            name="FechaDeIngreso"
            placeholder="date_of_admission"
            value={values.FechaDeIngreso}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <h7 className="text-left">Fecha de egreso</h7>
        <div className="form-group input-group mb-5">
          <input
            type="date"
            name="FechaDeEgreso"
            placeholder="egress_date"
            value={values.FechaDeEgreso}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light mb-2">
            <i className="material-icons">school</i>
          </div>

          <input
            type="number"
            name="No_Trimestre"
            placeholder="Ingresa el No.trimestre"
            className="form-control"
            value={values.No_Trimestre}
            onChange={handleInputChange}
          />
        </div>

        <form className="mb-3">
          <input
            className="Checkbox-terms mb-3"
            type="checkbox"
            name=""
            value=""
          />{""}
          Acepto términos y condiciones.
        </form> 
        
  
        <button className="btn btn-primary btn-block">
          {props.currentId === "" ? "Enviar" : "Update"}
        </button>
      </form>
<div><Table/></div>
     
    </div>

    

    
  );
};

export default LinksForm;
