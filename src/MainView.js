/* import Mercado from "./CardProduct";

import { Button } from "@mui/material";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; */
import { useEffect, useState } from "react";
import CardTime from "./views/CardTime";
import FirtCurt from "./views/FirtCurt";
export default function MainView() {
  const [value, setValue] = useState([
    {
      id : 1,
name: "Brasil",
      emo: "BRA"
    },
    {id:2,
      name: "Argentina",
      emo: "ARG"
    },
    {
      id : 3,
name: "holanda",
      emo: "NED"
    },
    {id:4,
      name: "Portugal",
      emo: "POR"
    }
  ])
  return(
    <div style={{display:"flex", flexDirection:"row", backgroundColor: "#205933", border:"1px solid #180f0f",width: "500px", height: "200px" }}>
      <div style={{
      backgroundColor: "#b1aaa6",
      width: "150px",
      
      height: "100px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      dixplay: "flex",
      flexDirection: "column",
     
      justifyContent: "center",
      border: "1px solid #ea9414"
    }}>
    <CardTime  p2={value[0].emo} />
    <CardTime  p2={value[1].emo} />
       
</div><div style={{border: "1px solid #ea9414", bagroundColor: "#861e1e",width: "100%", height: "600px"}}>ss</div>
    </div>

  )

  /* const [itens, setItens] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "itens"));
      const qSnap = await getDocs(q);
      qSnap.docs.forEach((doc) => {
        console.log(doc.data());
      });
      let ListTemporal = [];
      qSnap.docs.map((doc) => ListTemporal.push({ id: doc.id, ...doc.data() }));
      
      console.log("ListTemporal", ListTemporal)
      setItens(ListTemporal);
    }
    fetchData();
  }, []);
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
    > <Button width="40px" variant="outlined" color="success" href={"/add/"}>
            Add
          </Button>
          <div className="container" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      {itens.map((item) => (
        <Mercado key={item.id} info={item} />
      ))} 
      </div>
     
    </div>
  ); */
}
