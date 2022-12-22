var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

let nIntervId;
var option;

myChart.showLoading();
$.get("../world.json", function (usaJson) {
  myChart.hideLoading();
  echarts.registerMap("USA", usaJson, {});
  var data = [
    { name: "Argentina", value: "26786.66919" },
    { name: "Australia", value: "26022.79132" },
    { name: "Austria", value: "12522.74017" },
    { name: "Belgium", value: "17030.29193" },
    { name: "Brazil", value: "24332.96991" },
    { name: "Brunei Darussalam", value: "70377.25058" },
    { name: "Bulgaria", value: "41247.13113" },
    { name: "Cambodia", value: "37366.5685" },
    { name: "Canada", value: "30415.9309" },
    { name: "Chile", value: "29759.6449" },
    { name: "China", value: "59126.64081" },
    { name: "Colombia", value: "20618.92757" },
    { name: "Costa Rica", value: "8790.184588" },
    { name: "Croatia", value: "25070.0678" },
    { name: "Cyprus", value: "35359.51711" },
    { name: "Czech Rep.", value: "27917.1504" },
    { name: "Denmark", value: "13389.90717" },
    { name: "Estonia", value: "39955.44162" },
    { name: "Finland", value: "19479.78561" },
    { name: "France", value: "22997.6065" },
    { name: "Germany", value: "20100.95882" },
    { name: "Greece", value: "26777.54029" },
    { name: "Hungary", value: "38570.72209" },
    { name: "Iceland", value: "115222.7406" },
    { name: "India", value: "70878.92028" },
    { name: "Indonesia", value: "44858.21397" },
    { name: "Ireland", value: "16477.86817" },
    { name: "Israel", value: "17973.7001" },
    { name: "Italy", value: "15197.74362" },
    { name: "Japan", value: "30583.54226" },
    { name: "Kazakhstan", value: "75563.12536" },
    { name: "Korea", value: "32133.25276" },
    { name: "Lao People's Dem. Rep.", value: "58519.60069" },
    { name: "Latvia", value: "16215.81125" },
    { name: "Lithuania", value: "12236.56779" },
    { name: "Luxembourg", value: "8000.091604" },
    { name: "Malaysia", value: "50226.33103" },
    { name: "Malta", value: "23072.59813" },
    { name: "Mexico", value: "38991.94451" },
    { name: "Morocco", value: "36265.98142" },
    { name: "Myanmar", value: "36018.98786" },
    { name: "Netherlands", value: "22599.86977" },
    { name: "New Zealand", value: "18750.87684" },
    { name: "Norway", value: "11432.58774" },
    { name: "Peru", value: "20839.05689" },
    { name: "Philippines", value: "31060.80956" },
    { name: "Poland", value: "30758.08316" },
    { name: "Portugal", value: "18764.93564" },
    { name: "Romania", value: "24642.11028" },
    { name: "Russia", value: "78066.67817" },
    { name: "Saudi Arabia", value: "111785.2592" },
    { name: "Singapore", value: "19670.55712" },
    { name: "Slovak Rep.", value: "20849.40185" },
    { name: "Slovenia", value: "32858.75093" },
    { name: "South Africa", value: "105673.7167" },
    { name: "Spain", value: "50816.3987" },
    { name: "Sweden", value: "9954.479318" },
    { name: "Switzerland", value: "5512.972472" },
    { name: "Taiwan Province of China", value: "40747.61566" },
    { name: "Thailand", value: "39294.96743" },
    { name: "Tunisia", value: "44547.04006" },
    { name: "Turkey", value: "30850.92768" },
    { name: "United Kingdom", value: "15406.51783" },
    { name: "United States", value: "31207.83393" },
    { name: "Vietnam", value: "56621.68056" }
  ];
  data.sort(function (a, b) {
    return a.value - b.value;
  });
  const mapOption = {
    visualMap: {
      left: "left",
      min: 10000,
      max: 200000,
      inRange: {
        // prettier-ignore
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      },
      text: ["High", "Low"],
      calculable: true
    },
    series: [
      {
        id: "population",
        type: "map",
        roam: true,
        map: "USA",
        animationDurationUpdate: 1000,
        universalTransition: true,
        data: data
      }
    ]
  };
  const barOption = {
    xAxis: {
      type: "value"
    },
    yAxis: {
      type: "category",
      axisLabel: {
        rotate: 30
      },
      data: data.map(function (item) {
        return item.name;
      })
    },
    animationDurationUpdate: 1000,
    series: {
      type: "bar",
      id: "population",
      data: data.map(function (item) {
        return item.value;
      }),
      universalTransition: true
    }
  };
  let currentOption = mapOption;
  myChart.setOption(mapOption);
  function changeChart() {
    // check if already an interval has been set up
    if (!nIntervId) {
      nIntervId = setInterval(function () {
        currentOption = currentOption === mapOption ? barOption : mapOption;
        myChart.setOption(currentOption, true);
      }, 5000);
    }
  }
  function stopChart() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
  }
});

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
