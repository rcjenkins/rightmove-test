import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = ({options, onChange, label, ddType}) => {
    return (
        <div className="Dropdown">
            <label>
                {label}
                <select onChange={(e) => onChange(e.target.value, ddType)}>
                <option value="">Please Select</option>
                    {
                        options.map((option) => {
                            return <option key={option} value={option}>{option}</option>
                        })
                    }
                </select>
            </label>
        </div>
    );
};


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ])),
    onChange: PropTypes.func, // (selectedOption) => {}
    label: PropTypes.string
};

export default Dropdown;
