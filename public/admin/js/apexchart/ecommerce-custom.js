/*=======/Total Sell Bar Spark line/=======*/
const totalSellBarChart = {
  series: [{
    data: [40, 25, 60, 15, 40, 55, 35],
  },
  {
    data: [60, 50, 15, 35, 55, 25, 40],
  },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 75,
    sparkline: {
      enabled: true,
    },
    stacked: true,
  },

  grid: {
    padding: {
      top: -15,
      right: 0,
      bottom: 0,
      left: -5,
    },
  },

  plotOptions: {
    bar: {
      columnWidth: '40%',
      borderRadius: 5,
    },
  },

  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--primary),1)', '#F5F6F9'],
  fill: {
    type: 'solid',
    opacity: 1,
  },
  tooltip: toolTipMini,
  responsive: [
    {
      breakpoint: 1400,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 80,
        },
        plotOptions: {
          bar: {
            columnWidth: '60%',
            borderRadius: 5,
          },
        },
      },
    },
  ],
};

const totalSellBarChartEl = new ApexCharts(document.querySelector('#totalSellBarChart'), totalSellBarChart);
totalSellBarChartEl.render();

/*=======/Total Customer Line Chart/=======*/

var totalCustomerLineChart = {
  series: [{
    data: [34, 12, 54, 30, 12, 43]
  }],

  chart: {
    type: 'line',
    width: '100%',
    height: 120,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 3,
      blur: 1,
      color: ['rgba(var(--secondary),0.6)'],
    },
  },
  stroke: {
    curve: 'stepline',
    width: 2,
  },
  markers: {
    size: 0,
    colors: '#FF6150',
    strokeColors: '#FF6150',
    strokeWidth: 5,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    discrete: [],
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  colors: ['rgba(var(--secondary),0.9)'],
  grid: {
    margin: {
      top: -10,
      right: 10,
      bottom: -10,
      left: 0,
    },
    show: false,
    shadeIntensity: 1,
    type: 'horizontal',
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100, 100, 100]
  },
  colors: ['#FF6150'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'light',
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0],
    },
    opacity: 1,
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
    lines: {
      show: false,
    },
    tooltip: {
      enabled: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
  },
  yaxis: {
    lines: {
      show: false,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  },
  tooltip: {
    custom: function ({
      series,
      seriesIndex,
      dataPointIndex,
    }) {
      return '<div class="apex-tooltip px-4 py-1 relative "> ' + '<span class="font-bold">' + '$' + series[seriesIndex][dataPointIndex] + '</span>' + '</div>';
    },
  },
  responsive: [{
    breakpoint: 375,
    options: {
      chart: {
        width: 100,
        height: 105,
      }
    },
  }],

};
var totalCustomerLineChartEl = new ApexCharts(document.querySelector("#totalCustomerLineChart"), totalCustomerLineChart);
totalCustomerLineChartEl.render();



/*=======/Radial Chart/=======*/
const totalExpensesLineChart = {
  series: [60],

  chart: {
    type: 'radialBar',
    height: 100,
    offsetY: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      offsetY: 0,
      hollow: {
        size: '40%',
      },
      track: {
        background: 'var(--content)',
        strokeWidth: '90%',
        startAngle: 0,
        endAngle: 360,
      },

      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        name: {
          show: false,
        },
        value: {
          fontSize: '16px',
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 600,
          offsetY: 5,
          color: ['var(--content)']
        },
      },
    },
  },
  colors: ['var(--title)'],
  grid: {
    padding: {
      top: -15,
      bottom: -15,
      left: 0,
      right: 0,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 105,
        width: 100,
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },

          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 1600,
    options: {
      chart: {
        height: 100,
      },
    },
  },
  {
    breakpoint: 1460,
    options: {
      chart: {
        height: 90,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '35%',
          },
          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 1400,
    options: {
      chart: {
        height: 100,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },
          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 876,
    options: {
      chart: {
        height: 110,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },
          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 376,
    options: {
      chart: {
        height: 110,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },
          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  ],
};

const totalExpensesLineChartEl = new ApexCharts(document.querySelector('#totalExpensesLineChart'), totalExpensesLineChart);
totalExpensesLineChartEl.render();

/*=======/Radial Chart/=======*/
const customerRadialchart = {
  chart: {
    height: 330,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: 90,
      endAngle: -360,
      dataLabels: {
        show: true,
        name: {
          ...fontCommon,
          color: undefined,
        },
        value: {
          ...fontCommon,
          color: 'var(--content)',
        },
        total: {
          show: true,
          label: 'Total',
          color: 'var(--title)',
          formatter: function (w) {
            return 249;
          },
        },
      },
      track: {
        background: 'var(--content)',
        strokeWidth: '90%',
        startAngle: -100,
        endAngle: 100,
        opacity: 0.2,
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
  series: [70, 55, 40],
  colors: ['rgba(var(--primary),1)', 'rgba(var(--secondary), 1)', 'var(--title)',],
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 295,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 297,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 260,
        },
        plotOptions: {
          radar: {
            size: 50,
          },
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

var customerRadialchartEl = new ApexCharts(document.querySelector("#customerRadialchart"), customerRadialchart);
customerRadialchartEl.render();

/*=======/Sales Summary ( Jun 2023)/=======*/

var salesSummaryChart = {
  series: [{
    name: 'Orders',
    data: [6000, 6500, 6800, 6500, 6800, 6500, 6650, 6500, 5900, 6000]
  }, {
    name: 'Sales',
    data: [5000, 5500, 5800, 5500, 6500, 5600, 6350, 6000, 5500, 5800]
  }],
  colors: ['rgba(var(--secondary))', 'rgba(var(--primary))'],
  chart: {
    height: 280,
    type: 'area',
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 2,
      left: 1,
      blur: 5,
      color: ['rgba(var(--secondary),0.6)', 'rgba(var(--primary),0.6)'],
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 1,
      opacityTo: 0
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--content)']
      },
    },
  },
  xaxis: {
    categories: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", "Jan 06", "Jan 07", "Jan 08", "Jan 09", "Jan 10"],
    type: 'datetime',
    labels: {
      style: {
        colors: ['var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)', 'var(--content)'],
        fontWeight: 400,
      },
    },
    tooltip: {
      enabled: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  sparkline: {
    enabled: true
  },
  grid: {
    borderColor: 'var(--border-light)',
  },
  tooltip: {
    custom: function ({
      series,
      seriesIndex,
      dataPointIndex,
    }) {
      return '<div class="apex-tooltip px-4 py-1 relative"> ' + '<span class="font-bold">' + '$' + series[seriesIndex][dataPointIndex] + '</span>' + '<br>' + '<span class="align-middle text-content">' + 'Orders' + '</span>' + '</div>';
    },
  },
  responsive: [{
    breakpoint: 1200,
    options: {
      chart: {
        height: 335,
      },
    },
  },
  {
    breakpoint: 992,
    options: {
      chart: {
        height: 290,
      },
    },
  },
  {
    breakpoint: 425,
    options: {
      chart: {
        height: 260,
      },
    },
  },
  {
    breakpoint: 599,
    options: {
      series: [{
        name: 'Orders',
        data: [6000, 6500, 6800, 6500, 6800, 6500, 6650, 6500]
      }, {
        name: 'Sales',
        data: [5000, 5500, 5800, 5500, 6500, 5600, 6350, 6000]
      }],
      xaxis: {
        categories: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", "Jan 06", "Jan 07", "Jan 08"],
        type: 'datetime',
      },
    },
  },
  {
    breakpoint: 499,
    options: {
      series: [{
        name: 'Orders',
        data: [6000, 6500, 6800, 6500, 6800, 6500, 6650, 6500, 5900, 6000]
      }, {
        name: 'Sales',
        data: [5000, 5500, 5800, 5500, 6500, 5600, 6350, 6000, 5500, 5800]
      }],
      xaxis: {
        categories: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", "Jan 06", "Jan 07", "Jan 08", "Jan 09", "Jan 10"],
        type: 'datetime',
      },
    },
  },
  ],
};

var salesSummaryChartEl = new ApexCharts(document.querySelector("#salesSummaryChart"), salesSummaryChart);
salesSummaryChartEl.render();


/*=======/Orders Status (May 10)/=======*/
const OrdersStatus = {
  series: [{
    data: [60, 78, 35, 60, 20],
  },],
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    height: 320,
  },
  grid: {
    padding: {
      top: -15,
      right: 20,
      bottom: 0,
      left: 20,
    },
    show: true,
    borderColor: 'var(--border-light)',
  },
  plotOptions: {
    bar: {
      columnWidth: '15%',
      borderRadius: 9,
      distributed: true,
      barHeight: '100%',
    },
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
    showForNullSeries: false,
    labels: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: true,
    showForNullSeries: true,
    labels: {
      show: true,
      style: {
        colors: ['var(--content)']
      }
    }
  },
  colors: ['#33BFBF', '#FF6150', '#072448', '#F8AA4B', '#FAABA4', '#F5F6F9'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'light',
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
    opacity: 1,
  },
  tooltip: toolTipMini,
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 315,
      },
    },
  },
  {
    breakpoint: 1600,
    options: {
      chart: {
        height: 295,
      },
    },
  },
  {
    breakpoint: 1400,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '25%',
          borderRadius: 9,
        },
      },
    },
  },
  {
    breakpoint: 1200,
    options: {
      chart: {
        height: 290,
      },
    },
  },
  {
    breakpoint: 992,
    options: {
      chart: {
        height: 270,
      },
    },
  },
  {
    breakpoint: 426,
    options: {
      chart: {
        height: 250,
      },
      plotOptions: {
        bar: {
          columnWidth: '25%',
          borderRadius: 9,
        },
      },
    },
  },
  ],
};

const OrdersStatusEl = new ApexCharts(document.querySelector('#OrdersStatus'), OrdersStatus);
OrdersStatusEl.render();