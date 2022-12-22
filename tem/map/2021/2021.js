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
    { name: "Afghanistan", value: "1.421" },
    { name: "Albania", value: "1.682" },
    { name: "Algeria", value: "2.317" },
    { name: "Angola", value: "1.631" },
    { name: "Argentina", value: "1.011" },
    { name: "Armenia", value: "2.212" },
    { name: "Australia", value: "0.589" },
    { name: "Austria", value: "1.397" },
    { name: "Azerbaijan", value: "2.109" },
    { name: "Bahamas", value: "0.688" },
    { name: "Bahrain", value: "2.427" },
    { name: "Bangladesh", value: "1.315" },
    { name: "Belarus", value: "1.683" },
    { name: "Belgium", value: "1.15" },
    { name: "Belize", value: "1.077" },
    { name: "Benin", value: "1.735" },
    { name: "Bhutan", value: "1.536" },
    { name: "Bolivia", value: "0.553" },
    { name: "Botswana", value: "0.004" },
    { name: "Brazil", value: "1.167" },
    { name: "British Virgin Islands", value: "0.949" },
    { name: "Bulgaria", value: "1.795" },
    { name: "Burkina Faso", value: "1.772" },
    { name: "Burundi", value: "" },
    { name: "Cambodia", value: "0.893" },
    { name: "Cameroon", value: "1.113" },
    { name: "Canada", value: "2.536" },
    { name: "Cayman Islands", value: "1.196" },
    { name: "Central African Rep.", value: "1.307" },
    { name: "Chad", value: "1.018" },
    { name: "Chile", value: "0.661" },
    { name: "China", value: "1.714" },
    { name: "Colombia", value: "0.898" },
    { name: "Comoros", value: "0.454" },
    { name: "Congo", value: "1.821" },
    { name: "Congo", value: "1.407" },
    { name: "Costa Rica", value: "" },
    { name: "Croatia", value: "1.622" },
    { name: "Cuba", value: "1.311" },
    { name: "Cyprus", value: "2.082" },
    { name: "Czech Rep.", value: "1.29" },
    { name: "Denmark", value: "1.691" },
    { name: "Djibouti", value: "" },
    { name: "Dominican Rep.", value: "1.136" },
    { name: "Ecuador", value: "0.516" },
    { name: "Egypt", value: "1.607" },
    { name: "El Salvador", value: "1.379" },
    { name: "Equatorial Guinea", value: "1.037" },
    { name: "Eritrea", value: "1.416" },
    { name: "Estonia", value: "2.133" },
    { name: "Ethiopia", value: "1.507" },
    { name: "Fiji", value: "1.119" },
    { name: "Finland", value: "1.923" },
    { name: "France", value: "1.193" },
    { name: "Gabon", value: "0.881" },
    { name: "Gambia", value: "1.878" },
    { name: "Georgia", value: "1.701" },
    { name: "Germany", value: "1.304" },
    { name: "Ghana", value: "1.701" },
    { name: "Greece", value: "1.722" },
    { name: "Greenland", value: "2.462" },
    { name: "Guatemala", value: "1.442" },
    { name: "Guinea", value: "1.761" },
    { name: "Guinea-Bissau", value: "1.912" },
    { name: "Guyana", value: "1.195" },
    { name: "Haiti", value: "1.046" },
    { name: "Honduras", value: "1.027" },
    { name: "Hungary", value: "1.482" },
    { name: "Iceland", value: "0.993" },
    { name: "India", value: "0.729" },
    { name: "Indonesia", value: "0.994" },
    { name: "Iran", value: "2.051" },
    { name: "Iraq", value: "2.542" },
    { name: "Ireland", value: "1.057" },
    { name: "Isle of Man", value: "1.014" },
    { name: "Israel", value: "1.884" },
    { name: "Italy", value: "1.478" },
    { name: "Jamaica", value: "1.299" },
    { name: "Japan", value: "1.215" },
    { name: "Jordan", value: "2.089" },
    { name: "Kazakhstan", value: "1.432" },
    { name: "Kenya", value: "1.308" },
    { name: "Korea", value: "1.56" },
    { name: "Kuwait", value: "2.459" },
    { name: "Latvia", value: "1.938" },
    { name: "Lebanon", value: "2.241" },
    { name: "Lesotho", value: "0.793" },
    { name: "Liberia", value: "1.573" },
    { name: "Libya", value: "1.808" },
    { name: "Lithuania", value: "1.737" },
    { name: "Luxembourg", value: "1.137" },
    { name: "Madagascar", value: "1.045" },
    { name: "Malawi", value: "0.605" },
    { name: "Malaysia", value: "1.192" },
    { name: "Maldives", value: "1.034" },
    { name: "Mali", value: "1.846" },
    { name: "Malta", value: "2.035" },
    { name: "Mauritania", value: "1.862" },
    { name: "Mauritius", value: "0.802" },
    { name: "Mexico", value: "1.09" },
    { name: "Moldova", value: "1.302" },
    { name: "Monaco", value: "1.279" },
    { name: "Mongolia", value: "1.991" },
    { name: "Montenegro", value: "1.697" },
    { name: "Morocco", value: "1.882" },
    { name: "Mozambique", value: "0.549" },
    { name: "Myanmar", value: "1.565" },
    { name: "Namibia", value: "0.866" },
    { name: "Nepal", value: "0.451" },
    { name: "Netherlands", value: "1.285" },
    { name: "New Caledonia", value: "0.84" },
    { name: "New Zealand", value: "0.901" },
    { name: "Nicaragua", value: "0.959" },
    { name: "Niger", value: "1.643" },
    { name: "Nigeria", value: "1.495" },
    { name: "Norway", value: "1.525" },
    { name: "Oman", value: "1.589" },
    { name: "Pakistan", value: "1.118" },
    { name: "Panama", value: "1.047" },
    { name: "Papua New Guinea", value: "1.212" },
    { name: "Paraguay", value: "0.678" },
    { name: "Peru", value: "1.127" },
    { name: "Philippines", value: "1.179" },
    { name: "Poland", value: "1.417" },
    { name: "Portugal", value: "1.213" },
    { name: "Puerto Rico", value: "0.999" },
    { name: "Qatar", value: "2.155" },
    { name: "Romania", value: "1.497" },
    { name: "Russia", value: "1.64" },
    { name: "Rwanda", value: "" },
    { name: "San Marino", value: "1.317" },
    { name: "Saudi Arabia", value: "2.261" },
    { name: "Senegal", value: "1.871" },
    { name: "Serbia", value: "1.7" },
    { name: "Sierra Leone", value: "1.716" },
    { name: "Singapore", value: "" },
    { name: "Slovenia", value: "1.565" },
    { name: "Somalia", value: "1.79" },
    { name: "South Africa", value: "0.605" },
    { name: "Spain", value: "1.312" },
    { name: "Sri Lanka", value: "1.106" },
    { name: "Sudan", value: "1.161" },
    { name: "Suriname", value: "1.477" },
    { name: "Sweden", value: "1.85" },
    { name: "Switzerland", value: "1.103" },
    { name: "Tajikistan", value: "1.054" },
    { name: "Tanzania", value: "1.068" },
    { name: "Thailand", value: "1.067" },
    { name: "Togo", value: "1.732" },
    { name: "Tonga", value: "0.574" },
    { name: "Trinidad and Tobago", value: "1.142" },
    { name: "Tunisia", value: "2.543" },
    { name: "Turkey", value: "1.93" },
    { name: "Turkmenistan", value: "1.599" },
    { name: "Uganda", value: "1.121" },
    { name: "Ukraine", value: "1.43" },
    { name: "United Arab Emirates", value: "1.75" },
    { name: "United Kingdom", value: "0.951" },
    { name: "United States", value: "1.166" },
    { name: "Uruguay", value: "1.032" },
    { name: "Uzbekistan", value: "1.514" },
    { name: "Vanuatu", value: "1.067" },
    { name: "Venezuela", value: "0.723" },
    { name: "Vietnam", value: "1.193" },
    { name: "Yemen", value: "" },
    { name: "Zambia", value: "1.002" },
    { name: "Zimbabwe", value: "-0.101" }
  ];
  data.sort(function (a, b) {
    return a.value - b.value;
  });
  const mapOption = {
    visualMap: {
      left: "left",
      min: -1,
      max: 2,
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
