import Mercado from "./Merrcado";
import { useEffect, useState } from "react";
import { query, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase";
export default function Padre() {
    useEffect(()=>{
    async function fetchData() {
        const q=query(collection(db, "itens"))
        const qSnap= await getDocs(q)
        qSnap.docs.forEach((doc) => {console.log(doc.data())})
        //console.log(qSnap.docs[1].data())
    }
    fetchData()
}, [])
    return (
        <div style={{
            backgroundColor: "#b1a6a6",
            width: "100%",
            objectFit: "cover",
            height: "100vh",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }}>
            <Mercado info={{
        nome: "Prueba",
        preciOriginal: 10.00,
        precio: 6.00,
        descripcion: "descripcion",
        imagen: "https://picsum.photos/200?1",

    }}/>
        </div>

    )
}