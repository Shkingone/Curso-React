import { Box, Typography } from "@mui/material";
import TypeCard from "./TypeCard";


function Tela() {

    let typeList = [
        "planta",
        "Fogo",
        "ferro"
    ]
    return (
        <Box sx={{
            width: '100vw',
            backgroundColor: "rgba(60, 255, 109, 1)",
            height: '100vh',

        }}>
            {/*corpo da tela*/}
            < Box sx={{
                width: '100vw',
                backgroundColor: "rgba(175, 40, 164, 1)",
                height: '100vh',
                display: 'flex',
                flexDirection: 'row'


            }
            }>

                {/*espaçamento da foto*/}

                < Box sx={{
                    width: '40%',
                    backgroundColor: "rgba(60, 242, 255, 0.49)",
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {/* foto*/}

                    < Box sx={{
                        width: '350px',
                        backgroundColor: "rgba(135, 60, 255, 0.49)",
                        height: '350px',
                        margin: '50px',
                        borderRadius: '20px'


                    }}>
                        <img width={"100%"} src={"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"}></img>
                    </Box >
                </Box >
                <Box sx={{
                    width: '60%',
                    backgroundColor: "rgba(179, 255, 1, 1)",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center'

                }}>
                    {/*informaçoes*/}

                    <Box sx={{
                        width: '90%',
                        backgroundColor: "rgba(255, 60, 60, 1)",
                        height: '20%',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: "wrap",

                    }}>
                        <Typography sx={{
                            fontSize: 50,
                            color: "whithe"
                        }}
                        >
                            Pikachu
                        </Typography>
                        
                    </Box>
                    <Box sx={{
                        width: '90%',
                        backgroundColor: "rgba(0, 110, 255, 1)",
                        height: '20%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: "wrap",
                    }}>
                        
                        {
                            typeList.map( (item) => {
                                return <TypeCard text={item}/>
                            })
                        }

                    </Box>
                    <Box sx={{
                        width: '90%',
                        backgroundColor: "rgba(55, 0, 255, 1)",
                        height: '20%',
                        display: 'flex',
                        flexDirection: 'column-reverse'
                    }}>

                        <Box sx={{
                            width: '100%',
                            backgroundColor: "rgba(229, 255, 0, 0.81)",
                            height: '30%',
                            display: 'flex',
                            flexDirection: 'column-reverse'
                        }}><Typography sx={{
                            fontSize: 20,
                            color: "withe"

                        }}>altura:0.4m</Typography>
                        </Box>

                        <Box sx={{
                            width: '100%',
                            backgroundColor: "rgba(255, 0, 0, 0.81)",
                            height: '30%',
                            display: 'flex',
                            flexDirection: 'column-reverse'
                        }}><Typography sx={{
                            fontSize: 20,
                            color: "withe"

                        }}>força:500</Typography>
                        </Box>

                        <Box sx={{
                            width: '100%',
                            backgroundColor: "rgba(255, 0, 170, 0.81)",
                            height: '30%',
                            display: 'flex',
                            flexDirection: 'column-reverse'
                        }}><Typography sx={{
                            fontSize: 20,
                            color: "withe"

                        }}>peso:6.0KG</Typography>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            backgroundColor: "rgba(98, 0, 255, 0.81)",
                            height: '30%',
                            display: 'flex',
                            flexDirection: 'column-reverse'
                        }}><Typography sx={{
                            fontSize: 20,
                            color: "withe"

                        }}>vida:2100</Typography>
                        </Box>

                    </Box>

                </Box>
            </Box >
        </Box>





    )
}

export default Tela;