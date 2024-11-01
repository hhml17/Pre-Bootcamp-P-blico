import React, { useState } from 'react';

function FormStudent() {
    const [registro, setRegistro] = useState([]);
    const [currentPerson, setCurrentPerson] = useState({
        firstName: '',
        lastName: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCurrentPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistro([...registro, currentPerson]);
        // Reiniciar el formulario o realizar otras acciones si es necesario
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>formulario de registro</h1>
            <label htmlFor="firstName">first name</label>
            <input
                name="firstName"
                id="firstName"
                value={currentPerson.firstName}
                onChange={handleOnChange}
            />
            <label htmlFor="lastName">last name</label>
            <input
                name="lastName"
                id="lastName"
                value={currentPerson.lastName}
                onChange={handleOnChange}
            />
            <select>
                <option value="25">25</option>
            </select>
            <button>agregar persona</button>
        </form>
    );
}

export default FormStudent;
