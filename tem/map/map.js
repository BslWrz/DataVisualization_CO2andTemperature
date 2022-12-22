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
    { name: "Afghanistan", value: "" },
    { name: "Albania", value: "" },
    { name: "Algeria", value: "" },
    { name: "Angola", value: "" },
    { name: "Argentina", value: "" },
    { name: "Armenia", value: "" },
    { name: "Australia", value: "" },
    { name: "Austria", value: "" },
    { name: "Azerbaijan", value: "" },
    { name: "Bahamas", value: "" },
    { name: "Bahrain", value: "" },
    { name: "Bangladesh", value: "" },
    { name: "Belarus", value: "" },
    { name: "Belgium", value: "" },
    { name: "Belize", value: "" },
    { name: "Benin", value: "" },
    { name: "Bhutan", value: "" },
    { name: "Bolivia", value: "" },
    { name: "Botswana", value: "" },
    { name: "Brazil", value: "" },
    { name: "British Virgin Islands", value: "" },
    { name: "Bulgaria", value: "" },
    { name: "Burkina Faso", value: "" },
    { name: "Burundi", value: "" },
    { name: "Cambodia", value: "" },
    { name: "Cameroon", value: "" },
    { name: "Canada", value: "" },
    { name: "Cayman Islands", value: "" },
    { name: "Central African Rep.", value: "" },
    { name: "Chad", value: "" },
    { name: "Chile", value: "" },
    { name: "China", value: "" },
    { name: "China", value: "" },
    { name: "China", value: "" },
    { name: "Colombia", value: "" },
    { name: "Comoros", value: "" },
    { name: "Congo", value: "" },
    { name: "Congo", value: "" },
    { name: "Costa Rica", value: "" },
    { name: "Croatia", value: "" },
    { name: "Cuba", value: "" },
    { name: "Cyprus", value: "" },
    { name: "Czech Rep.", value: "" },
    { name: "Denmark", value: "" },
    { name: "Djibouti", value: "" },
    { name: "Dominican Rep.", value: "" },
    { name: "Ecuador", value: "" },
    { name: "Egypt", value: "" },
    { name: "El Salvador", value: "" },
    { name: "Equatorial Guinea", value: "" },
    { name: "Eritrea", value: "" },
    { name: "Estonia", value: "" },
    { name: "Ethiopia", value: "" },
    { name: "Fiji", value: "" },
    { name: "Finland", value: "" },
    { name: "France", value: "" },
    { name: "Gabon", value: "" },
    { name: "Gambia", value: "" },
    { name: "Georgia", value: "" },
    { name: "Germany", value: "" },
    { name: "Ghana", value: "" },
    { name: "Greece", value: "" },
    { name: "Greenland", value: "" },
    { name: "Guatemala", value: "" },
    { name: "Guinea", value: "" },
    { name: "Guinea-Bissau", value: "" },
    { name: "Guyana", value: "" },
    { name: "Haiti", value: "" },
    { name: "Honduras", value: "" },
    { name: "Hungary", value: "" },
    { name: "Iceland", value: "" },
    { name: "India", value: "" },
    { name: "Indonesia", value: "" },
    { name: "Iran", value: "" },
    { name: "Iraq", value: "" },
    { name: "Ireland", value: "" },
    { name: "Isle of Man", value: "" },
    { name: "Israel", value: "" },
    { name: "Italy", value: "" },
    { name: "Jamaica", value: "" },
    { name: "Japan", value: "" },
    { name: "Jordan", value: "" },
    { name: "Kazakhstan", value: "" },
    { name: "Kenya", value: "" },
    { name: "Korea", value: "" },
    { name: "Korea", value: "" },
    { name: "Kuwait", value: "" },
    { name: "Latvia", value: "" },
    { name: "Lebanon", value: "" },
    { name: "Lesotho", value: "" },
    { name: "Liberia", value: "" },
    { name: "Libya", value: "" },
    { name: "Lithuania", value: "" },
    { name: "Luxembourg", value: "" },
    { name: "Madagascar", value: "" },
    { name: "Malawi", value: "" },
    { name: "Malaysia", value: "" },
    { name: "Maldives", value: "" },
    { name: "Mali", value: "" },
    { name: "Malta", value: "" },
    { name: "Mauritania", value: "" },
    { name: "Mauritius", value: "" },
    { name: "Mexico", value: "" },
    { name: "Moldova", value: "" },
    { name: "Monaco", value: "" },
    { name: "Mongolia", value: "" },
    { name: "Montenegro", value: "" },
    { name: "Morocco", value: "" },
    { name: "Mozambique", value: "" },
    { name: "Myanmar", value: "" },
    { name: "Namibia", value: "" },
    { name: "Nepal", value: "" },
    { name: "Netherlands", value: "" },
    { name: "New Caledonia", value: "" },
    { name: "New Zealand", value: "" },
    { name: "Nicaragua", value: "" },
    { name: "Niger", value: "" },
    { name: "Nigeria", value: "" },
    { name: "Norway", value: "" },
    { name: "Oman", value: "" },
    { name: "Pakistan", value: "" },
    { name: "Panama", value: "" },
    { name: "Papua New Guinea", value: "" },
    { name: "Paraguay", value: "" },
    { name: "Peru", value: "" },
    { name: "Philippines", value: "" },
    { name: "Poland", value: "" },
    { name: "Portugal", value: "" },
    { name: "Puerto Rico", value: "" },
    { name: "Qatar", value: "" },
    { name: "Romania", value: "" },
    { name: "Russia", value: "" },
    { name: "Rwanda", value: "" },
    { name: "San Marino", value: "" },
    { name: "Saudi Arabia", value: "" },
    { name: "Senegal", value: "" },
    { name: "Serbia", value: "" },
    { name: "Sierra Leone", value: "" },
    { name: "Singapore", value: "" },
    { name: "Slovenia", value: "" },
    { name: "Somalia", value: "" },
    { name: "South Africa", value: "" },
    { name: "Spain", value: "" },
    { name: "Sri Lanka", value: "" },
    { name: "Sudan", value: "" },
    { name: "Suriname", value: "" },
    { name: "Sweden", value: "" },
    { name: "Switzerland", value: "" },
    { name: "Tajikistan", value: "" },
    { name: "Tanzania", value: "" },
    { name: "Thailand", value: "" },
    { name: "Togo", value: "" },
    { name: "Tonga", value: "" },
    { name: "Trinidad and Tobago", value: "" },
    { name: "Tunisia", value: "" },
    { name: "Turkey", value: "" },
    { name: "Turkmenistan", value: "" },
    { name: "Uganda", value: "" },
    { name: "Ukraine", value: "" },
    { name: "United Arab Emirates", value: "" },
    { name: "United Kingdom", value: "" },
    { name: "United States", value: "" },
    { name: "Uruguay", value: "" },
    { name: "Uzbekistan", value: "" },
    { name: "Vanuatu", value: "" },
    { name: "Venezuela", value: "" },
    { name: "Vietnam", value: "" },
    { name: "Yemen", value: "" },
    { name: "Zambia", value: "" },
    { name: "Zimbabwe", value: "" }
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
