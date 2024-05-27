//折线图内容
option = {
    // 标题
    title: {
        text: 'PM2.5、PM10、NO2折线图',
        textStyle: {
            color: 'white',
            fontsize: 20,
            fontWeight: "bold",

        },
        padding: 5,
    },
    // 提示框组件
    tooltip: {
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: 'red',
            },
            lineStyle: {
                color: 'red',
            }
        }
    },
    // 图例
    legend: {
        show: true,
        type: "scroll",// 图例的类型 'plain':普通图例  'scroll':可滚动翻页的图例
        data: ['PM2.5', 'PM10', 'NO2'],
        //   type: "plain", 
        icon: "circle",//类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
        top: "2%", // bottom:"20%" // 组件离容器的距离
        left: "35%",
        width: "auto", // 图例组件的宽度
        height: "auto", // 图例组件的高度 height: 150,
        orient: "horizontal", // 图例列表的布局朝向。 'horizontal'水平  'vertical'垂直
        align: "auto", // 图例标记和文本的对齐，auto、right(点在字右）、left(点在字左)
        itemWidth: 15, // 图例标记的图形宽度。
        //itemGap: 120, // 图例每项之间的间隔。
        //itemHeight: 140, //  图例标记的图形高度。
        symbolKeepAspect: true, // 如果图标（可能来自系列的 symbol 或用户自定义的 legend.data.icon）是 path:// 的形式，是否在缩放时保持该图形的长宽比。
        // formatter: function (name) {
        //     return name+"| "+this.option.series[0].data.value
        // },//对图例进行操作
        selectedMode: true, // 图例选择的模式，多个图例‘single’ 或者 ‘multiple’ 使用单选或者多选模式
        inactiveColor: "gray", // 图例关闭时的颜色。
        textStyle: {
            color: "white", // 文字的颜色。
            fontStyle: "normal", // 文字字体的风格。
            fontWeight: "normal", // 文字字体的粗细。 'normal' 'bold'  'bolder' 'lighter'  100 | 200 | 300 | 400...
            fontFamily: "sans-serif", // 文字的字体系列。
            fontSize: 14, // 文字的字体大小。
            lineHeight: 20, // 行高。
            backgroundColor: "transparent", // 文字块背景色,此为透明
            borderColor: "transparent", // 文字块边框颜色。
            borderWidth: 0, // 文字块边框宽度。
            borderRadius: 0, // 文字块的圆角。
            padding: 0, // 文字块的内边距
            shadowColor: "transparent", // 文字块的背景阴影颜色
            shadowBlur: 0, // 文字块的背景阴影长度。
            shadowOffsetX: 0, // 文字块的背景阴影 X 偏移。
            shadowOffsetY: 0, // 文字块的背景阴影 Y 偏移。
            // width: 50, // 文字块的宽度。 默认
            // height: 40, // 文字块的高度 默认
            textBorderColor: "transparent", // 文字本身的描边颜色。
            textBorderWidth: 0, // 文字本身的描边宽度。
            textShadowColor: "transparent", // 文字本身的阴影颜色。
            textShadowBlur: 0, // 文字本身的阴影长度。
            textShadowOffsetX: 0, // 文字本身的阴影 X 偏移。
            textShadowOffsetY: 0, // 文字本身的阴影 Y 偏移。
            // rich: {
            //     a: {
            //         color: "red",
            //         lineHeight: 10,
            //     },
            //     b: {
            //         color: "#fff",
            //         lineHeight: 10,
            //     },
            // }, // 自定富文本样式，与formatter一起使用
        },
    },
    //x轴
    xAxis: {
        boundaryGap: false,// 刻度离纵轴有无间隙，默认true有间距
        type: 'category', //'value' 数值轴，适用于连续数据。 
        //'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。 
        //'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。 
        //'log' 对数轴。适用于对数数据。
        position: 'bottom',  // 'bottom' | 'top'
        name: '时间',// 横轴名称
        nameLocation: "center",//名称的位置
        nameTextStyle: {//名称的属性
            fontSize: 20,
            fontWeight: 'normal',
            fontFamily: 'Microsoft YaHei',
            color: 'white',
            align: 'left',
        },
        nameGap: 30,//坐标轴名称与轴线之间的距离
        nameRotate: 0,//坐标轴名字旋转角度值,
        axisLine: {
            symbol: 'arrow',
        },
        axisLabel: {
            clickable: true,
            textStyle: {
                color: 'white',
                fontSize: '15',
                align: 'center',
            },
            margin: 15,
        },
        axisLine: {
            lineStyle: {
                color: 'red'   //x轴颜色
            },
            symbol: ['none', 'arrow'], //轴线两边的箭头
            symbolSize: [8, 12]  //箭头大小
        },
        data: [{
            value: '0',
            textStyle: {
                color: 'white',
            }
        }],//每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
        splitLine: {//网格线
            show: false,
            lineStyle: {  //属性lineStyle（详见lineStyle）控制线条样式
                color: ['gray'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {   //分隔区域
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
            }
        },
        axisTick: {  // 显示隐藏刻度线
            inside: true, //刻度朝内还是朝外
            alignWithLabel: true   // 刻度线是否显示
        }
    },
    yAxis: {
        type: 'value',
        name: "浓" + "\n\n" + "度",
        nameRotate: 360,
        nameLocation: "middle",//坐标名称显示的位置
        nameTextStyle: {
            color: 'white',
            padding: [2, 20, 0, 0],//调整位置
            fontSize: 20,
        },
        scale: true,//自动适配y轴，不需要必须从0开始 或者选择下边这种设置最大最小值
        min: function (value) { return value.min; },
        max: function (value) { return value.max; },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: 'red'
            },
            symbol: ['none', 'arrow'], //轴线两边的箭头
            symbolSize: [8, 12],  //箭头大小
            axisLabel: {
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: "20",
                },
            },
        },
        splitLine: {//辅助线
            show: true,
            lineStyle: {
                type: 'dashed',   //背景线为虚线
                color: 'rgba(135,140,147,.8)' //左侧显示线
            }
        },
        axisLabel: {//坐标轴刻度标签
            formatter: '{value}',
            color: 'white',
            fontSize: 16,
        },
        axisTick: {  // 显示隐藏刻度线
            inside: true, //刻度朝内还是朝外
            alignWithLabel: true   // 刻度线是否显示
        }
    },
    series: [
        {
            name: 'PM2.5',
            type: 'line',
            data: [],
        },
        {
            name: 'PM10',
            type: 'line',
            data: [],
            color: 'yellow',
        },
        {
            name: 'NO2',
            type: 'line',
            data: [],
            color: 'white',
        }
    ]
};

//导入原始数据的输入函数
function input(e) {
    var files = e.target.files[0];//文件对象
    var file_name = files['name'];//文件名称       
    console.log(file_name);
    //读取文件内容
    var reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = function (e) {
        var data = e.target.result;
        var wb = XLSX.read(data, {
            type: 'binary' // 以二进制流方式读取获得整份excel表格对象
        });
        var sheet_names = wb.SheetNames;//获取excel中所有表名称
        var sheet1_name = sheet_names[0];//获取excel中第一张表名称
        var sheet01_obj = XLSX.utils.sheet_to_json(wb.Sheets[sheet1_name]);//获取excel中第一张表数据，数组类型，每一行数据都是一个对象
        port(sheet01_obj);
    }
}

//导入原始数据的处理函数
function port(obj) {
    var PM2_5max = Math.max.apply(null, PM2_5lie(obj));//PM2.5最大值
    var PM2_5min = Math.min.apply(null, PM2_5lie(obj));//PM2.5最小值
    var PM2_5ave = average(PM2_5lie(obj)).toFixed(4);//PM2.5平均值
    var PM2_5bzpc = bzpc(PM2_5lie(obj)).toFixed(4);//PM2.5标准偏差
    var PM2_5pd = skew(PM2_5lie(obj)).toFixed(4);//PM2.5偏度系数
    var PM2_5fd = kurt(PM2_5lie(obj)).toFixed(4);//PM2.5峰度系数

    var PM10max = Math.max.apply(null, PM10lie(obj));//PM10最大值
    var PM10min = Math.min.apply(null, PM10lie(obj));//PM10最小值
    var PM10ave = average(PM10lie(obj)).toFixed(4);//PM10平均值
    var PM10bzpc = bzpc(PM10lie(obj)).toFixed(4);//PM10标准偏差
    var PM10pd = skew(PM10lie(obj)).toFixed(4);//PM10偏度系数
    var PM10fd = kurt(PM10lie(obj)).toFixed(4);//PM10峰度系数

    var NO2max = Math.max.apply(null, NO2lie(obj));//NO2最大值
    var NO2min = Math.min.apply(null, NO2lie(obj));//NO2最小值
    var NO2ave = average(NO2lie(obj)).toFixed(4);//NO2平均值
    var NO2bzpc = bzpc(NO2lie(obj)).toFixed(4);//NO2标准偏差
    var NO2pd = skew(NO2lie(obj)).toFixed(4);//NO2偏度系数
    var NO2fd = kurt(NO2lie(obj)).toFixed(4);//NO2峰度系数

    document.getElementById('PM25fw').innerText = PM2_5min + '-' + PM2_5max;
    document.getElementById('PM25pj').innerText = PM2_5ave;
    document.getElementById('PM25bz').innerText = PM2_5bzpc;
    document.getElementById('PM25pd').innerText = PM2_5pd;
    document.getElementById('PM25fd').innerText = PM2_5fd;

    document.getElementById('PM10fw').innerText = PM10min + '-' + PM10max;
    document.getElementById('PM10pj').innerText = PM10ave;
    document.getElementById('PM10bz').innerText = PM10bzpc;
    document.getElementById('PM10pd').innerText = PM10pd;
    document.getElementById('PM10fd').innerText = PM10fd;

    document.getElementById('NO2fw').innerText = NO2min + '-' + NO2max;
    document.getElementById('NO2pj').innerText = NO2ave;
    document.getElementById('NO2bz').innerText = NO2bzpc;
    document.getElementById('NO2pd').innerText = NO2pd;
    document.getElementById('NO2fd').innerText = NO2fd;
    addtime(option, timelie(obj));
    option.series[0].data = PM2_5lie(obj);
    option.series[1].data = PM10lie(obj);
    option.series[2].data = NO2lie(obj);
    option.xAxis.axisLabel.interval = timelie(obj).length - 2;
    paint();
}

//获得time的一整列数据
function timelie(obj) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array[i] = obj[i].time;
    }
    return array;
}

//获得PM2.5的一整列数据
function PM2_5lie(obj) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array[i] = obj[i].PM2_5;
    }
    return array;
}

//获得PM10的一整列数据
function PM10lie(obj) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array[i] = obj[i].PM10;
    }
    return array;
}

//获得NO2的一整列数据
function NO2lie(obj) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array[i] = obj[i].NO2;
    }
    return array;
}

//求平均值函数
function average(array) {
    var length = array.length;
    var sum = 0;
    for (var i = 0; i < length; i++) {
        sum += array[i];
    }
    return sum / length;
}

//求标准偏差
function bzpc(array) {
    var ave = average(array);
    var sum = 0;
    var n = array.length;
    for (var i = 0; i < n; i++) {
        sum += Math.pow((array[i] - ave), 2);
    }
    return Math.sqrt(sum / n);
}

//求偏度系数
function skew(array) {
    var ave = average(array);
    var sum1 = 0, sum2 = 0;
    var n = array.length;
    for (var i = 0; i < n; i++) {
        sum1 += Math.pow((array[i] - ave), 3);
    }
    for (var i = 0; i < n; i++) {
        sum2 += Math.pow((array[i] - ave), 2);
    }
    return (sum1 / n) / Math.pow((sum2 / n), 3 / 2);
}

//求峰度系数
function kurt(array) {
    var ave = average(array);
    var sum1 = 0, sum2 = 0;
    var n = array.length;
    for (var i = 0; i < n; i++) {
        sum1 += Math.pow((array[i] - ave), 4);
    }
    for (var i = 0; i < n; i++) {
        sum2 += Math.pow((array[i] - ave), 2);
    }
    return (sum1 / n) / Math.pow((sum2 / n), 2);
}


//导入参照数据的输入函数
function input2(e) {
    var files = e.target.files[0];//文件对象
    var file_name = files['name'];//文件名称       
    console.log(file_name);
    //读取文件内容
    var reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = function (e) {
        var data = e.target.result;
        var wb = XLSX.read(data, {
            type: 'binary' // 以二进制流方式读取获得整份excel表格对象
        });
        var sheet_names = wb.SheetNames;//获取excel中所有表名称
        console.log(sheet_names);
        var sheet1_name = sheet_names[0];//获取excel中第一张表名称
        var sheet01_obj = XLSX.utils.sheet_to_json(wb.Sheets[sheet1_name]);//获取excel中第一张表数据，数组类型，每一行数据都是一个对象
        opennew(sheet01_obj);
    };

}

//对模态框的操作
function opennew(obj) {
    var table1 = document.getElementById('tab');
    table1.innerHTML='';
    if (obj[0].PM2_5 != null) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.style.padding = '2px 2px';
        td2.style.padding = '2px 2px';
        td1.innerText = "time"
        td2.innerText = "PM2.5";
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
        for (var i = 0; i < obj.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td2.style.padding = '2px 2px';
            td1.innerText=obj[i].time;
            td2.innerText = obj[i].PM2_5;
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
        }
    }
    if (obj[0].PM10 != null) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td2.style.padding = '2px 2px';
        td1.innerText = "time"
        td2.innerText = "PM10";
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
        for (var i = 0; i < obj.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td2.style.padding = '2px 2px';
            td1.innerText=obj[i].time;
            td2.innerText = obj[i].PM10;
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
        }
    }
    if (obj[0].NO2 != null) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.style.padding = '2px 2px';
        td2.style.padding = '2px 2px';
        td1.innerText = "time"
        td2.innerText = "NO2";
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
        for (var i = 0; i < obj.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td2.style.padding = '2px 2px';
            td1.innerText=obj[i].time;
            td2.innerText = obj[i].NO2;
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
        }
    }
}


function canzhao() {
    var file = document.getElementById('file01');
    console.log(file);
    var files = file.files[0];//文件对象
    console.log(files);
    var file_name = files['name'];//文件名称                        
    var index = file_name.lastIndexOf(".");
    if (index != -1) {
        file_format = file_name.substr(index + 1).toUpperCase();//文件格式后缀
        if (file_format != 'XLS' && file_format != 'XLSX') {
            alert("只能上传.xls和.xlsx类型的文件!");
        } else {
            //读取文件内容
            var reader = new FileReader();
            reader.readAsBinaryString(files);
            reader.onload = function (e) {
                console.log(e);
                var data = e.target.result;
                console.log(data);
                var wb = XLSX.read(data, {
                    type: 'binary' // 以二进制流方式读取获得整份excel表格对象
                });
                var sheet_names = wb.SheetNames;//获取excel中所有表名称
                console.log(sheet_names);
                var sheet1_name = sheet_names[0];//获取excel中第一张表名称
                var sheet01_obj = XLSX.utils.sheet_to_json(wb.Sheets[sheet1_name]);//获取excel中第一张表数据，数组类型，每一行数据都是一个对象
                console.log(sheet01_obj);
                console.log(sheet01_obj.length);
            }
        }
    }
}

//读取数据功能
function readExcel(file_obj) {
    let reader = new FileReader();
    let file = file_obj.files[0];
    reader.readAsBinaryString(file);
    reader.onload = function (e) {
        let data = e.target.result;
        let wb = XLSX.read(data, { type: 'binary' });
        sheetName = wb.SheetNames[0] // 获取文档中第一个sheet页签的名字
        sheets = wb.Sheets[sheetName] // 获sheet名页签下的数据
        // console.log(sheets);
        const htmlList = XLSX.utils.sheet_to_json(sheets) // sheet页签的内容转化为json数据
        // console.log(htmlList);

        let html = ''
        let state = false // 判断是否表格
        for (const item of htmlList) {
            // 开始渲染表格，设置属性
            if (item.__EMPTY === '        <table>') {
                state = true
                item.__EMPTY = '        <table border="1" id="mytable">'
            }

            // 结束渲染表格
            if (item.__EMPTY === '        </table>') {
                state = false
                html += item.__EMPTY
            }
            if (state === false) continue

            // 渲染格子
            for (const key in item) {
                const element = item[key];
                html += element
            }
        }
        document.getElementById('d1').innerHTML = html
    };
}

//绘制折线图
function paint() {
    var myChart = echarts.init(document.getElementById('alllinebackground'));
    myChart.setOption(option);
}

//添加x轴数据
function addtime(option, time) {
    var Xdata = [];
    for (var i = 0; i < time.length; i++) {
        Xdata.push(time[i]);
    }
    option.xAxis.data = Xdata;
}


//饼图
function paintpie() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main11'));

    myChart.setOption({
        series: [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: [          // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}
