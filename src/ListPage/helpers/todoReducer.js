import { includeClave } from "./includeClave";

const orderByName = (data) => {
    return data.sort((a, b) => {
        return a[2].localeCompare(b[2])
    });
}

export const todoReducer = (initialState, action) => {
    console.log(action)
    switch (action.type) {
        case '[DATA] Add Row':
            if (includeClave(initialState, action.payload[1])) {
                window.alert('La clave del Profesor ya existe, no se pudo insertar el profesor a la tabla');
                return initialState;
            }
            return orderByName([...initialState, action.payload]);

        case '[DATA] Delete Row':
            return initialState.filter(data => data[1] !== action.payload);
        case '[DATA] Edit Row':
            return orderByName(initialState.map((data, index) => {
                if (index === action.payload.index) {
                    return action.payload.newRow;
                }
                return data;
            }));
        default:
            return initialState;
    }
}