import styled from "@emotion/styled";
import { columnGap, positions } from "@mui/system";
import { useEffect, useState } from "react";
import { query, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase";
import { Button } from "@mui/material";

export default function Mercado({info}) {

const [mouseHover, setMouseHover]= useState (false);
console.log(info)
        const [data, setData] = useState(info)
   


    return (
        <div style={{

            height: "400px",
            width: "250px",
            alignContent: "center",
            backgroundColor: "#ffffff",
            border: "1px solid black",
            borderRadius: "10px",
            boxshadow: "0 4px 10px rgba(0,0,0,0.15)"
        }}>
           <div style={{

                height: "50%",
                alignContent: "center",
                backgroundColor: " #fffffff"
            }}>
                <img style={{ width: "100%", objectFit: "cover", height: "100%", borderRadius: "10px" }} src={data.imagen} />


            </div>
            <div style={{
                height: "50%", border: "1px solid black", backgroundColor: "#d3cfcf", display: "flex", flexDirection: "column", gap: "3px", borderRadius: "10px"
            }}>
                <div style={{

                    color: "Black",
                    fontSize: "22px",
                    fontWeight: "bold",
                    paddingTop: "15px",
                }}>
                    {data["nome"]}
                </div>

                <div style={{


                    color: "black",
                    fontSize: "14px",
                    padding: "5px"
                }}>
                    {data.descripcion}
                </div>

                {data.precio != data.preciOriginal &&
                    <div style={{

                        color: "#3f3939",
                        fontSize: "25px",
                        textDecoration: "line-through",
                        padding: "8px"
                    }}>
                        R${data.preciOriginal?.toFixed(2)}


                    </div>}
                <div style={{

                    color: "green",
                    fontSize: "30px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    padding: "8px"
                }}>
                    <div> R${ data.precio?.toFixed(2)}</div>

                    {data.preciOriginal != data.precio &&
                        <div style={{
                            borderRadius: "10px",
                            color: "#ffffff",
                            fontSize: "25px",
                            backgroundColor: "#2d573b",
                            padding: "3px"
                        }}>
                            {(100 - (data.precio / data.preciOriginal) * 100) + "% off"}


                        </div>}
                </div>

            </div>
                       <Button variant="contained" href={"/config/"+ data.id}  style={{margin: "10px"}}>Config</Button>
                        <Button variant="contained" href="/config"  style={{margin: "10px"}}>Config</Button>
        </div>
    );

}