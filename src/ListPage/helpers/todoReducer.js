import { includeClave } from "./includeClave";

const orderByName = (data) => {
    return data.sort((a, b) => {
        return a[2].localeCompare(b[2])
    });
}

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[DATA] Add Row':
            if (includeClave(initialState, action.payload[1])) {
                sessionStorage.setItem("d", true);
                return [...initialState, action.payload]
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