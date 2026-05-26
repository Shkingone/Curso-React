import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function Config({isEditing}) {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();

  const saveDoc = async () => {
    try {
      await addDoc(collection(db, "itens"), {
        nome: title,
        preciOriginal: Number(precio),
        descuento: Number(descuento),
        descripcion: desc,
      }
    );
      console.log("documento guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDoc = async () => {
    const docSnap = await getDoc(doc(db, "itens", id));
    console.log(docSnap.data());
    setTitle(docSnap.data().nome);
    setPrecio(`${docSnap.data().preciOriginal}`);
    setDescuento(`${docSnap.data().descuento}`);
    setDesc(docSnap.data().descripcion);
  };
  useEffect(() => {
    fetchDoc();
  }, []);

  const dataDoc = () => {
    const docRef = doc(db, "itens", id);
const data = {
        nome: title,
        preciOriginal: Number(precio),
        descuento: Number(descuento),
        descripcion: desc,
        };
    updateDoc(docRef, data);
}

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
        >
          
        </div>
      </div>
    </div>
  );
}
