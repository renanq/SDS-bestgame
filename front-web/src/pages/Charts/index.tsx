import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from '../../config/chart-options'
import { buildBarSeries, getPlatformChartData, getGenderChartData } from '../../utils/chartFunctions';
import api from '../../services/api';
import Filters from '../../components/Filters';
import './styles.css';

type PieChartData = {
    labels: string[];
    series: number[];
};

type BarChatData = {
    x: string;
    y: number;
};

//para iniciar os graficos de torta sem quebrar
const initialPieData = {
    labels: [],
    series: []
};

const Charts = () => {

    const [barChartData, setBarChartData] = useState<BarChatData[]>([]);
    const [platformChartData, setPlatformChartData] = useState<PieChartData>(initialPieData);
    const [genderChartData, setGenderChartData] = useState<PieChartData>(initialPieData);

    useEffect(() => {

        async function getData() {
            const recordsResponse = await api.get('records');
            const gamesResponse = await api.get('games');
            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
            setBarChartData(barData);
            const platformData = getPlatformChartData(recordsResponse.data.content);
            setPlatformChartData(platformData);
            const genreData = getGenderChartData(recordsResponse.data.content);
            setGenderChartData(genreData);
        };

        getData();

    }, []);

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER LISTA"/>
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart 
                            options={barOptions}
                            type="bar"
                            width="400"
                            height="400"
                            series={[{ data: barChartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">
                            Plataformas
                        </h2>
                        <Chart 
                            options={{ ...pieOptions, labels: platformChartData?.labels}} 
                            type="donut"
                            series={platformChartData?.series}
                            width="373"
                        />
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">
                            Gêneros
                        </h2>
                        <Chart 
                            options={{ ...pieOptions, labels: genderChartData?.labels}} 
                            type="donut"
                            series={genderChartData?.series}
                            width="373"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;