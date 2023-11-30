import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { resetAlert } from '../../slice/alert.slice';


function Alert(props) {

    
    const alert = useSelector((state) => state.alert)
    console.log(alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(()=>{
        if(alert.text !== ''){
            enqueueSnackbar(alert.text, { variant: alert.color })

            setTimeout(()=>{
                resetAlert(alert.text)
            }, 2000)

            
        }   
    },[alert.text]) 
    return (
        <div>
            
        </div>
    );
}

export default Alert;