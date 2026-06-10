import { useState } from "react";

import { Button } from "@mui/material";

export default function Mercado({ info }) {
  //const [mouseHover, setMouseHover]= useState (false);
  // console.log(info);
  const [data] = useState(info);

  // console.log("data", data);

  return (
    <div
      style={{
        width: "260px",
        maxWidth: "260px",
        minWidth: "260px",
        flexShrink: 0,
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          height: "80px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={data.imagen}
          alt={data.nome}
        />
      </div>

      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#222",
          }}
        >
          {data.nome}
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#666",
            minHeight: "40px",
          }}
        >
          {data.descripcion}
        </div>

        {data.descuento !== data.preciOriginal && (
          <div
            style={{
              fontSize: "18px",
              textDecoration: "line-through",
              color: "#888",
            }}
          >
            R$ {data.preciOriginal?.toFixed(2)}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              color: "green",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            R$ {data.descuento?.toFixed(2)}
          </div>

          {data.preciOriginal !== data.descuento && (
            <div
              style={{
                backgroundColor: "#2e7d32",
                color: "white",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {(100 - (data.descuento / data.preciOriginal) * 100).toFixed(0)}%
              OFF
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Button fullWidth variant="contained" href={"/config/" + data.id}>
            Config
          </Button>
        </div>
      </div>
    </div>
  );
}
