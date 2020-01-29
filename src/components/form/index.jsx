import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ onAdd }) => {

    const [data, setData] = React.useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        sintomas: '',
    })
    const [error, setError] = React.useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.values(data).every(value => !Boolean(value))) {
            setError(true);
            return;
        }
        setError(false);
        data.id = uuid();
        onAdd(data);
        setData({
            pet: '',
            owner: '',
            date: '',
            time: '',
            sintomas: '',
        })
    }

    const { pet, owner, date, time, sintomas } = data;

    return (
        <React.Fragment>
            <h2>Crear Cita</h2>
            <div hidden={!Boolean(error)} className="container">
                <p className="alerta-error">{`ERROR: Hay campos sin diligenciar`}</p>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre de Dueño"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary">
                        Agregar cita
                </button>
            </form>
        </React.Fragment>
    );
}

Form.propType = {
    onAdd: PropTypes.func.isRequired,
}

export default Form;
