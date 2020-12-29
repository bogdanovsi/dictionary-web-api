import React from 'react';

export default function DictView(props) {
    return (
        <div className="dict-list">
            {props.items.map((item, i) => {
                <div key={`${item.title}_${i}`}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>;
            })}
        </div>
    );
}