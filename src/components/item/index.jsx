import React from 'react';
import PropTypes from 'prop-types';

const Item = ({data, onDelete}) => (
    <div className="cita">
        <p>Mascota: <span>{data.pet}</span></p>
        <p>Dueno: <span>{data.owner}</span></p>
        <p>Fecha: <span>{data.date}</span></p>
        <p>Hora: <span>{data.time}</span></p>
        <p>Sintomas: <span>{data.sintomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={onDelete}
        >
            eliminar &times;
        </button>
    </div>
);

Item.propTypes = {
    data: PropTypes.shape({
        pet: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Item;
