import React, { useState } from "react";
import styles from "./ExoCompteur.module.css"

function ExoCompteur({initialValue, incrValue, decrValue}) {
  const [compteur, setCompteur] = useState(initialValue);
  const compteurChangeHandler = (inc) => {
    setCompteur((compteur) => compteur + inc);
  }
  return (
    <div className="exo-compteur">
      <button onClick={() => compteurChangeHandler(incrValue)}>
        Incrementer de {incrValue}
      </button>
      <p>Le compteur est à: {compteur}</p>
      <button onClick={() => compteurChangeHandler(decrValue)}>
        Décrémenter de {decrValue}
      </button>
    </div>
  )
}

export default ExoCompteur