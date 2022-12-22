var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "rgba(0,0,0,0.2)",
        width: 1,
        type: "solid"
      }
    }
  },
  legend: {
    data: [
      "China",
      "United Kingdom",
      "United States",
      "Australia",
      "Russia",
      "Brazil"
    ]
  },
  singleAxis: {
    top: 50,
    bottom: 50,
    axisTick: {},
    axisLabel: {},
    type: "time",
    axisPointer: {
      animation: true,
      label: {
        show: true
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        opacity: 0.2
      }
    }
  },
  series: [
    {
      type: "themeRiver",
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: "rgba(0, 0, 0, 0.8)"
        }
      },
      data: [
        ["1998", 181806.3058, "China"],
        ["1999", 166103.8343, "China"],
        ["2000", 157773.229, "China"],
        ["2001", 157753.9115, "China"],
        ["2002", 154860.8067, "China"],
        ["2003", 148666.4465, "China"],
        ["2004", 144187.6586, "China"],
        ["2005", 138898.2726, "China"],
        ["2006", 126623.0404, "China"],
        ["2007", 107996.4973, "China"],
        ["2008", 85673.91078, "China"],
        ["2009", 89099.17006, "China"],
        ["2010", 82299.88022, "China"],
        ["2011", 73591.16432, "China"],
        ["2012", 68422.00433, "China"],
        ["2013", 64992.23478, "China"],
        ["2014", 60169.28976, "China"],
        ["2015", 59126.64081, "China"],
        ["2016", 62086.14007, "China"],
        ["2017", 60427.19807, "China"],
        ["2018", 55831.84646, "China"],
        ["1998", 29488.0524, "United Kingdom"],
        ["1999", 29299.70448, "United Kingdom"],
        ["2000", 29835.65829, "United Kingdom"],
        ["2001", 31809.59781, "United Kingdom"],
        ["2002", 30571.23691, "United Kingdom"],
        ["2003", 27817.5977, "United Kingdom"],
        ["2004", 23693.17357, "United Kingdom"],
        ["2005", 22388.10046, "United Kingdom"],
        ["2006", 20548.51336, "United Kingdom"],
        ["2007", 17985.58666, "United Kingdom"],
        ["2008", 17406.93003, "United Kingdom"],
        ["2009", 19724.70923, "United Kingdom"],
        ["2010", 18855.32169, "United Kingdom"],
        ["2011", 16389.29732, "United Kingdom"],
        ["2012", 16375.33452, "United Kingdom"],
        ["2013", 15622.70645, "United Kingdom"],
        ["2014", 14265.10573, "United Kingdom"],
        ["2015", 15406.51783, "United Kingdom"],
        ["2016", 15664.00763, "United Kingdom"],
        ["2017", 14644.24893, "United Kingdom"],
        ["2018", 13182.2931, "United Kingdom"],
        ["1998", 63451.85834, "United States"],
        ["1999", 59294.63509, "United States"],
        ["2000", 55498.99458, "United States"],
        ["2001", 51774.08756, "United States"],
        ["2002", 54945.24749, "United States"],
        ["2003", 51244.75909, "United States"],
        ["2004", 50504.07862, "United States"],
        ["2005", 47126.39353, "United States"],
        ["2006", 43517.13977, "United States"],
        ["2007", 42215.2229, "United States"],
        ["2008", 38005.62124, "United States"],
        ["2009", 37528.66618, "United States"],
        ["2010", 36534.53294, "United States"],
        ["2011", 35427.36758, "United States"],
        ["2012", 33897.5339, "United States"],
        ["2013", 33202.38235, "United States"],
        ["2014", 31505.78013, "United States"],
        ["2015", 31207.83393, "United States"],
        ["2016", 31467.80148, "United States"],
        ["2017", 29548.44591, "United States"],
        ["2018", 27795.72059, "United States"],
        ["1998", 64197.07915, "Australia"],
        ["1999", 65964.03358, "Australia"],
        ["2000", 65377.98633, "Australia"],
        ["2001", 71679.42406, "Australia"],
        ["2002", 71396.36801, "Australia"],
        ["2003", 60805.6637, "Australia"],
        ["2004", 50340.60228, "Australia"],
        ["2005", 44124.29016, "Australia"],
        ["2006", 42376.55049, "Australia"],
        ["2007", 37475.51871, "Australia"],
        ["2008", 33280.82353, "Australia"],
        ["2009", 34276.97948, "Australia"],
        ["2010", 29838.46401, "Australia"],
        ["2011", 23680.18109, "Australia"],
        ["2012", 21631.28905, "Australia"],
        ["2013", 21726.38449, "Australia"],
        ["2014", 22790.29714, "Australia"],
        ["2015", 26022.79132, "Australia"],
        ["2016", 28185.67716, "Australia"],
        ["2017", 26475.30839, "Australia"],
        ["2018", 25728.0477, "Australia"],
        ["1998", 303847.7562, "Russia"],
        ["1999", 399547.1263, "Russia"],
        ["2000", 316686.8095, "Russia"],
        ["2001", 277536.5786, "Russia"],
        ["2002", 248123.6157, "Russia"],
        ["2003", 202930.3241, "Russia"],
        ["2004", 149665.3182, "Russia"],
        ["2005", 119756.5692, "Russia"],
        ["2006", 97609.02409, "Russia"],
        ["2007", 75735.72175, "Russia"],
        ["2008", 60606.03115, "Russia"],
        ["2009", 76168.6285, "Russia"],
        ["2010", 64905.42312, "Russia"],
        ["2011", 56341.05411, "Russia"],
        ["2012", 53292.89355, "Russia"],
        ["2013", 51244.41073, "Russia"],
        ["2014", 56886.88941, "Russia"],
        ["2015", 78066.67817, "Russia"],
        ["2016", 81244.44047, "Russia"],
        ["2017", 66561.10131, "Russia"],
        ["2018", 64014.47029, "Russia"],
        ["1998", 35754.21038, "Brazil"],
        ["1999", 51038.25133, "Brazil"],
        ["2000", 46674.11704, "Brazil"],
        ["2001", 53651.27648, "Brazil"],
        ["2002", 60078.42971, "Brazil"],
        ["2003", 51419.01253, "Brazil"],
        ["2004", 44681.2844, "Brazil"],
        ["2005", 34369.60902, "Brazil"],
        ["2006", 28016.81175, "Brazil"],
        ["2007", 24371.71816, "Brazil"],
        ["2008", 21067.09917, "Brazil"],
        ["2009", 21431.21386, "Brazil"],
        ["2010", 17496.1127, "Brazil"],
        ["2011", 14973.1254, "Brazil"],
        ["2012", 16548.9214, "Brazil"],
        ["2013", 17742.68445, "Brazil"],
        ["2014", 18926.30068, "Brazil"],
        ["2015", 24332.96991, "Brazil"],
        ["2016", 23285.96132, "Brazil"],
        ["2017", 20706.46779, "Brazil"],
        ["2018", 20744.55923, "Brazil"]
      ]
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
