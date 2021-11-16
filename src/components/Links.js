import React, { useEffect, useState } from "react";
import LinksForm from "./LinksForm";

import { db } from "../firebase";


const Links = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("Formulario Realizado").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  


  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("Formulario Realizado").doc().set(linkObject);
        
      } else {
        await db.collection("Formulario Realizado").doc(currentId).update(linkObject);
        
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-md-5 p-3">
        <LinksForm {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="col-md-8 p-4">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <div>
                 
               
                </div>
              </div>
            
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Links;
