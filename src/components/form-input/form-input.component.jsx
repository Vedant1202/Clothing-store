/** @format */

import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherComponentProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherComponentProps} />
            {label ? (
                <label className={`${otherComponentProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            ) : null}
        </div>
    );
};

export default FormInput;
