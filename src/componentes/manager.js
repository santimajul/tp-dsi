import { useEffect, useState } from 'react'
import '../estilos/manager.css'

export default function Manager(){

    let [orden,setOrden] = useState(false);
    let [estado,setEstado] = useState(''); 
    let [model,setModel] = useState('');
    let [color,setColor] = useState('');
    let [lineCounter,setLineCounter] = useState(0);
    
    const handleModel = (e)=>{
        setModel(e.target.value)
    }

    const handleColor = (e)=>{
        setColor(e.target.value)
    }

    const handleStart = (e)=>{
        e.preventDefault();
        setLineCounter(lineCounter += 1)
        setOrden(true);       
    }

    const handleEnd = ()=>{
        setOrden(false);
    }

    useEffect(()=>{

        if(orden){
            setEstado('Inicializada');
            document.querySelector('.check').style.color = 'rgb(68, 255, 0)';
            document.querySelector('.gestion').style.pointerEvents = 'none';
        }else{
            setEstado('Finalizada');
            setModel('');
            setColor('');
            document.querySelector('.check').style.color = 'red';
            document.querySelector('.gestion').style.pointerEvents = 'auto';
        }

        orden ? setEstado('Inicializada') : setEstado('Finalizada');

    },[orden])
    return(
        <div className="container-fluid managment-container">
            <div className="row">
                <div className="gestion col-6 d-flex justify-content-center align-items-center">
                    <form onSubmit={handleStart} className='container-fluid flex-column d-flex justify-content-center align-items-center'>
                        <div className='row  d-flex justify-content-center align-items-center h-25'>
                            <h2>Gestion de orden</h2>
                        </div>
                        <div className='row  d-flex justify-content-center align-items-center h-25'>
                            <label htmlFor='color-managment'>Gestionar color: </label>
                            <select id='color-managment' onChange={handleColor} required>   
                                <option value="" selected disabled hidden>Elija color...</option>      
                                <option value='rojo'>rojo</option>
                                <option value='amarillo'>amarillo</option>
                                <option value='azul'>azul</option>
                                <option value='negro'>negro</option>
                            </select>
                        </div>
                        <div className='row  d-flex justify-content-center align-items-center h-25'>
                            <label htmlFor='model-managment' className='ms-5'>Gestionar modelo: </label>
                            <input  id='model-managment' placeholder='Elija modelo...' className='w-75' type='text'  onChange={handleModel} required/>
                        </div>
                        <div className='row  d-flex justify-content-center align-items-center h-25 '>
                            <input type='submit' value='Iniciar' />
                        </div>
                    </form>
                </div>
                <div className="orden col-6 d-flex justify-content-center align-items-center">
                    <div className='orden-ticket d-flex flex-column '>
                        <div className='row h-25'>
                            <h4 className='col-9 p-5'>Orden: {estado}</h4>
                            <div className=' col-3 d-flex justify-content-center align-items-center pe-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-circle-fill check" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                </svg>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start align-items-center h-50'>
                            <ul>
                                <li>Modelo: {model}</li>
                                <li>Color: {color}</li>
                                <li>Linea: {lineCounter !== 0 ? lineCounter : ''}</li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-center align-items-center h-25'>
                            <button  onClick={handleEnd}>Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}