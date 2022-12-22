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
    { name: "Afghanistan", value: "0.583" },
    { name: "Albania", value: "-0.313" },
    { name: "Algeria", value: "0.2" },
    { name: "Angola", value: "0.019" },
    { name: "Argentina", value: "0.358" },
    { name: "Armenia", value: "" },
    { name: "Australia", value: "0.466" },
    { name: "Austria", value: "0.279" },
    { name: "Azerbaijan", value: "" },
    { name: "Bahamas", value: "-0.037" },
    { name: "Bahrain", value: "0.319" },
    { name: "Bangladesh", value: "-0.208" },
    { name: "Belarus", value: "" },
    { name: "Belgium", value: "" },
    { name: "Belize", value: "-0.049" },
    { name: "Benin", value: "0.208" },
    { name: "Bhutan", value: "0.148" },
    { name: "Bolivia", value: "0.11" },
    { name: "Botswana", value: "-0.39" },
    { name: "Brazil", value: "0.188" },
    { name: "British Virgin Islands", value: "0.532" },
    { name: "Bulgaria", value: "-0.061" },
    { name: "Burkina Faso", value: "0.306" },
    { name: "Burundi", value: "" },
    { name: "Cambodia", value: "0.291" },
    { name: "Cameroon", value: "0.156" },
    { name: "Canada", value: "1.566" },
    { name: "Cayman Islands", value: "0.073" },
    { name: "Central African Rep.", value: "0.003" },
    { name: "Chad", value: "0.214" },
    { name: "Chile", value: "0.315" },
    { name: "China", value: "0.22" },
    { name: "Colombia", value: "0.142" },
    { name: "Comoros", value: "0.075" },
    { name: "Congo", value: "0.168" },
    { name: "Congo", value: "-0.127" },
    { name: "Costa Rica", value: "0.135" },
    { name: "Croatia", value: "" },
    { name: "Cuba", value: "-0.013" },
    { name: "Cyprus", value: "0.097" },
    { name: "Czech Rep.", value: "" },
    { name: "Denmark", value: "0.304" },
    { name: "Djibouti", value: "0.108" },
    { name: "Dominican Rep.", value: "0.506" },
    { name: "Ecuador", value: "0.074" },
    { name: "Egypt", value: "-0.247" },
    { name: "El Salvador", value: "-0.005" },
    { name: "Equatorial Guinea", value: "0.104" },
    { name: "Eritrea", value: "" },
    { name: "Estonia", value: "" },
    { name: "Ethiopia", value: "" },
    { name: "Fiji", value: "0.178" },
    { name: "Finland", value: "-0.237" },
    { name: "France", value: "0.079" },
    { name: "Gabon", value: "-0.134" },
    { name: "Gambia", value: "0.608" },
    { name: "Georgia", value: "" },
    { name: "Germany", value: "0.293" },
    { name: "Ghana", value: "0.209" },
    { name: "Greece", value: "-0.203" },
    { name: "Greenland", value: "-0.37" },
    { name: "Guatemala", value: "-0.029" },
    { name: "Guinea", value: "0.329" },
    { name: "Guinea-Bissau", value: "0.447" },
    { name: "Guyana", value: "0.125" },
    { name: "Haiti", value: "0.415" },
    { name: "Honduras", value: "0.076" },
    { name: "Hungary", value: "0.154" },
    { name: "Iceland", value: "-0.978" },
    { name: "India", value: "0.05" },
    { name: "Indonesia", value: "0.16" },
    { name: "Iran", value: "0.615" },
    { name: "Iraq", value: "0.163" },
    { name: "Ireland", value: "0.355" },
    { name: "Isle of Man", value: "0.271" },
    { name: "Israel", value: "-0.228" },
    { name: "Italy", value: "-0.291" },
    { name: "Jamaica", value: "0.763" },
    { name: "Japan", value: "-0.637" },
    { name: "Jordan", value: "-0.202" },
    { name: "Kazakhstan", value: "" },
    { name: "Kenya", value: "0.169" },
    { name: "Korea", value: "-0.752" },
    { name: "Kuwait", value: "0.156" },
    { name: "Latvia", value: "" },
    { name: "Lebanon", value: "0.021" },
    { name: "Lesotho", value: "-0.277" },
    { name: "Liberia", value: "0.138" },
    { name: "Libya", value: "0.026" },
    { name: "Lithuania", value: "" },
    { name: "Luxembourg", value: "" },
    { name: "Madagascar", value: "0.072" },
    { name: "Malawi", value: "-0.142" },
    { name: "Malaysia", value: "0.236" },
    { name: "Maldives", value: "0.118" },
    { name: "Mali", value: "0.422" },
    { name: "Malta", value: "-0.317" },
    { name: "Mauritania", value: "0.824" },
    { name: "Mauritius", value: "0.15" },
    { name: "Mexico", value: "0.145" },
    { name: "Moldova", value: "" },
    { name: "Monaco", value: "-0.061" },
    { name: "Mongolia", value: "0.234" },
    { name: "Montenegro", value: "" },
    { name: "Morocco", value: "0.495" },
    { name: "Mozambique", value: "-0.201" },
    { name: "Myanmar", value: "0.324" },
    { name: "Namibia", value: "0.077" },
    { name: "Nepal", value: "-0.059" },
    { name: "Netherlands", value: "0.333" },
    { name: "New Caledonia", value: "0.168" },
    { name: "New Zealand", value: "0.417" },
    { name: "Nicaragua", value: "0.205" },
    { name: "Niger", value: "0.099" },
    { name: "Nigeria", value: "0.205" },
    { name: "Norway", value: "-0.483" },
    { name: "Oman", value: "0.442" },
    { name: "Pakistan", value: "0.336" },
    { name: "Panama", value: "0.313" },
    { name: "Papua New Guinea", value: "0.239" },
    { name: "Paraguay", value: "0.345" },
    { name: "Peru", value: "0.107" },
    { name: "Philippines", value: "0.2" },
    { name: "Poland", value: "0.443" },
    { name: "Portugal", value: "0.552" },
    { name: "Puerto Rico", value: "0.572" },
    { name: "Qatar", value: "0.529" },
    { name: "Romania", value: "0.038" },
    { name: "Russia", value: "" },
    { name: "Rwanda", value: "" },
    { name: "San Marino", value: "-0.333" },
    { name: "Saudi Arabia", value: "0.063" },
    { name: "Senegal", value: "0.758" },
    { name: "Serbia", value: "" },
    { name: "Sierra Leone", value: "0.211" },
    { name: "Singapore", value: "0.402" },
    { name: "Slovenia", value: "" },
    { name: "Somalia", value: "-0.1" },
    { name: "South Africa", value: "-0.339" },
    { name: "Spain", value: "0.321" },
    { name: "Sri Lanka", value: "0.276" },
    { name: "Sudan", value: "" },
    { name: "Suriname", value: "0.245" },
    { name: "Sweden", value: "-0.223" },
    { name: "Switzerland", value: "-0.023" },
    { name: "Tajikistan", value: "" },
    { name: "Tanzania", value: "0.395" },
    { name: "Thailand", value: "0.321" },
    { name: "Togo", value: "0.199" },
    { name: "Tonga", value: "0.209" },
    { name: "Trinidad and Tobago", value: "0.335" },
    { name: "Tunisia", value: "0.107" },
    { name: "Turkey", value: "0.396" },
    { name: "Turkmenistan", value: "" },
    { name: "Uganda", value: "0.583" },
    { name: "Ukraine", value: "" },
    { name: "United Arab Emirates", value: "0.355" },
    { name: "United Kingdom", value: "0.165" },
    { name: "United States", value: "0.871" },
    { name: "Uruguay", value: "0.517" },
    { name: "Uzbekistan", value: "" },
    { name: "Vanuatu", value: "0.062" },
    { name: "Venezuela", value: "0.183" },
    { name: "Vietnam", value: "0.452" },
    { name: "Yemen", value: "0.047" },
    { name: "Zambia", value: "-0.112" },
    { name: "Zimbabwe", value: "-0.328" }
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
