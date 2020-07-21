import * as echarts from '../../ec-canvas/echarts.js';

var option_pie = {
  backgroundColor: 'white',
  tooltip: {
    trigger: 'item',
    formatter: '{b}：{c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: ['正确率', '错误率']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: [40, 70],
      center: ['50%', '50%'],
      roseType: 'radius', //是否展示为玫瑰图,
      label: {
        formatter: '{b}:{d}%',
        fontSize:13
      },
      data: [
        { value: 10, name: '正确率' },
        { value: 5, name: '错误率' }
      ]
    }
  ]
};

var option_line = {
  backgroundColor: 'white',
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 60
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    textStyle:{
      fontSize:13
    },
    left: 'center',
    top: 'bottom',
    data: ['总数', '正确', '错误']
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320, 111, 122, 333, 444, 564, 523, 663],
      type: 'line',
      smooth: true,
      name: "总数"
    },
    {
      data: [320, 952, 561, 994, 1221, 1120, 1020, 111, 112, 333, 424, 534, 529, 653],
      type: 'line',
      smooth: true,
      name: "正确"
    }
    ,
    {
      data: [620, 352, 501, 1094, 1111, 1720, 1520, 101, 152, 313, 414, 514, 523, 643],
      type: 'line',
      smooth: true,
      name: "错误"
    }
  ]
};

//初始化饼图
function initPieChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  chart.setOption(option_pie);
  return chart;
}

//初始化折线图
function initLineChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var colors = ['#5793f3', '#d14a61', '#675bba'];
  chart.setOption(option_line);
  return chart;
}

Page({
  data: {
    isShow:false,
    ec: {
      onInit: initPieChart
    },
    ac:{
      onInit: initLineChart
    },
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    }
    ]
  }
});