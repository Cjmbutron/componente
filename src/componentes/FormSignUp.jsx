import { useState, useEffect } from 'react';
import {Button, TextField, Container, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSignUp({ handleSubmit }){

    const [name, setName]=useState('')
    const [lastName, setLastname]=useState('')
    const [email, setEmail]=useState('')
    const [prom, setProm]=useState(true)
    const [nov, setNov]=useState(false)

    const [errors, setErrors] = useState({
        name:{
            error:false,
            message: "Deben ser almenos 3 letras",
        },
        
    })
    const [lastNameError, setlastNameError] = useState({
        lastName:{
            error:false,
            message: "Deben ser almenos 3 letras",
        },    
    })
    const [errorMail , setErrorMail] = useState({
        email:{
            error:false,
            message: "Deben ser almenos 3 letras",
        }, 
    })

    function validarApellido(props)
    {
        console.log(props)
        if(props.length >=3){
            return{ lastName:{error: false, message:""}}
        }else{
        return {lastName:{ error:true,  message: "Deben ser almenos 3 letras" }}

        }

    }

    function validarNombre(props){
        if(props.length >=3){
            return{ name:{error: false, message:""}}
        } else{
        return {name:{ error:true, message: "deben ser almenos 3 letras" }}
        }
    }

    function validarCorreo(correo){
        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const esValido = expReg.test(correo)
        if(esValido){
            return{email:{error: false, message:""}}
        } else{
            console.log(esValido)
        return{ email:{ error:true, message: "Ingrese un correo Valido" }}
        }
    }
    useEffect(()=>{
    }, [name])
    return (
    <form margin={"20px"}
        onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit({name, lastName, email, prom, nov})
        }} 
    >
        <TextField 
            id="name" 
            label="Nombre " 
            margin="normal" 
            variant="outlined" 
            fullWidth={true}
            onChange={(e)=>{
                setName(e.target.value)
            }} 
            value={name}   
            error= {errors.name.error }
            helperText={errors.name.error ? errors.name.message : " " }
            onBlur={(e)=>{
                setErrors(validarNombre(e.target.value))
            }}
        />
        <TextField 
            id="lastName" 
            label="Apellidos" 
            variant="outlined" 
            margin="normal" 
            fullWidth={true}
            onChange={(e)=>{
                setLastname(e.target.value)
            }} 
            value={lastName} 
            error={lastNameError.lastName.error}
            helperText={lastNameError.lastName.error ? lastNameError.lastName.message : " " }

            onBlur={(e)=>{
                setlastNameError(validarApellido(e.target.value))
            }}

            
        />

        <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            margin="normal" 
            fullWidth={true}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} 
            error={errorMail.email.error}
            helperText={errorMail.email.error ? errorMail.email.message : ""}
            onBlur={(e)=>{
                setErrorMail( validarCorreo(e.target.value))
            }}
            value={email} 
         />

    <FormGroup>
      <FormControlLabel 
            control={<Switch checked={prom}/>} 
            label="Promociones" 
            onChange={(e)=>{
                setProm(e.target.checked)
            }} 
              />
      <FormControlLabel 
            control={<Switch checked={nov}/>} 
            label="Novedades" 
            onChange={(e)=>{
                setNov(e.target.checked)
            }} />
    </FormGroup>
        
        <Button variant='contained' type='submit'>Registrarse</Button>

       
        </form>

    )
    
}

export default FormSignUp