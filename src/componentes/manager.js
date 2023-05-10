import { useEffect, useState } from 'react';
import '../estilos/manager.css';

let ordenInicial = {
    linea: null,
    modelo: '',
    color: ''
};

export default function Manager(){

    let [inicio,setinicio] = useState(false);
    let [estado,setEstado] = useState(''); 
    let [model,setModel] = useState('');
    let [color,setColor] = useState('');
    let [line,setLine] = useState(0);
    let [orden,setOrden] = useState(ordenInicial);
    let [ordenes,setOrdenes] = useState([])

    let colores = ['rojo','amarillo','azul','negro','blanco'];
    let modelos = ['superstar','air-max','jordan-one','converse','KD-7'];
    let lineas = [1,2,3,4,5,6];
    
    
    
    const handleModel = (e)=>{
        setModel(e.target.value);
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        });
    }

    const handleColor = (e)=>{
        setColor(e.target.value);
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        });
    }

    const handleLine = (e)=>{
        setLine(e.target.value);
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        });
    }

    const handleStart = (e)=>{
        e.preventDefault();
        setOrdenes([...ordenes,orden])
        setinicio(true);       
    }

    const handleEnd = (e)=>{
        console.log(ordenes)
        setinicio(false);
    }

    useEffect(()=>{

        if(inicio){
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

        inicio ? setEstado('Inicializada') : setEstado('Finalizada');

    },[inicio])
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
                            <select id='color-managment' name='color' onChange={handleColor} required> 
                                <option defaultValue="" selected disabled hidden>Elija color...</option>  
                                {colores.map( col => <option key={col} value={col}>{col}</option>)}
                            </select>
                        </div>
                        <div className='row  d-flex justify-content-center align-items-center h-25'>
                            <label htmlFor='model-managment' className='ms-5'>Gestionar modelo: </label>
                            <select id='model-managment' name='modelo' onChange={handleModel} required> 
                                <option defaultValue="" selected disabled hidden>Elija modelo...</option>  
                                {modelos.map( mod => <option key={mod} value={mod}>{mod}</option>)}
                            </select>
                        </div>
                        <div className='row  d-flex justify-content-center align-items-center h-25'>
                            <label htmlFor='line-managment' className='ms-5'>Gestionar linea: </label>
                            <select id='line-managment' name='linea' onChange={handleLine} required> 
                                <option defaultValue="" selected disabled hidden>Elija linea de trabajo...</option>  
                                {lineas.map( line => <option  key={line} value={line}>{line}</option>)}
                            </select>
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
                                <li>Linea: {inicio !== false ? line : ''}</li>
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

      
