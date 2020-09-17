import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import './styles.css';

type Props = {
    link: string;
    linkText: string;
}

const Filters = ({link, linkText}:Props) => {
    return (
        <div className="filters-container records-actions">
            <Link to={link}>
                <strong>
                    {linkText}
                </strong>
                <span>
                    <Arrow />
                </span>
            </Link>
        </div>
    );
};

export default Filters