export default function FirtCurt(p1,p2) {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            justifyContent: "center",
            gap:"10px",
            width: "150px"   ,
            height: "150px"   ,
            borderRadius:" 10px",
            border: "1px solid #180f0f"  }}>
            <div>{p1}</div>
            <div>{p2}</div>
        </div>
    )
}