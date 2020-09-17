import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecordsResponse } from './types';
import { formatDate } from '../../utils/formatDate';
import Pagination from '../../components/Pagination';
import api from '../../services/api';
import './styles.css';

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePerPage] = useState(0);
    const [linesPerPage, setLinesPerPage] = useState(12);

    //chamando a api para recuperar as informações
    useEffect(() => {
        api.get(`records?linesPerPage=${linesPerPage}&page=${activePage}`)
            .then(response => {
                setRecordsResponse(response.data)
            });
    },[activePage]);

    const handlePageChange = (index: number) => {
        setActivePerPage(index);
    }

    return (
        <div className="page-container">
            <div className="filters-container records-actions">
                <Link to="/charts">
                    <button className="action-filters">
                        Ver Gráfico
                    </button>
                </Link>
            </div>
            <table className="records-table">
                <thead>
                    <tr>
                        <th>
                            INSTANTE
                        </th>
                        <th>
                            NOME
                        </th>
                        <th>
                            IDADE
                        </th>
                        <th>
                            PLATAFORMA
                        </th>
                        <th>
                            GÊNERO
                        </th>
                        <th>
                            GAME
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