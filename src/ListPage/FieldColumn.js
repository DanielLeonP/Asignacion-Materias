import React from 'react'

export const FieldColumn = ({ field }) => {
    return (
        <div type='fieldColumn'>
            <input type='checkbox' checked={field.checked}/>
            <label>{field.label}</label>
        </div>
    )
}
