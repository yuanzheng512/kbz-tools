let XLSX = require('js-xlsx')

//导出excel
function geneExcel(input1, output1) {
    /** newJson数据格式：
     *  [{paramA:1},{paramB:2}...]
     */
    let newJson = []
    for (const [key, value] of Object.entries(output1)) {
        newJson.push({ paramName: key, value: value })
    }


    let tmpdata = newJson[0];
    newJson.unshift({});
    let keyMap = []; //获取keys
    //keyMap =Object.keys(json[0]);
    for (let k in tmpdata) {
        keyMap.push(k);
        newJson[0][k] = k;
    }
    let tmpdata = [];//用来保存转换好的json 
    newJson.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
        v: v.v
    });
    let outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
    console.log(tmpdata);



    /**
     * workboot标准写法
     * {
     *  SheetName:['SheetName'],
     *  Sheets:{
     *      'SheetName':{
     *          '!ref':'A1:E4', //必须要有这个范围才能输出，否则导出的 excel 会是一个空表
     *          A1:{v:'id'},
     *          A2:{v:'name'},
     *      }
     *  }
     * }
     */
    let tmpWB = {
        SheetNames: ['mySheet'], //保存的表标题
        Sheets: {
            'mySheet': Object.assign({},
                tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
        }
    };
    //导出excel
    XLSX.writeFile(tmpWB, 'output.xlsx');



}