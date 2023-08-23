/*=======/ Social Media Statics Chart /=======*/
const socialMediaStatisticsOption = {
  series: [{
    name: 'series1',
    data: [200, 570, 200, 300, 280, 530, 440, 440, 630, 400, 450, 560, 350, 200],
  },],
  chart: {
    height: 280,
    width: '100%',
    type: 'area',
    offsetY: 14,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['rgba(var(--secondary),1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.4,
      colorStops: [{
        offset: 0,
        color: 'rgba(var(--secondary),0.5)',
        opacity: 1,
      },
      {
        offset: 20,
        color: 'rgba(var(--secondary),0.3)',
        opacity: 1,
      },
      {
        offset: 60,
        color: 'rgba(var(--secondary),0.1)',
        opacity: 1,
      },
      {
        offset: 100,
        color: 'rgba(var(--secondary), 0)',
        opacity: 1,
      },
      ],
    },
  },
  markers: {
    size: 7,
    colors: 'var(--body)',
    strokeColors: 'rgba(var(--secondary), 1)',
    strokeWidth: 3,

    hover: {
      size: 9,
      strokeWidth: 20,
    },
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    strokeDashArray: 4,
    position: 'back',
    padding: {
      top: -22,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    show: false,
    logBase: 100,
    tickAmount: 6,
    min: 100,
    max: 700,
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec', ' '],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,
      style: {
        ...fontCommon,
      },
      tooltip: {
        enabled: false,
      },
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
  tooltip: {
    style: {
      ...fontCommon,
      fontSize: '12px',
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
    x: {
      show: false,
    },
  },

  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 243,
      },
    },
  },
  {
    breakpoint: 1500,
    options: {
      chart: {
        height: 215,
      },
    },
  },
  {
    breakpoint: 576,
    options: {
      chart: {
        height: 180,
      },
      markers: {
        size: 5,
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      xaxis: {
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: true,
          hideOverlappingLabels: true,
          showDuplicates: false,
          maxHeight: 30,
          offsetX: 3,
        },
      },
    },
  },
  {
    breakpoint: 426,
    options: {
      chart: {
        height: 160,
      },
    },
  },
  ],
};

const socialMediaStatisticsEl = new ApexCharts(document.querySelector('#socialAreaChart'), socialMediaStatisticsOption);
socialMediaStatisticsEl.render();



/*=======/ Recent Statistics Chart /=======*/

const recentStatistics1 = {
  series: [{
    name: 'series1',
    data: [0, 20, 70, 25, 100, 45, 25],
  },],
  colors: ['rgba(var(--secondary),1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.4,
      colorStops: [{
        offset: 0,
        color: 'rgba(var(--secondary),0.5)',
        opacity: 1,
      },
      {
        offset: 20,
        color: 'rgba(var(--secondary),0.3)',
        opacity: 1,
      },
      {
        offset: 60,
        color: 'rgba(var(--secondary),0.1)',
        opacity: 1,
      },
      {
        offset: 100,
        color: 'rgba(var(--secondary), 0)',
        opacity: 1,
      },
      ],
    },
  },
  markers: {
    size: 5,
    colors: 'var(--body)',
    strokeColors: 'rgba(var(--secondary), 1)',
    strokeWidth: 2,
  },
};
const recentStatistics2 = {
  series: [{
    name: 'series1',
    data: [0, 50, 40, 90, 60, 120, 150],
  },],
  colors: ['rgba(var(--primary),1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.4,
      colorStops: [{
        offset: 0,
        color: 'rgba(var(--primary),0.5)',
        opacity: 1,
      },
      {
        offset: 20,
        color: 'rgba(var(--primary),0.3)',
        opacity: 1,
      },
      {
        offset: 60,
        color: 'rgba(var(--primary),0.1)',
        opacity: 1,
      },
      {
        offset: 100,
        color: 'rgba(var(--primary), 0)',
        opacity: 1,
      },
      ],
    },
  },
  markers: {
    size: 5,
    colors: 'var(--body)',
    strokeColors: 'rgba(var(--primary), 1)',
    strokeWidth: 2,
  },
};

const recentStatisticsOption = (data) => {
  return {
    series: data.series,
    chart: {
      height: 278,
      width: '100%',
      type: 'area',
      stacked: true,
      offsetY: 18,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: data.colors,
    fill: data.fill,
    markers: data.markers,
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: {
      show: true,
      borderColor: 'var(--border-light)',
      strokeDashArray: 0,
      position: 'back',
      padding: {
        top: 0,
        right: -2,
        left: 15,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      show: false,
      logBase: 100,
      tickAmount: 6,
      min: 0,
      max: 150,
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        minHeight: undefined,
        maxHeight: 24,
        offsetX: 0,
        offsetY: 0,
        style: {
          ...fontCommon,
          fontWeight: 400,
        },
        tooltip: {
          enabled: false,
        },
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
    tooltip: {
      style: {
        ...fontCommon,
        fontSize: '12px',
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: false,
      },
    },

    responsive: [{
      breakpoint: 1200,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 676,
      options: {
        chart: {
          height: 240,
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    ],
  };
};

const recentStatisticsChartEl = new ApexCharts(document.querySelector('#recentStatisticsChart1'), recentStatisticsOption(recentStatistics1));
const recentStatisticsChartE2 = new ApexCharts(document.querySelector('#recentStatisticsChart2'), recentStatisticsOption(recentStatistics2));
recentStatisticsChartEl.render();
recentStatisticsChartE2.render();

/*=======/Total Follower Bar Spark line/=======*/
const totalSaveBarChartOption = {
  series: [{
    data: [30, 66, 45, 89, 63, 52, 70],
  },],
  chart: {
    type: 'bar',
    width: '100%',
    height: 110,
    sparkline: {
      enabled: true,
    },
  },

  grid: {
    padding: {
      top: 0,
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
  colors: ['#feb858'],
  fill: {
    type: 'solid',
    opacity: 0.3,
  },
  tooltip: toolTipMini,
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 86,
      },
    },
  },
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
        height: 50,
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

const totalSaveBarChartEl = new ApexCharts(document.querySelector('#totalSaveBarChart'), totalSaveBarChartOption);
totalSaveBarChartEl.render();


/*=======/Radial Chart/=======*/
const totalCommentOption = {
  series: [60],

  chart: {
    type: 'radialBar',
    height: 120,
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
        size: '50%',
      },
      track: {
        background: 'rgba(var(--secondary),0.1)',
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
  colors: ['rgba(var(--secondary),1)'],
  grid: {
    padding: {
      top: 0,
      bottom: 0,
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
        height: 115,
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: '48%',
          },

          dataLabels: {
            value: {
              fontSize: '14px',
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
        height: 110,
      },
    },
  },
  {
    breakpoint: 1460,
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
    breakpoint: 1400,
    options: {
      chart: {
        height: 120,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            value: {
              fontSize: '18px',
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
            size: '45%',
          },
          dataLabels: {
            value: {
              fontSize: '18px',
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
        height: 90,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
          },

          dataLabels: {
            value: {
              fontSize: '14px',
            },
          },
        },
      },
    },
  },
  ],
};

const totalCommentEl = new ApexCharts(document.querySelector('#totalCommentRadialChart'), totalCommentOption);
totalCommentEl.render();


/*=======/Total Likes area Spark line/=======*/

const totalLikesOption = {
  series: [{
    name: 'series2',
    data: [5, 30, 20, 80, 27, 29, 24, 34, 18, 70, 60, 110, 0],
  },],
  chart: {
    height: 110,
    type: 'area',
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ['#072448'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.4,
    },
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: toolTipMini,
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 86,
      },
    },
  },
  {
    breakpoint: 1460,
    options: {
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 5,
        },
      },
    },
  },
  {
    breakpoint: 376,
    options: {
      chart: {
        height: 50,
      },
    },
  },
  ],
};

const totalLikesEl = new ApexCharts(document.querySelector('#totalLikesAreaChart'), totalLikesOption);
totalLikesEl.render();



/*=======/Total Follower Bar Spark line/=======*/
const totalFollowersBarChartOption = {
  series: [{
    data: [10, 55, 45, 89, 63, 52, 70],
  },],
  chart: {
    type: 'bar',
    width: '100%',
    height: 110,
    sparkline: {
      enabled: true,
    },
  },

  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: -14,
    },
  },

  plotOptions: {
    bar: {
      columnWidth: '70%',
    },
  },

  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--primary),1)'],
  fill: {
    colors: 'rgba(var(--primary), 0.2)',
    type: 'solid',
  },
  tooltip: toolTipMini,
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 86,
      },
    },
  },
  {
    breakpoint: 1460,
    options: {
      grid: {
        padding: {
          left: 0,
        },
      },
    },
  },
  {
    breakpoint: 376,
    options: {
      chart: {
        height: 50,
      },
    },
  },
  ],
};

const totalFollowersBarChartEl = new ApexCharts(document.querySelector('#totalFollowersBarChart'), totalFollowersBarChartOption);
totalFollowersBarChartEl.render();

/*=======/Market Overview chart/=======*/
const marketOverViewChart = {
  series: [{
    name: 'Desktops',
    data: [18, 30, 25, 51, 34, 40, 34],
  },],
  chart: {
    height: 245,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 12,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  colors: ['rgba(var(--primary),1)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
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
  yaxis: {
    show: false,
  },
  responsive: [{
    breakpoint: 1600,
    options: {
      chart: {
        height: 245,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 1500,
    options: {
      chart: {
        height: 195,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 1095,
    options: {
      chart: {
        height: 270,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 768,
    options: {
      chart: {
        height: 172,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 326,
    options: {
      chart: {
        height: 145,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  ],
};
const marketOverViewChartEl = new ApexCharts(document.querySelector('#market-overview-chart'), marketOverViewChart);
marketOverViewChartEl.render();

const revenueChart = {
  series: [{
    data: [45, 25, 55, 47, 89, 47, 70, 38, 92, 44, 38, 70],
  },],
  chart: {
    type: 'bar',
    width: '100%',
    height: 67,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 5,
    },
  },

  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--secondary))'],
  fill: {
    colors: 'rgba(var(--secondary), 0.4)',
    type: 'solid',
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  responsive: [{
    breakpoint: 992,
    options: {
      chart: {
        height: 92,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 922,
    options: {
      chart: {
        height: 95,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 675,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '55%',
          borderRadius: 5,
        },
      },
    },
  },
  {
    breakpoint: 425,
    options: {
      chart: {
        height: 55,
      },
      plotOptions: {
        bar: {
          columnWidth: '70%',
          borderRadius: 5,
        },
      },
    },
  },
  ],
};

const revenueChartEl = new ApexCharts(document.querySelector('#revenueChart'), revenueChart);
revenueChartEl.render();

/*=======/ Earnings Radial Chart /=======*/
const earningChart = {
  series: [46],
  chart: {
    type: 'radialBar',
    offsetY: 0,
    height: 280,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -100,
      endAngle: 100,
      hollow: {
        size: '40%',
      },
      track: {
        background: 'var(--chart-dark)',
        strokeWidth: '90%',
        startAngle: -100,
        endAngle: 100,
        opacity: 0.1,
      },

      dataLabels: {
        name: {
          show: true,
          ...fontCommon,
          color: 'var(--content)',
          offsetY: -1,
        },
        value: {
          offsetY: -40,
          ...fontCommon,
          color: 'var(--title)',
          fontSize: '24px',
          fontWeight: 700,
        },
      },
    },
  },
  grid: {
    padding: {
      top: -40,
      bottom: 0,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  colors: ['var(--chart-dark)'],
  labels: ['Profile'],
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 250,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 1600,
    options: {
      chart: {
        height: 280,

        offsetY: -5,
        sparkline: {
          enabled: true,
        },
      },
    },
  },
  {
    breakpoint: 1499,
    options: {
      chart: {
        height: 250,
        offsetY: 0,
      }
    }
  },
  {
    breakpoint: 1200,
    options: {
      chart: {
        height: 250,

        offsetY: 0,
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
    },
  },
  {
    breakpoint: 992,
    options: {
      chart: {

        offsetY: -3,
      },
    },
  },
  {
    breakpoint: 675,
    options: {
      chart: {
        height: 280,
      },
    },
  },
  {
    breakpoint: 425,
    options: {
      chart: {
        height: 245,
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              ...fontCommon,
              show: true,
              color: 'var(--content)',
              offsetY: 5,
            },
            value: {
              offsetY: -30,
              fontSize: '20px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 375,
    options: {
      chart: {
        height: 230,
      },

      plotOptions: {
        radialBar: {
          startAngle: -100,
          endAngle: 100,
          hollow: {
            size: '35%',
          },
        },
      },
    },
  },
  ],
};

const earningChartEl = new ApexCharts(document.querySelector('#earningChart'), earningChart);
earningChartEl.render();

