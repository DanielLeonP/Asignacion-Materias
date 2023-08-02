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
  const { columns, setColumns, data, handleAddTodo,
    handleDeleteTodo, handleEditTodo, columnsInitialState, columnsBeforeToEdit,
    info } = ListHook();

  return (
    <div className='container'>
      <div className='title'>Materias Asignadas</div>

      <div className='column3'>
        <ItemColumn item={{ title: '# Materias', value: info.materias }} />
        <ItemColumn item={{ title: 'Restantes', value: info.mRestantes }} />
        <ItemColumn item={{ title: 'Materias de profesores total', value: info.mProfesores }} />
        <ItemColumn item={{ title: 'Prácticas total', value: info.practicas }} />
        <ItemColumn item={{ title: 'Observaciones total', value: info.observaciones }} />
      </div>

      <AddRow onAddTodo={handleAddTodo} />

      <Columns columns={columns} setColumns={setColumns} />

      {
        data.length > 0
          ? <UserTable data={data} columns={columns} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} />
          : ''
      }

      <CreateExcel excelData={data} fileName={'Materias-Asignadas'} />

    </div>
  )
}
