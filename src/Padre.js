import Mercado from "./Merrcado";
import { useEffect, useState } from "react";

import { query, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase";
export default function Padre() {

    const [itens, setItens] = useState([])
   
    useEffect(()=>{
    async function fetchData() {
        const q=query(collection(db, "itens"))
        const qSnap= await getDocs(q)
        qSnap.docs.forEach((doc) => {console.log(doc.data())})
        let ListTemporal =[];
        qSnap.docs.map((doc) => ListTemporal.push(doc.data()))
        console.log("ListTemporal", ListTemporal)
        setItens(ListTemporal)
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
           {itens.map((item) => (
                <Mercado key={item.id} info={item} />
            ))}


        </div>

    )
}