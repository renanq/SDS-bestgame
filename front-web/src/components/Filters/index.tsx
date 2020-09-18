import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiList, FiPieChart } from 'react-icons/fi';
import './styles.css';

type Props = {
    link: string;
    linkText: string;
    filterDate: Function;
}

const Filters = ({link, linkText, filterDate}:Props) => {

    const [rangeDate, setRangeDate] = useState({
        startDate: '',
        endDate: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRangeDate({ ...rangeDate, [name]: value });
    };

    return (
        <div className="filters-container">
            <div className="form-items">
                <div className="input-block">
                    <label htmlFor="startDate">Data inicial:</label>
                    <input 
                        type="text" 
                        name="startDate"
                        id="startDate" 
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="endDate">Data final:</label>
                    <input 
                        type="text" 
                        name="endDate"
                        id="endDate" 
                        onChange={handleInputChange}
                    />
                </div>

                <button onClick={() => filterDate(rangeDate.startDate, rangeDate.endDate)}>
                    <span>
                        <FiFilter />
                    </span>
                </button>
            </div>

            <div className="records-actions">
                <Link to={link}>
                    <strong>
                        {linkText}
                    </strong>
                    <span>
                        { link === "/charts" ? <FiPieChart /> : <FiList /> }
                    </span>
                </Link>
            </div>            
        </div>
    );
};

export default Filters