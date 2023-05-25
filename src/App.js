import ClassComponent from "./componentes/ClassComponents";
import FunComponent from "./componentes/FunConponent";
import FormSignUp from "./componentes/FormSignUp";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography'


function App() {
  const handleSubmit = (valores)=>{
    console.log("APPJS", valores)
  }
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1" >Formulario de Registro</Typography>
     <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  )
}

export default App;
