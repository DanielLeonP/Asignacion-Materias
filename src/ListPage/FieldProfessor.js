import React from 'react'

export const FieldProfessor = ({ field }) => {
    return (
        <div className='fieldProfessor'>
            <label>{field.label}:</label>
            <input className='inputRow' type={field.type}></input>
        </div>
    )
}
