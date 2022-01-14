
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
            {field: "zjrxm", alias: "指界人姓名"},
            { field: 'kjzb', alias: '空间坐标' },
            { field: 'scmjm', alias: '实测面积亩'}
            // { field: 'fbfbm', alias: '发包方编码'},
            // { field: 'cbjyqqdfs', alias: '承包经营权取得方式'},
            // { field: 'htmj', alias: '合同面积'},
            // { field: 'cbhtbm', alias: '承包合同编码' },
            // { field: 'lzhtbm', alias: '流转合同编码'},
            // { field: 'cbjyqzbm', alias: '承包经营权证编码' },
            // { field: 'yhtmj', alias: '原合同面积'},
            // { field: 'htmjm', alias: '合同面积亩'},
            // { field: 'yhtmjm', alias: '原合同面积亩'},
            // { field: 'sfqqqg', alias: '是否确权确股'},
            // { field: 'xian', alias: '县' },
            // { field: 'xiang', alias: '乡' },
            // { field: 'cun', alias: '村'},
            // { field: 'fbfmc', alias: '发包方名称'}
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
                {field: "tbmj", alias: "图斑面积"}, 
                {field: "kcxs", alias: "扣除地类系数"},
                {field: "kcmj", alias: "扣除地类面积"},
                {field: "tbdlmj", alias: "图斑地类面积"},
                {field: "gdlx", alias: "耕地类型"},
                {field: "gdpdjb", alias: "耕地坡度级别"},
                 {field: "tbybh",alias: "图斑预编号"},
                 {field: "kcdlbm",alias: "扣除地类编码"},
                 {field: "xzdwkd",alias: "线状地物宽度"},
                 {field: "tbxhdm",alias: "图斑细化代码"},
                 {field: "tbxhmc",alias: "图斑细化名称"},
                 {field: "zzsxdm",alias: "种植属性代码"},
                 {field: "zdxxmc",alias: "种植属性名称"},
                 {field: "gddj",alias: "耕地等别"},
                 {field: "frdbs",alias: "飞入地标"},
                 {field: "czcsxm",alias: "城镇村属性码"},
                 {field: "sjnf",alias: "数据年份"},
                 {field: "bz",alias: "备注"},
                 {field: "mssm",alias: "描述说明"},	
                 {field: "hdmc",alias: "海岛名称"}
        ]
    },
    zjd :{
        name:"宅基地",
        titleField: "zldwmc",
        fileds:[
            {field: "bsm", alias: "标识码",width:"60"},
            {field: "zddm", alias: "宗地代码"  },
            {field: "ysdm", alias:  "要素代码"  },
            {field: "zl", alias: "坐落",width:"300"},
            {field: "zldwmc", alias: "坐落单位名称",width:"150"},
            {field: "zldwdm", alias: "坐落单位代码",width:"120"},
            {field: "zdmj", alias: "宗地面积"  },
            {field: "mjdw", alias: "面积单位"  },
            {field: "jzmj", alias: "建筑面积"  },
            {field: "qlr", alias: "权利人"  },
            {field: "qllx", alias: "权利类型"  }, 
            {field: "jg", alias: "价格"  },
            {field: "bdcdyh", alias: "不动产单元号"  },
            {field: "zdtzm", alias: "宗地特征码"  },  
            {field: "yt", alias: "用途"  },
            
            {field: "tfh", alias: "图幅号"  },
            {field: "syqxq", alias: "使用期限起"  },
            {field: "zdt", alias: "宗地图"  },
            {field: "qlsdfs", alias: "权利设定方式"  },
            {field: "zt", alias: "状态"  },
            {field: "jzmd", alias: "建筑密度"  },
            {field: "jzxg", alias: "建筑限高"  },
            {field: "zdszd", alias: "宗地四至-东"  }, 
            {field: "zdszn", alias: "宗地四至-南"  },  
            {field: "zdszx", alias: "宗地四至-西"  },
            {field: "zdszb", alias: "宗地四至-北"  },	
            {field: "ejl", alias: "容积率"  },   
            {field: "dj", alias: "等级"  },
            {field: "dzwdm", alias: "定着物代码"  },
            {field: "djh", alias: "地籍号"  },    
            {field: "dah", alias: "档案号"  }, 
            {field: "bz", alias: "备注"  },   
            {field: "qlxz", alias: "权利性质"  },
            {field: "qsxz", alias: "权属性质"  }, 
            {field: "zdtzm1", alias: "宗地特征码1"  }, 
            
            {field: "suoyqr", alias: "所有权人"  },
            {field: "bsid", alias: "标识ID"  },
            {field: "bdclx", alias: "不动产类型"  },
            {field: "fhdm", alias: "符号代码"  },
            {field: "jzwzdmj", alias: "建筑物占地面积"  },
            {field: "sflsz", alias: "是否临时宗"  },
            {field: "fj", alias: "附记"  },
            {field: "ytqx", alias: "用途期限"  },
            {field: "syqxz", alias: "使用期限止"  },
            {field: "txmj", alias: "图形面积"  },
            {field: "sfygxyw", alias: "是否已更新业务"  },
            {field: "lzry", alias: "落宗人员"  },
            {field: "bdcqzh", alias: "不动产权证号"  },
            {field: "xgsj", alias: "修改时间"  },
            {field: "txdz", alias: "通讯地址"  },
            {field: "xjyt", alias: "实际用途"  },
            {field: "zzh", alias: "主宗号"  },
            {field: "zzmj", alias: "主宗面积"  },
            {field: "cjsj", alias: "创建时间"  },
            {field: "pzmj", alias: "批准面积"  },
            {field: "sfycl", alias: "是否已处理"  },
            {field: "qlrzjbh", alias: "权利人证件编号"  },
            {field: "cdbs", alias: "重叠标识"  },
            {field: "fwpzmj", alias: "房屋批准面积"  },
            {field: "sfpg", alias: "是否棚改"  },
            {field: "sjly", alias: "数据来源"  },
            {field: "dzjghm", alias: "电子监管号码"  }

        ]
    },
   
   jbnt:{
    name:"基本农田",
    titleField: "bsm",
    fileds:[
    {field: "bsm", alias: "标识码"},
    {field: "ysdm", alias: "要素代码"},           
    {field: "jbnttbbh", alias: "基本农田图斑编号"},
    {field: "tbbh", alias: "图斑编号"},	
    {field: "dlbm", alias: "地类编码"},
    {field: "dlmc", alias: "地类名称"},	
    {field: "qsxz", alias: "权属性质"},	
    {field: "qsdwdm", alias: "权属单位代码"},	
    {field: "qsdwmc", alias: "权属单位名称"},	
    {field: "zldwdm", alias: "坐落单位代码"},	
    {field: "zldwmc", alias: "坐落单位名称"},	
    {field: "gdlx", alias: "耕地类型"},	
    {field: "jbntlx", alias: "基本农田类型"},	
    {field: "pdjb", alias: "坡度级别"},	
    {field: "kclx", alias: "扣除类型"},	
    {field: "kcdlbm", alias: "扣除地类编码	"},
    {field: "tkxs", alias: "扣除地类系数"},	
    {field: "tkmj", alias: "扣除地类面积"},	
    {field: "tbmj", alias: "图斑面积"},	
    {field: "jbntmj", alias: "基本农田面积"},
    {field: "dlbz", alias: "地类备注"}	
]
   },
   
   lqsj:{
    name:"两区数据",
    titleField: "bsm",
    fileds:[ {field: "bsm", alias: "标识码"  },
        {field: "ysdm", alias: "要素代码"  },	
        {field: "lqpkdm", alias: "两区片块代码"  },	
        {field: "lqlx", alias: "两区类型"  },	
        {field: "qyhflx", alias: "区划区域类型"  },	
        {field: "lqdkdm", alias: "两区地块代码"  },	
        {field: "lqdkmc", alias: "两区地块名称"  },	
        {field: "lqdkmj", alias: "两区地块面积"  },	
        {field: "lqdkmjm", alias: "两区地块面积亩"  },	
        {field: "zldjdm", alias: "质量等级代码"  },	
        {field: "qsdwdm", alias: "权属单位代码"  },	
        {field: "qsdwmc", alias: "权属单位名称"  },	
        {field: "pdjb", alias: "坡度级别"  },	
        {field: "sfgbznt", alias: "是否高标准农田"  },	
        {field: "jyztmc", alias: "经营主体名称"  },	
        {field: "jyztlx", alias: "经营主体类型"  },	
        {field: "frdbs", alias: "飞入地标识"  },	
        {field: "bz", alias: "备注"  }]
    },
    ld:{
        name:"林地",
        titleField: "xingming",
        fileds:[
            {field: "sheng", alias: "所在省"  },
            {field: "shi", alias: "所在市"  },
            {field: "xian", alias: "所在县"  },
             {field: "xiang", alias: "所在乡"  },
            {field: "cun", alias: "所在村"  },
            {field: "tfh", alias: "图幅号"  },
            {field: "xingming", alias: "姓名"  }
         ]
    }

}