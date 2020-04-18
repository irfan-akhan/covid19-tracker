import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Bar, Line } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchAPI();
    });
};

const lineChart = dailyData[0] ? (
    <line data={{ labels: "", datasets: [{}, {}] }} />
) : null;

export default Chart;
