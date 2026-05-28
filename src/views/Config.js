import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  deleteDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export default function Config({ isEditing }) {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [desc, setDesc] = useState("");

  const { id } = useParams();

  const fetchDoc = async () => {
    try {
      const docSnap = await getDoc(doc(db, "itens", id));

      if (docSnap.exists()) {
        const data = docSnap.data();

        console.log(data);

        setTitle(data.nome);
        setPrecio(`${data.preciOriginal}`);
        setDescuento(`${data.descuento}`);
        setDesc(data.descripcion);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isEditing) {
      fetchDoc();
    }
  }, []);

  const dataDoc = async () => {
    try {
      let idnew;

      if (isEditing) {
        idnew = id;
      } else {
        idnew = Date.now().toString();
      }

      const docRef = doc(db, "itens", `${idnew}`);

      const data = {
        id: idnew,
        nome: title,
        preciOriginal: Number(precio),
        descuento: Number(descuento),
        descripcion: desc,
      };

      if (isEditing) {
        await updateDoc(docRef, data);
        console.log("Documento actualizado");
      } else {
        await setDoc(docRef, data);
        console.log("Documento creado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#b1a6a6",
        width: "100%",
        objectFit: "cover",
        height: "100vh",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "10px",
          alignItems: "center",
          height: "400px",
          width: "250px",
          padding: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "10px 6px 10px rgba(235, 38, 38, 0.15)",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Nombre"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          label="Precio original"
          value={precio}
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
        />

        <TextField
          label="Descuento"
          value={descuento}
          onChange={(e) => {
            setDescuento(e.target.value);
          }}
        />

        <TextField
          label="Descripción"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={dataDoc} variant="contained" color="success">
            Guardar
          </Button>

          {isEditing && (
            <Button
              onClick={async () => {
                try {
                  await deleteDoc(doc(db, "itens", id));
                  console.log("Documento eliminado");
                } catch (error) {
                  console.log(error);
                }
              }}
              variant="contained"
              color="error"
            >
              Eliminar
            </Button>
          )}

          <Button href="/" variant="contained" color="error">
            Salir
          </Button>
        </div>

        <div
          style={{
            minHeight: "10px",
            display: "flex",
            gap: "10px",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}