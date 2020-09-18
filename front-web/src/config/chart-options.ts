export const pieOptions = {
    chart: {
      background: "transparent",
      foreColor: "red",
    },
    colors: ["#0066ff", "#ff0066", "#00D4FF", "#eccf0f"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
      offsetX: "100px",
      offsetY: "100px",
      style: {
        colors: ["#0066ff", "#ff0066", "#00d4ff", "#eccf0f"],
        fontSize: "20px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: false,
        dataLabels: {
          offset: 60,
        },
      },
    },
  };
  
  export const barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#ff0066"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
        startingShape: "rounded",
        barHeight: "32px",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        labels: {
          maxWidth: 360,
          style: {
            colors: "#011b46",
            fontSize: "18px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
          },
        },
      },
    ],
  };