import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { collection, addDoc, onSnapshot, query, orderBy, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
export default function Config() {

    const [title, setTitle] = useState("");
    const [precio, setPrecio] = useState("");
    const [descuento, setDescuento] = useState("");
    const [desc, setDesc] = useState("");
    const { id } = useParams();

   
   
       const fetchDoc = async () => {
       const docSnap = await getDoc(doc(db, "itens", id));
        console.log(docSnap.data());}
         useEffect(()=>{
            fetchDoc()
}, [])

    return (
        <div style={{width: "100vw", height: "100vh", }}>
        <div style={{
             
            gap: "10px",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "10px",
            alignItems: "center",
            height: "400px",
            width: "250px",
            display: "flex", flexDirection: "column", gap: "3px", borderRadius: "10px"
        }}>
             <Button variant="contained" href="/">Atrás</Button>

            <TextField
                label="Nombre"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}

            />

            <TextField
                label="Precio original"
                value={precio}
                onChange={(e) => { setPrecio(e.target.value) }}

            />
            <TextField
                label="Descuento"
                value={descuento}
                onChange={(e) => { setDescuento(e.target.value) }}

            />
            <TextField
                label="Descripción"
                value={desc}
                onChange={(e) => { setDesc(e.target.value) }}

            />


            <Button variant="contained">Agregar</Button>


        </div></div>
    )
}