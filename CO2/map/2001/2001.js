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
    { name: "Argentina", value: "47989.27728" },
    { name: "Australia", value: "44124.29016" },
    { name: "Austria", value: "19164.73511" },
    { name: "Belgium", value: "19463.95353" },
    { name: "Brazil", value: "34369.60902" },
    { name: "Brunei Darussalam", value: "93968.53884" },
    { name: "Bulgaria", value: "85927.39065" },
    { name: "Cambodia", value: "35362.30081" },
    { name: "Canada", value: "43760.432" },
    { name: "Chile", value: "46688.67247" },
    { name: "China", value: "138898.2726" },
    { name: "Colombia", value: "36804.21036" },
    { name: "Costa Rica", value: "18818.96547" },
    { name: "Croatia", value: "30162.85129" },
    { name: "Cyprus", value: "37193.03403" },
    { name: "Czech Rep.", value: "43788.77613" },
    { name: "Denmark", value: "20949.3029" },
    { name: "Estonia", value: "73234.1446" },
    { name: "Finland", value: "27493.34657" },
    { name: "France", value: "16711.21901" },
    { name: "Germany", value: "22876.42774" },
    { name: "Greece", value: "36958.27568" },
    { name: "Hungary", value: "32139.35464" },
    { name: "Iceland", value: "11382.30966" },
    { name: "India", value: "93708.14668" },
    { name: "Indonesia", value: "73504.62393" },
    { name: "Ireland", value: "27410.50506" },
    { name: "Israel", value: "29501.2959" },
    { name: "Italy", value: "17594.1375" },
    { name: "Japan", value: "26615.82116" },
    { name: "Kazakhstan", value: "290727.912" },
    { name: "Korea", value: "42342.4088" },
    { name: "Lao People's Dem. Rep.", value: "56599.52619" },
    { name: "Latvia", value: "30231.28007" },
    { name: "Lithuania", value: "20685.3286" },
    { name: "Luxembourg", value: "14081.71909" },
    { name: "Malaysia", value: "68054.5932" },
    { name: "Malta", value: "37595.54738" },
    { name: "Mexico", value: "38488.98411" },
    { name: "Morocco", value: "53053.88575" },
    { name: "Myanmar", value: "117872.4126" },
    { name: "Netherlands", value: "26855.31167" },
    { name: "New Zealand", value: "26572.86749" },
    { name: "Norway", value: "12255.61811" },
    { name: "Peru", value: "32386.87028" },
    { name: "Philippines", value: "69596.53429" },
    { name: "Poland", value: "52018.22406" },
    { name: "Portugal", value: "25107.39113" },
    { name: "Romania", value: "56560.71077" },
    { name: "Russia", value: "119756.5692" },
    { name: "Saudi Arabia", value: "140010.6243" },
    { name: "Singapore", value: "30221.43521" },
    { name: "Slovak Rep.", value: "38947.70418" },
    { name: "Slovenia", value: "39032.01342" },
    { name: "South Africa", value: "147014.6286" },
    { name: "Spain", value: "32244.74556" },
    { name: "Sweden", value: "14022.87673" },
    { name: "Switzerland", value: "8792.289344" },
    { name: "Taiwan Province of China", value: "56193.71668" },
    { name: "Thailand", value: "58483.13348" },
    { name: "Tunisia", value: "50447.31249" },
    { name: "Turkey", value: "32001.61514" },
    { name: "United Kingdom", value: "22388.10046" },
    { name: "United States", value: "47126.39353" },
    { name: "Vietnam", value: "88318.2755" }
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
