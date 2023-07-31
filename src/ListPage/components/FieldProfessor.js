import React from 'react'

export const FieldProfessor = ({ field, name, userData, setUserData }) => {
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <div className='fieldProfessor'>
            <label>{field.label}:</label>
            <input className='inputRow' name={name} type={field.type} onChange={onInputChange} value={field.value}></input>
        </div>
    )
}
