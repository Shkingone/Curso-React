import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
export default function Config() {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();

  const fetchDoc = async () => {
    const docSnap = await getDoc(doc(db, "itens", id));
    console.log(docSnap.data());
    setTitle(docSnap.data().nome);
    setPrecio(`${docSnap.data().precio}`);
    setDescuento(`${docSnap.data().descuento}`);
    setDesc(docSnap.data().descripcion);
  };
  useEffect(() => {
    fetchDoc();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {" "}
      <div style={{ width: "100vw", height: "100vh" }}>
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button variant="contained" href="/">
            Atrás
          </Button>

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
            <Button variant="contained" color="success">
              Guardar
            </Button>
            <Button variant="contained" color="error">
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
            <Button color="error" fullWidth>
              Eliminar
            </Button>
            <Button color="success" fullWidth>
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
