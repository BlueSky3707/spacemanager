
export const attrs={
    njq :{
        name:"农经权",
        titleField: "dkmc",
        fileds:[
          
            {field: "bsm", alias: "标识码"},
            {field: "ysdm", alias: "要素代码"},
            {field: "dkbm", alias: "地块编码"},
            {field: "dkmc", alias: "地块名称"},
             {field: "syqxz", alias: "所属权性质"},
            {field: "dklb", alias: "地块类别"},
            {field: "tdlylx", alias: "土地利用类型"},
            {field: "dldj", alias: "地力等级"},
            {field: "sfjbnt", alias: "是否基本农田"},
            {field: "scmj", alias: "实测面积"},
            {field: "dkxz", alias: "地块西至"},
             {field: "dkdz", alias: "地块东至"},
             {field: "dknz", alias: "地块南至"},
            {field: "dkbz", alias: "地块北至"},
            {field: "zjrxm", alias: "指界人姓名"}
        ]
    },
    sdsj :{
        name:"三调数据",
        titleField: "dlmc",
        fileds:[
            {field: "bsm", alias: "标识码"},
            {field: "ysdm", alias: "要素代码"},
            {field: "tbbh", alias: "图斑编号"},
            {field: "dlbm", alias: "地类编码"},
            {field: "dlmc", alias: "地类名称"},
            {field: "qsxz", alias: "权属性质"},
            {field: "qsdwdm", alias: "权属单位代码"},
            {field: "qsdwmc", alias: "权属单位名称"},
            {field: "zldwdm", alias: "坐落单位代码"},
            {field: "zldwmc", alias: "坐落单位名称"},
            {field: "tbmj", alias: "图斑面积"} ,
            {field: "kcxs", alias: "扣除地类系数"},
            {field: "kcmj", alias: "扣除地类面积"},
            {field: "tbdlmj", alias: "图斑地类面积"},
            {field: "gdlx", alias: "耕地类型"},
            {field: "gdpdjb", alias: "耕地坡度级别"}
        ]
    },
    zjd :{
        name:"宅基地",
        titleField: "zldwmc",
        fileds:[
            {field: "zddm", alias: "占地代码"},
            {field: "zl", alias: "坐落"},
            {field: "zldwmc", alias: "坐落单位名称"},
             {field: "zldwdm", alias: "坐落单位代码"},
            {field: "zdmj", alias: "占地面积"},
            {field: "jzmj", alias: "建筑面积"},
            {field: "qlr", alias: "权利人"},
            {field: "bsm", alias: "标识码"}

        ]
    },
   
   
    

}