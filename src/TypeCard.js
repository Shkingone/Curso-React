import{Box, Typography} from "@mui/material"
import { red } from "@mui/material/colors"


export default function TypeCard(props) {

let color= "red"

switch (props.text.toLowerCase()) {
    case "planta":
        color = "green"
        break

     case "fogo":
        color = "orange"

           
}

    return (
    <Box sx={{
        borde: 1,
        width: 80,
        height: 30,
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: color,

    }}><Typography sx={{
        fontSize: 20,
        color: "withe"

    }}>{props.text}</Typography></Box>

)


 }

