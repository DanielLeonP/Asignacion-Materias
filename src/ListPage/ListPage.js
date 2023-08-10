import { useLocation } from 'react-router-dom'
import { useState } from 'react'

// Styles
import './List.css'

// Components
import { ItemColumn } from './components/ItemColumn'
import { UserTable } from './components/UserTable';
import { Columns } from './components/Columns';
import { AddRow } from './components/AddRow';
import { CreateExcel } from './components/CreateExcel';
import { FloatingNotification } from '../FormPage/components/FloatingNotification'

// hooks
import { ListHook } from './hooks/ListHook';

export const ListPage = () => {
  const [notificacion, setNotificacion] = useState(false);
  const [estado, setEstado] = useState(false);
  const location = useLocation();
  const materiasTotales = location.state?.materias || 0;

  const { notificado, columns, setColumns, data, data2, data3, handleAddTodo, handleDeleteTodo, handleEditTodo, handleDeleteTodo2, handleAddTodo2, handleEditTodo2, handleDeleteTodo3, handleAddTodo3, handleEditTodo3, columnsInitialState, columnsBeforeToEdit, info } = ListHook(materiasTotales);

  const handleNotificacionChange = (activacion) => {
    setNotificacion(activacion)
  }

  const handleEstadoChange = (state) => {
    setEstado(state)
  }

  

  return (
    <>
      <FloatingNotification customTitle="Exportar y Salir" customText="¿Deseas exportar tus datos y salir?" customButtons={true} notificacion={notificacion} changeNotificacion={handleNotificacionChange} changeEstado={handleEstadoChange} />

      <FloatingNotification customTitle="Materias no Coincidentes" customText="El número de materias restantes sobrepasa el número de materias" customButtons={false} notificacion={notificado} changeNotificacion={handleNotificacionChange} />

      <div className='container'>
        <div className='title'>Materias Asignadas</div>

        <div className='column3'>
          <ItemColumn item={{ title: '# Materias', value: info.materias }} />
          <ItemColumn item={{ title: 'Materias Restantes', value: info.mRestantes }} />
          <ItemColumn item={{ title: 'Materias asignadas total', value: info.mAsignadas }} />
          <ItemColumn item={{ title: 'Prácticas total', value: info.practicas }} />
          <ItemColumn item={{ title: 'Observaciones total', value: info.observaciones }} />
        </div>

        <AddRow handleAddTodo={handleAddTodo} handleAddTodo2={handleAddTodo2} handleAddTodo3={handleAddTodo3} />

        <Columns columns={columns} setColumns={setColumns} />

        <div className="tablas">
        {
          data.length > 0 // Mostrar tabla de profesores de tiempo completo si tiene datos
            ? <><label className="titleTabla">Tiempos Completos</label><UserTable color='blue' colorTitle={'blue'} data={data} columns={columns} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
            : ''
        }
        {
          data2.length > 0 // Mostrar tabla de profesores de tiempo libre si tiene datos
            ? <><label className="titleTabla">Tiempos Libres</label><UserTable color='red' colorTitle={'red'} data={data2} columns={columns} onDeleteTodo={handleDeleteTodo2} onEditTodo={handleEditTodo2} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
            : ''
        }
        {
          data3.length > 0 // Mostrar tabla de profesores por honorarios si tiene datos
            ? <><label className="titleTabla">Honorarios</label><UserTable color='green' colorTitle={'green'} data={data3} columns={columns} onDeleteTodo={handleDeleteTodo3} onEditTodo={handleEditTodo3} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
            : ''
        }
        </div>

        <CreateExcel excelData={[data, data2, data3]} fileName={'Materias-Asignadas'} estado={estado} changeEstado={handleEstadoChange} changeNotificacion={handleNotificacionChange} />

      </div>
    </>
  )
}
