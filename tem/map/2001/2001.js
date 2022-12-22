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
    { name: "Afghanistan", value: "1.366" },
    { name: "Albania", value: "1.555" },
    { name: "Algeria", value: "1.827" },
    { name: "Angola", value: "0.425" },
    { name: "Argentina", value: "0.415" },
    { name: "Armenia", value: "1.412" },
    { name: "Australia", value: "0.311" },
    { name: "Austria", value: "1.504" },
    { name: "Azerbaijan", value: "1.425" },
    { name: "Bahamas", value: "0.229" },
    { name: "Bahrain", value: "1.136" },
    { name: "Bangladesh", value: "0.339" },
    { name: "Belarus", value: "1.977" },
    { name: "Belgium", value: "1.317" },
    { name: "Belize", value: "0.305" },
    { name: "Benin", value: "0.623" },
    { name: "Bhutan", value: "0.569" },
    { name: "Bolivia", value: "0.432" },
    { name: "Botswana", value: "0.157" },
    { name: "Brazil", value: "0.736" },
    { name: "British Virgin Islands", value: "0.614" },
    { name: "Bulgaria", value: "1.629" },
    { name: "Burkina Faso", value: "0.572" },
    { name: "Burundi", value: "0.628" },
    { name: "Cambodia", value: "0.623" },
    { name: "Cameroon", value: "0.322" },
    { name: "Canada", value: "1.438" },
    { name: "Cayman Islands", value: "" },
    { name: "Central African Rep.", value: "0.468" },
    { name: "Chad", value: "0.247" },
    { name: "Chile", value: "0.059" },
    { name: "China", value: "1.02" },
    { name: "Colombia", value: "0.378" },
    { name: "Comoros", value: "0.312" },
    { name: "Congo", value: "0.515" },
    { name: "Congo", value: "0.448" },
    { name: "Costa Rica", value: "0.361" },
    { name: "Croatia", value: "1.596" },
    { name: "Cuba", value: "0.515" },
    { name: "Cyprus", value: "1.119" },
    { name: "Czech Rep.", value: "1.219" },
    { name: "Denmark", value: "1.048" },
    { name: "Djibouti", value: "0.802" },
    { name: "Dominican Rep.", value: "0.954" },
    { name: "Ecuador", value: "0.398" },
    { name: "Egypt", value: "0.59" },
    { name: "El Salvador", value: "0.57" },
    { name: "Equatorial Guinea", value: "0.435" },
    { name: "Eritrea", value: "0.547" },
    { name: "Estonia", value: "1.82" },
    { name: "Ethiopia", value: "0.78" },
    { name: "Fiji", value: "0.779" },
    { name: "Finland", value: "1.361" },
    { name: "France", value: "1.355" },
    { name: "Gabon", value: "0.312" },
    { name: "Gambia", value: "1.434" },
    { name: "Georgia", value: "1.277" },
    { name: "Germany", value: "1.281" },
    { name: "Ghana", value: "0.644" },
    { name: "Greece", value: "1.298" },
    { name: "Greenland", value: "0.822" },
    { name: "Guatemala", value: "0.506" },
    { name: "Guinea", value: "0.795" },
    { name: "Guinea-Bissau", value: "1.346" },
    { name: "Guyana", value: "0.781" },
    { name: "Haiti", value: "0.712" },
    { name: "Honduras", value: "0.374" },
    { name: "Hungary", value: "1.41" },
    { name: "Iceland", value: "0.618" },
    { name: "India", value: "0.441" },
    { name: "Indonesia", value: "0.519" },
    { name: "Iran", value: "1.419" },
    { name: "Iraq", value: "1.153" },
    { name: "Ireland", value: "0.529" },
    { name: "Isle of Man", value: "0.495" },
    { name: "Israel", value: "0.928" },
    { name: "Italy", value: "1.503" },
    { name: "Jamaica", value: "0.486" },
    { name: "Japan", value: "0.381" },
    { name: "Jordan", value: "1.018" },
    { name: "Kazakhstan", value: "1.645" },
    { name: "Kenya", value: "0.606" },
    { name: "Korea", value: "0.92" },
    { name: "Kuwait", value: "1.106" },
    { name: "Latvia", value: "1.806" },
    { name: "Lebanon", value: "1.158" },
    { name: "Lesotho", value: "0.569" },
    { name: "Liberia", value: "0.53" },
    { name: "Libya", value: "1.2" },
    { name: "Lithuania", value: "1.798" },
    { name: "Luxembourg", value: "1.412" },
    { name: "Madagascar", value: "0.561" },
    { name: "Malawi", value: "0.668" },
    { name: "Malaysia", value: "0.638" },
    { name: "Maldives", value: "0.431" },
    { name: "Mali", value: "0.642" },
    { name: "Malta", value: "1.642" },
    { name: "Mauritania", value: "1.276" },
    { name: "Mauritius", value: "0.381" },
    { name: "Mexico", value: "0.505" },
    { name: "Moldova", value: "1.697" },
    { name: "Monaco", value: "1.34" },
    { name: "Mongolia", value: "1.697" },
    { name: "Montenegro", value: "" },
    { name: "Morocco", value: "1.84" },
    { name: "Mozambique", value: "0.492" },
    { name: "Myanmar", value: "0.563" },
    { name: "Namibia", value: "0.576" },
    { name: "Nepal", value: "0.419" },
    { name: "Netherlands", value: "1.259" },
    { name: "New Caledonia", value: "0.492" },
    { name: "New Zealand", value: "0.584" },
    { name: "Nicaragua", value: "0.436" },
    { name: "Niger", value: "0.37" },
    { name: "Nigeria", value: "0.315" },
    { name: "Norway", value: "0.633" },
    { name: "Oman", value: "0.732" },
    { name: "Pakistan", value: "0.752" },
    { name: "Panama", value: "0.361" },
    { name: "Papua New Guinea", value: "0.625" },
    { name: "Paraguay", value: "0.526" },
    { name: "Peru", value: "0.506" },
    { name: "Philippines", value: "0.727" },
    { name: "Poland", value: "1.277" },
    { name: "Portugal", value: "1.12" },
    { name: "Puerto Rico", value: "0.773" },
    { name: "Qatar", value: "0.964" },
    { name: "Romania", value: "1.532" },
    { name: "Russia", value: "0.81" },
    { name: "Rwanda", value: "0.467" },
    { name: "San Marino", value: "1.628" },
    { name: "Saudi Arabia", value: "0.864" },
    { name: "Senegal", value: "1.176" },
    { name: "Serbia", value: "" },
    { name: "Sierra Leone", value: "0.849" },
    { name: "Singapore", value: "" },
    { name: "Slovenia", value: "1.724" },
    { name: "Somalia", value: "0.955" },
    { name: "South Africa", value: "0.52" },
    { name: "Spain", value: "1.344" },
    { name: "Sri Lanka", value: "0.854" },
    { name: "Sudan", value: "" },
    { name: "Suriname", value: "0.532" },
    { name: "Sweden", value: "1.078" },
    { name: "Switzerland", value: "1.437" },
    { name: "Tajikistan", value: "1.488" },
    { name: "Tanzania", value: "0.468" },
    { name: "Thailand", value: "0.69" },
    { name: "Togo", value: "0.78" },
    { name: "Tonga", value: "0.637" },
    { name: "Trinidad and Tobago", value: "0.68" },
    { name: "Tunisia", value: "1.969" },
    { name: "Turkey", value: "1.475" },
    { name: "Turkmenistan", value: "1.488" },
    { name: "Uganda", value: "0.457" },
    { name: "Ukraine", value: "1.795" },
    { name: "United Arab Emirates", value: "0.592" },
    { name: "United Kingdom", value: "0.622" },
    { name: "United States", value: "0.78" },
    { name: "Uruguay", value: "1.266" },
    { name: "Uzbekistan", value: "1.578" },
    { name: "Vanuatu", value: "0.598" },
    { name: "Venezuela", value: "0.482" },
    { name: "Vietnam", value: "0.728" },
    { name: "Yemen", value: "" },
    { name: "Zambia", value: "0.501" },
    { name: "Zimbabwe", value: "0.03" }
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
