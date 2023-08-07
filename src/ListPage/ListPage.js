// Styles
import './List.css'

// Components
import { ItemColumn } from './components/ItemColumn'
import { UserTable } from './components/UserTable';
import { Columns } from './components/Columns';
import { AddRow } from './components/AddRow';

// hooks
import { ListHook } from './hooks/ListHook';

import { CreateExcel } from './components/CreateExcel';

export const ListPage = () => {
  const { columns, setColumns, data, data2, data3,
    handleAddTodo, handleDeleteTodo, handleEditTodo,
    handleDeleteTodo2, handleAddTodo2, handleEditTodo2,
    handleDeleteTodo3, handleAddTodo3, handleEditTodo3,

    columnsInitialState, columnsBeforeToEdit,
    info } = ListHook();

  return (
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

      {
        data.length > 0
          ? <><label className="titleTabla">Tiempos Completos</label><UserTable color='blue' colorTitle={'blue'} data={data} columns={columns} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
          : ''
      }
      {
        data2.length > 0
          ? <><label className="titleTabla">Tiempos Libres</label><UserTable color='red' colorTitle={'red'} data={data2} columns={columns} onDeleteTodo={handleDeleteTodo2} onEditTodo={handleEditTodo2} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
          : ''
      }
      {
        data3.length > 0
          ? <><label className="titleTabla">Honorarios</label><UserTable color='green' colorTitle={'green'} data={data3} columns={columns} onDeleteTodo={handleDeleteTodo3} onEditTodo={handleEditTodo3} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} /></>
          : ''
      }

      <CreateExcel excelData={data} fileName={'Materias-Asignadas'} />

    </div>
  )
}
