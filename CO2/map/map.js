var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

let nIntervId;
var option;

myChart.showLoading();
$.get("./world.json", function (usaJson) {
  myChart.hideLoading();
  echarts.registerMap("USA", usaJson, {});
  var data = [
    { name: "Argentina", value: "" },
    { name: "Australia", value: "" },
    { name: "Austria", value: "" },
    { name: "Belgium", value: "" },
    { name: "Brazil", value: "" },
    { name: "Brunei Darussalam", value: "" },
    { name: "Bulgaria", value: "" },
    { name: "Cambodia", value: "" },
    { name: "Canada", value: "" },
    { name: "Chile", value: "" },
    { name: "China", value: "" },
    { name: "Colombia", value: "" },
    { name: "Costa Rica", value: "" },
    { name: "Croatia", value: "" },
    { name: "Cyprus", value: "" },
    { name: "Czech Rep.", value: "" },
    { name: "Denmark", value: "" },
    { name: "Estonia", value: "" },
    { name: "Finland", value: "" },
    { name: "France", value: "" },
    { name: "Germany", value: "" },
    { name: "Greece", value: "" },
    { name: "Hungary", value: "" },
    { name: "Iceland", value: "" },
    { name: "India", value: "" },
    { name: "Indonesia", value: "" },
    { name: "Ireland", value: "" },
    { name: "Israel", value: "" },
    { name: "Italy", value: "" },
    { name: "Japan", value: "" },
    { name: "Kazakhstan", value: "" },
    { name: "Korea", value: "" },
    { name: "Lao People's Dem. Rep.", value: "" },
    { name: "Latvia", value: "" },
    { name: "Lithuania", value: "" },
    { name: "Luxembourg", value: "" },
    { name: "Malaysia", value: "" },
    { name: "Malta", value: "" },
    { name: "Mexico", value: "" },
    { name: "Morocco", value: "" },
    { name: "Myanmar", value: "" },
    { name: "Netherlands", value: "" },
    { name: "New Zealand", value: "" },
    { name: "Norway", value: "" },
    { name: "Peru", value: "" },
    { name: "Philippines", value: "" },
    { name: "Poland", value: "" },
    { name: "Portugal", value: "" },
    { name: "Romania", value: "" },
    { name: "Russian", value: "" },
    { name: "Saudi Arabia", value: "" },
    { name: "Singapore", value: "" },
    { name: "Slovak Rep.", value: "" },
    { name: "Slovenia", value: "" },
    { name: "South Africa", value: "" },
    { name: "Spain", value: "" },
    { name: "Sweden", value: "" },
    { name: "Switzerland", value: "" },
    { name: "Taiwan Province of China", value: "" },
    { name: "Thailand", value: "" },
    { name: "Tunisia", value: "" },
    { name: "Turkey", value: "" },
    { name: "United Kingdom", value: "" },
    { name: "United States", value: "" },
    { name: "Vietnam", value: "" }
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
