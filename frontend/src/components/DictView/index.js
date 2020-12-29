import React from 'react';
import api from '../../api';
import './style.css';

const DictItem = ({ title, description }) => {
    const deleteItem = (ev) => {
        ev.preventDefault();

        api().delete(`/${title}`).then(console.log)
    }

    return (
        <div className="definition-row" key={`i_${title}`}>
            <span className="definition-row__cell" style={{ width: '160px' }}>{title}</span>
            <span className="definition-row__cell" style={{ flex: 1, margin: '0 10px' }}>{description}</span>
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

const DictView = ({ items = [] }) => (<div className="dict-list">
    <h2>Dictionary</h2>
    {items && items.map((item, i) => <DictItem title={item.title} description={item.description} />)}
</div>)

export default DictView;