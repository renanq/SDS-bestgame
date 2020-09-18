import React, { MouseEvent, useEffect, useState } from 'react';
import { RecordsResponse, Direction } from './types';
import { formatDate, formatDateFilter } from '../../utils/formatDate';
import Pagination from '../../components/Pagination';
import api from '../../services/api';
import './styles.css';
import Filters from '../../components/Filters';
import { Link } from 'react-router-dom';
import { FaSortAmountDownAlt, FaSortAmountDown } from "react-icons/fa";

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePerPage] = useState(0);
    const [direction, setDirection] = useState<Direction>("DESC");
    const [orderBy, setOrderBy] = useState("moment");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const linesPerPage = 12;

    //chamando a api para recuperar as informações
    useEffect(() => {
        api.get(`records?min=${startDate}&max=${endDate}&linesPerPage=${linesPerPage}&page=${activePage}&orderBy=${orderBy}&direction=${direction}`)
            .then(response => {
                setRecordsResponse(response.data)
            });
    },[activePage, orderBy, direction, startDate, endDate]);

    const handlePageChange = (index: number) => {
        setActivePerPage(index);
    };

    const handleDateChange = (start: string, end: string) => {
        if (start !== ""){
           setStartDate(formatDateFilter(start)); 
        }
        if (end !== ""){
          setEndDate(formatDateFilter(end));  
        }
    };

    const handleChangeDirection = () => {
        if (direction === "DESC") {
            setDirection("ASC");
        } else {
            setDirection("DESC");
        }
    };

    const handleChangeOrder = (e: MouseEvent, field: string) => {
        e.preventDefault();

        if (orderBy === field){
            handleChangeDirection();
        } else {
            setOrderBy(field);
        }
    };

    return (
        <div className="page-container">
            <Filters link="/charts" linkText="VER GRÁFICO" filterDate={handleDateChange}/>
            <table className="records-table">
                <thead>
                    <tr>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "moment" ? 'active' : ''}`} 
                                onClick={e => handleChangeOrder(e, 'moment')}
                            >
                                {(direction === "DESC" && orderBy === "moment") ? <FaSortAmountDown /> : <span/>}
                                {(direction === "ASC" && orderBy === "moment") ? <FaSortAmountDownAlt /> : <span/>}
                                DATA
                            </Link>
                        </th>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "name" ? 'active' : ''}`}
                                onClick={e => handleChangeOrder(e, 'name')}
                            >
                                {(direction === "DESC" && orderBy === "name") ? <FaSortAmountDown /> : <span/>}
                                {(direction === "ASC" && orderBy === "name") ? <FaSortAmountDownAlt /> : <span/>}
                                NOME
                            </Link>
                        </th>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "age" ? 'active' : ''}`}
                                onClick={e => handleChangeOrder(e, 'age')}
                            >
                                {(direction === "DESC" && orderBy === "age") ? <FaSortAmountDown /> : <span/>}
                                {(direction === "ASC" && orderBy === "age") ? <FaSortAmountDownAlt /> : <span/>}
                                IDADE
                            </Link>
                        </th>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "gamePlatform" ? 'active' : ''}`}
                                onClick={e => handleChangeOrder(e, 'gamePlatform')}
                            >PLATAFORMA</Link>
                        </th>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "genreName" ? 'active' : ''}`}
                                onClick={e => handleChangeOrder(e, 'genreName')}
                            >GENERO</Link>
                        </th>
                        <th>
                            <Link 
                                to="/filter" 
                                className={`${orderBy === "gameTitle" ? 'active' : ''}`}
                                onClick={e => handleChangeOrder(e, 'gameTitle')}
                            >GAME</Link>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    { recordsResponse?.content.map(record => {
                        return (
                            <tr key={record.id}>
                                <td>
                                    {formatDate(record.moment)}
                                </td>
                                <td>
                                    {record.name}
                                </td>
                                <td>
                                    {record.age}
                                </td>
                                <td className="text-secondary">
                                    {record.gamePlatform}
                                </td>
                                <td>
                                    {record.genreName}
                                </td>
                                <td className="text-primary">
                                    {record.gameTitle}
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
            <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            />
        </div>
    );
};

export default Records;