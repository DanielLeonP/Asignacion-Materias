// Styles
import './List.css'

// Components
import { ItemColumn } from './components/ItemColumn'
import { UserTable } from './components/UserTable';
import { Columns } from './components/Columns';
import { AddRow } from './components/AddRow';
import { CreateExcel } from './components/CreateExcel';
import { FloatingNotification } from '../components/FloatingNotification'

// hooks
import { ListHook } from './hooks/ListHook';
import { LogoutButton } from '../components/LogoutButton';

export const ListPage = () => {

  const { 
    notificado,
    columns, setColumns,

    data,
    data2,
    data3, 
    
    handleDeleteTodo, handleAddTodo, handleEditTodo,
    handleDeleteTodo2, handleAddTodo2, handleEditTodo2,
    handleDeleteTodo3, handleAddTodo3, handleEditTodo3,

    columnsInitialState, columnsBeforeToEdit, info,

    estado,
    notificacion,
    handleNotificacionChange, handleEstadoChange,

    estado2,
    notificacion2,
    handleNotificacionChange2, handleEstadoChange2,

    estado3,
    notificacion3,
    handleNotificacionChange3, handleEstadoChange3,

    estado4,
    notificacion4,
    handleNotificacionChange4, handleEstadoChange4,

    notificacion5,
    handleNotificacionChange5
  } = ListHook();

  return (
    <>
      <LogoutButton />

      <FloatingNotification customTitle="Clave de Profesor Repetida" customText="La clave del profesor que deseas ingresar, ya existe, no se pudo insertar en la tabla." customButtons={false} notificacion={notificacion5} changeNotificacion={handleNotificacionChange5} />

      <FloatingNotification customTitle="Cancelar Cambios" customText="¿Deseas desechar los cambios realizados a este profesor?" customButtons={true} notificacion={notificacion4} changeNotificacion={handleNotificacionChange4} changeEstado={handleEstadoChange4} />

      <FloatingNotification customTitle="Guardar Cambios" customText="¿Deseas guardar los cambios realizados a este profesor?" customButtons={true} notificacion={notificacion3} changeNotificacion={handleNotificacionChange3} changeEstado={handleEstadoChange3} />
      
      <FloatingNotification customTitle="Eliminar Maestro" customText="¿Deseas eliminar a este profesor y todos sus datos de la tabla?" customButtons={true} notificacion={notificacion2} changeNotificacion={handleNotificacionChange2} changeEstado={handleEstadoChange2} />

      <FloatingNotification customTitle="Exportar y Salir" customText="¿Deseas exportar tus datos y salir?" customButtons={true} notificacion={notificacion} changeNotificacion={handleNotificacionChange} changeEstado={handleEstadoChange} />

      <FloatingNotification customTitle="Materias no Coincidentes" customText="El número de materias restantes sobrepasa el número de materias." customButtons={false} notificacion={notificado} changeNotificacion={handleNotificacionChange} />

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
              ? <><label className="titleTabla">Tiempos Completos</label><UserTable color='blue' colorTitle={'blue'} data={data} columns={columns} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} changeNotificacion2={handleNotificacionChange2} changeEstado2={handleEstadoChange2} estado2={estado2} changeNotificacion3={handleNotificacionChange3} changeEstado3={handleEstadoChange3} estado3={estado3} changeNotificacion4={handleNotificacionChange4} changeEstado4={handleEstadoChange4} estado4={estado4} /></>
              : ''
          }
          {
            data2.length > 0 // Mostrar tabla de profesores de tiempo libre si tiene datos
              ? <><label className="titleTabla">Tiempos Libres</label><UserTable color='red' colorTitle={'red'} data={data2} columns={columns} onDeleteTodo={handleDeleteTodo2} onEditTodo={handleEditTodo2} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} changeNotificacion2={handleNotificacionChange2} changeEstado2={handleEstadoChange2} estado2={estado2} changeNotificacion3={handleNotificacionChange3} changeEstado3={handleEstadoChange3} estado3={estado3} changeNotificacion4={handleNotificacionChange4} changeEstado4={handleEstadoChange4} estado4={estado4} /></>
              : ''
          }
          {
            data3.length > 0 // Mostrar tabla de profesores por honorarios si tiene datos
              ? <><label className="titleTabla">Honorarios</label><UserTable color='green' colorTitle={'green'} data={data3} columns={columns} onDeleteTodo={handleDeleteTodo3} onEditTodo={handleEditTodo3} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} changeNotificacion2={handleNotificacionChange2} changeEstado2={handleEstadoChange2} estado2={estado2} changeNotificacion3={handleNotificacionChange3} changeEstado3={handleEstadoChange3} estado3={estado3} changeNotificacion4={handleNotificacionChange4} changeEstado4={handleEstadoChange4} estado4={estado4} /></>
              : ''
          }
        </div>

        <CreateExcel excelData={[data, data2, data3]} fileName={'Materias-Asignadas'} estado={estado} changeEstado={handleEstadoChange} changeNotificacion={handleNotificacionChange} />

      </div>
    </>
  )
}
