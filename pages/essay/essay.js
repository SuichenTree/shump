Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    topText: ["java", "数据库", "前端", "数学英语", "数据结构算法", "其他"],
    dataList: [
      [
        //java
        {
          title: 'java爬虫',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/javaCrawler.md',
          dateTag: "2018-2-7"
        },

        {
          title: 'Junit',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/Junit.md',
          dateTag: "2018-2-7"
        },

        {
          title: 'java面试',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/java%E9%9D%A2%E8%AF%95.md',
          dateTag: "2019-5-25"
        },

        {
          title: 'Tomcat',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/tomcat.md',
          dateTag: "2018-3-8"
        },

        {
          title: '微信小程序中的问题',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/weChatApp.md',
          dateTag: "2019-9-12"
        },

        {
          title: 'Apache Poi',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/poi.md',
          dateTag: "2019-9-12"
        },

        {
          title: '分销系统（简化版本）',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E5%88%86%E9%94%80%E7%B3%BB%E7%BB%9F.md',
          dateTag: "2019-9-20"
        },

        {
          title: '常用工具类（方法）',
          img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/commonTool.md',
          dateTag: "2019-9-21"
        }
      ],
      [
        //数据库
      ],
      [
        //前端
        {
          title: '双飞翼布局',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/Weblayout.md',
          dateTag: "2018-1-7"
        }
      ],
      [
        //数学英语
        {
          title: '长难句解析',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E6%95%B0%E5%AD%A6%E8%8B%B1%E8%AF%AD/%E9%95%BF%E9%9A%BE%E5%8F%A5%E8%A7%A3%E6%9E%90.md',
          dateTag: "2018-6-21"
        }
      ],
      [
        //算法
        {
          title: 'PAT乙级',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/PAT%E4%B9%99%E7%BA%A7.md',
          dateTag: "2018-4-24"
        },
        {
          title: '算法与数据结构技巧',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%8A%80%E5%B7%A7.md',
          dateTag: "2018-6-6"
        },

        {
          title: 'C,C++ 练习题',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/C_C++%E7%BB%83%E4%B9%A0%E9%A2%98.md',
          dateTag: "2018-6-28"
        },

        {
          title: '数据结构练习题',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%BB%83%E4%B9%A0%E9%A2%98.md',
          dateTag: "2019-3-6"
        }],
      [
        //其他
        {
          title: '命令行窗口',
          img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
          url: 'https://www.suichen.xyz/static/blogFile/blogArticle/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AA%97%E5%8F%A3.md',
          dateTag: "2018-4-8"
        }
      ]
    ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  toshow: function (e) {
    console.log("toshow方法", e.currentTarget.dataset.src)
    wx.navigateTo({
      url: '/subEssay/show/show?file_src=' + e.currentTarget.dataset.src,
    })
  },
})