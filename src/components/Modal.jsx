import { useEffect, useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

   const [nombre, setNombre] = useState('')
   const [cantidad, setCantidad] = useState('')
   const [categoria, setCategoria] = useState('')
   const [mensaje, setMensaje] = useState('')
   const [id, setId] = useState('')
   const [fecha, setFecha] = useState('')

   useEffect(() => {
      if(Object.keys(gastoEditar).length){
         setNombre(gastoEditar.nombre)
         setCantidad(gastoEditar.cantidad)
         setCategoria(gastoEditar.categoria)
         setId(gastoEditar.id)
         setFecha(gastoEditar.fecha)
      }
   }, [])


   const ocultarModal = () => {
      setAnimarModal(false)
      setGastoEditar({})
      setTimeout(() => {
         setModal(false)
      }, 500);
   }

   const handleSubmit = e => {
      e.preventDefault()

      if ([nombre, cantidad, categoria].includes('')) {
         setMensaje("Todos los campos son obligatorios")

         setTimeout(() => {
            setMensaje('')
         }, 3000)
         return
      }
      guardarGasto({ nombre, cantidad, categoria, id, fecha })
   }

   return (
      <div className='modal'>
         <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
         </div>
         <form
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto': 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
               <label htmlFor="nombre">Nombre gasto</label>
               <input
                  type="text"
                  id="nombre"
                  placeholder="Añade nombre del gasto"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
               />
            </div>
            <div className='campo'>
               <label htmlFor="cantidad">Cantidad</label>
               <input
                  type="text"
                  id="cantidad"
                  placeholder="Añade cantidad del gasto: ej. 300"
                  value={cantidad}
                  onChange={e => setCantidad(Number(e.target.value))}
               />
            </div>
            <div className='campo'>
               <label htmlFor="categoria" >Nombre gasto</label>
               <select
                  id="cateogria"
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
               >
                  <option value="">-- Seleccione --</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                  <option value="suscripciones">Suscripciones</option>
                  <option value="otros">Otros</option>
               </select>
            </div>
            <input type="submit" value="añadir gasto" />
         </form>
      </div>
   )
}

export default Modal