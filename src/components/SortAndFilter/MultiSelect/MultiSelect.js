import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.scss';

const MultiSelect = ({options, onChange, label, msType}) => {

    const didMount = useRef(false);

    const [selectedOptions, setSelectedOptions] = useState({});

    useEffect(() => {
        if (didMount.current) {
            onChange(Object.keys(selectedOptions).filter((key) => selectedOptions[key] === true), msType);
        } else {
            didMount.current = true;
        }
    }, [selectedOptions, msType, onChange]);

    const handleOnChange = (e) => {
        setSelectedOptions({
            ...selectedOptions,
            [e.target.value]: e.target.checked
        });
    };

    return (
        <div className="MultiSelect">
            <div>{label}</div>
            {
                options.map((option) => {
                    return (
                        <label key={option}>
                            <input type="checkbox" value={option.toLowerCase()} onChange={handleOnChange}/>
                            {option}
                        </label>
                    )
                })
            }
        </div>
    );
};


MultiSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func, // (selectedOptions: []) => {}
    label: PropTypes.string
};

export default MultiSelect;
