const plotSection = document.getElementById('plotSection');
const trace1 = {
    x: ["Jan 2026", "Mar 2026" "May 2026", "Jul 2026", "Sep 2026"],
    y: [0, 3, 4, 6, 9],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Contributors to Magimals Toxic',
    marker: { color: '#3b82f6', size: 10 },
    line: { color: '#1d4ed8', width: 2 }
};
const data = [trace1];
const layout = {
    title: {
        text: 'Contributors to Magimals Toxic',
        font: { size: 20 }
    },
    xaxis: { title: 'Time' },
    yaxis: { title: 'Helpers Count' },
    margin: { t: 50, b: 50, l: 50, r: 50 }
};
const config = {
    responsive: true,
    displayModeBar: true
};
Plotly.newPlot(plotDiv, data, layout, config);
