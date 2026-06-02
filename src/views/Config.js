import { Button, TextField, Paper, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteDoc, getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import {v4 as uuidv4} from "uuid";
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
        idnew = uuidv4();
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        padding: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          {isEditing ? "Editar Producto" : "Crear Producto"}
        </Typography>

        <TextField
          fullWidth
          label="Nombre"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          fullWidth
          label="Precio original"
          value={precio}
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
        />

        <TextField
          fullWidth
          label="Descuento"
          value={descuento}
          onChange={(e) => {
            setDescuento(e.target.value);
          }}
        />

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Descripción"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <Button
          onClick={dataDoc}
          variant="contained"
          color="success"
          size="large"
        >
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
            size="large"
          >
            Eliminar
          </Button>
        )}

        <Button href="/" variant="outlined" size="large">
          Salir
        </Button>
        <div
  style={{
    width: "100%",
    background: "#f8f9fa",
    borderRadius: "15px",
    padding: "15px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #e0e0e0",
  }}
>
  <h3
    style={{
      margin: 0,
      color: "#333",
      fontSize: "18px",
    }}
  >
    Resumen
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <strong>Producto:</strong>
    <span>{title || "Sin nombre"}</span>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <strong>Precio:</strong>
    <span>
      {precio ? `R$ ${precio}` : "R$ 0"}
    </span>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <strong>Descuento:</strong>
    <span>
      {descuento && precio ? `${descuento/precio*100}%` : "0%"}
    </span>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <strong>Precio Final:</strong>

    <span
      style={{
        color: "green",
        fontWeight: "bold",
      }}
    >
      R${" "}
      {precio
        ? (
            Number(precio) -
            (Number(precio) * Number(descuento || 0)) / 100
          ).toFixed(2)
        : "0.00"}
    </span>
  </div>
</div>
      </Paper>
    </Box>
  );
}
