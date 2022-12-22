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
    { name: "Argentina", value: "26880.27453" },
    { name: "Australia", value: "60268.47991" },
    { name: "Austria", value: "24328.7063" },
    { name: "Belgium", value: "23286.6765" },
    { name: "Brazil", value: "33183.80289" },
    { name: "Brunei Darussalam", value: "156757.7882" },
    { name: "Bulgaria", value: "190846.5244" },
    { name: "Cambodia", value: "29884.9108" },
    { name: "Canada", value: "65596.37321" },
    { name: "Chile", value: "49816.84713" },
    { name: "China", value: "224140.1451" },
    { name: "Colombia", value: "62049.47139" },
    { name: "Costa Rica", value: "30969.78309" },
    { name: "Croatia", value: "108835.7654" },
    { name: "Cyprus", value: "52678.86045" },
    { name: "Czech Rep.", value: "100346.2189" },
    { name: "Denmark", value: "31744.84455" },
    { name: "Estonia", value: "219134.4656" },
    { name: "Finland", value: "35972.64133" },
    { name: "France", value: "27625.14942" },
    { name: "Germany", value: "31539.1717" },
    { name: "Greece", value: "58234.68145" },
    { name: "Hungary", value: "84643.65825" },
    { name: "Iceland", value: "21157.02707" },
    { name: "India", value: "159024.9476" },
    { name: "Indonesia", value: "65906.83742" },
    { name: "Ireland", value: "35017.37706" },
    { name: "Israel", value: "34005.7835" },
    { name: "Italy", value: "24652.74405" },
    { name: "Japan", value: "22343.52165" },
    { name: "Kazakhstan", value: "1022501.7" },
    { name: "Korea", value: "59039.99415" },
    { name: "Lao People's Dem. Rep.", value: "28856.11395" },
    { name: "Latvia", value: "142570.9282" },
    { name: "Lithuania", value: "89613.63558" },
    { name: "Luxembourg", value: "15249.20132" },
    { name: "Malaysia", value: "63047.39551" },
    { name: "Malta", value: "27154.86107" },
    { name: "Mexico", value: "72448.80734" },
    { name: "Morocco", value: "62916.93022" },
    { name: "Myanmar", value: "118465.0045" },
    { name: "Netherlands", value: "35128.51406" },
    { name: "New Zealand", value: "34688.25222" },
    { name: "Norway", value: "18448.59949" },
    { name: "Peru", value: "36066.2155" },
    { name: "Philippines", value: "79215.29184" },
    { name: "Poland", value: "146100.8466" },
    { name: "Portugal", value: "35334.85694" },
    { name: "Romania", value: "177782.258" },
    { name: "Russia", value: "278373.944" },
    { name: "Saudi Arabia", value: "196641.1612" },
    { name: "Singapore", value: "42374.32472" },
    { name: "Slovak Rep.", value: "89664.95447" },
    { name: "Slovenia", value: "40170.36275" },
    { name: "South Africa", value: "189092.012" },
    { name: "Spain", value: "36631.49038" },
    { name: "Sweden", value: "20160.78691" },
    { name: "Switzerland", value: "10002.90592" },
    { name: "Taiwan Province of China", value: "60661.00397" },
    { name: "Thailand", value: "54514.07448" },
    { name: "Tunisia", value: "66564.43743" },
    { name: "Turkey", value: "48522.12843" },
    { name: "United Kingdom", value: "34633.23921" },
    { name: "United States", value: "65281.6654" },
    { name: "Vietnam", value: "106102.8302" }
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
