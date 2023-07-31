// Styles
import './List.css'

// Components
import { ItemColumn } from './components/ItemColumn'
import { UserTable } from './components/UserTable';
import { Columns } from './components/Columns';
import { AddRow } from './components/AddRow';

// hooks
import { ListHook } from './hooks/ListHook';


export const ListPage = () => {
  const { columns, setColumns, data, handleAddTodo, handleDeleteTodo, handleEditTodo, columnsInitialState, columnsBeforeToEdit } = ListHook();

  return (
    <div className='container'>
      <div className='title'>Materias Asignadas</div>

      <div className='column3'>
        <ItemColumn item={{ title: '# Materias', value: '5' }} />
        <ItemColumn item={{ title: 'Restantes', value: '3' }} />
        <ItemColumn item={{ title: 'Materias de profesores total', value: '2' }} />
        <ItemColumn item={{ title: 'Prácticas total', value: '3' }} />
        <ItemColumn item={{ title: 'Restantes asignadas', value: '3' }} />
        <ItemColumn item={{ title: 'Observaciones total', value: '3' }} />
      </div>

      <AddRow onAddTodo={handleAddTodo} />

      <Columns columns={columns} setColumns={setColumns} />

      {
        data.length > 0
          ? <UserTable data={data} columns={columns} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} columnsInitialState={columnsInitialState} columnsBeforeToEdit={columnsBeforeToEdit} />
          : ''
      }

    </div>
  )
}
