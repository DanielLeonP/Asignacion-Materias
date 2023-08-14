// Configuracion
const NOMBRE_DB = "users"; // Nombre de la base de datos
const VERSION_DB = 1; // Version de la base de datosse incrementa en openDB
const OBJETO_DB = "users"; // Nombre del objeto almacenado que contiene a los usuarios
const initialUser = {
    username: "Alex Vargas",
    email: "lex.vargas@hotmail.com",
    password: "Alex_1234",
};

// Abrir base de datos
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(NOMBRE_DB, VERSION_DB);

        // En caso de que la base de datos necesite una version posterior
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(OBJETO_DB)) {
                db.createObjectStore(OBJETO_DB, { keyPath: "id", autoIncrement: true });
            }
        };

        // En caso de que se abra correctamente
        request.onsuccess = () => {
            resolve(request.result);
        }

        // En caso de que no se abra correctamente
        request.onerror = () => {
            reject(request.error);
        };
    });
};

const getAllUsers = async () => {
    const db = await openDB();
    const transaccion = db.transaction(OBJETO_DB, "readwrite");
    const store = transaccion.objectStore(OBJETO_DB);
    const cursor = store.openCursor();
    const usuarios = [];
    const getUserRequest = store.get(1);

    getUserRequest.onsuccess = () => {
        const master = getUserRequest.result;
        if (!master) {
            store.add(initialUser);
        }
    };

    cursor.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            usuarios.push(cursor.value);
            cursor.continue();
        }
    };

    return new Promise((resolve) => {
        transaccion.oncomplete = () => {
            resolve(usuarios);
            db.close(); // Cerrar la conexión después de completar la transacción
        };
    });
};

const findUser = (array, username, password) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].password === password && array[i].username === username) {
            return array[i]; // Se encontró el dato
        }
    }
    return null; // No se encontró el dato
}

const getUsersByName = async (name) => {
    const db = await openDB();
    const transaccion = db.transaction(OBJETO_DB, "readonly");
    const store = transaccion.objectStore(OBJETO_DB);
    const cursor = store.openCursor();
    const usuarioBuscado = [];

    cursor.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            if (cursor.value.username.toLowerCase().includes(name.toLowerCase())) {
                usuarioBuscado.push(cursor.value);
            }
            cursor.continue();
        }
    };

    return new Promise((resolve) => {
        transaccion.oncomplete = () => {
            resolve(usuarioBuscado);
            db.close(); // Cerrar la conexión después de completar la transacción
        };
    });
};

const addUser = async (user) => {
    const db = await openDB();
    const transaccion = db.transaction(OBJETO_DB, "readwrite");
    const store = transaccion.objectStore(OBJETO_DB);
    store.add(user);

    transaccion.oncomplete = () => {
        db.close(); // Cerrar la conexión después de completar la transacción
    };
};

const updateUser = async (user) => {
    const db = await openDB();
    const transaccion = db.transaction(OBJETO_DB, "readwrite");
    const store = transaccion.objectStore(OBJETO_DB);
    store.put(user);

    transaccion.oncomplete = () => {
        db.close(); // Cerrar la conexión después de completar la transacción
    };
};

const deleteUser = async (userId) => {
    const db = await openDB();
    const transaccion = db.transaction(OBJETO_DB, "readwrite");
    const store = transaccion.objectStore(OBJETO_DB);
    if (userId !== 1) {
        store.delete(userId);
    }

    transaccion.oncomplete = () => {
        db.close(); // Cerrar la conexión después de completar la transacción
    };
};

export { getAllUsers, getUsersByName, addUser, updateUser, deleteUser, findUser };
