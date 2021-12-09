export const serverip = 'http://10.61.5.41:6080/';
export const serverConfig = {
    mapExtent: {
        xmin: 35480507.9850281,
        ymin: 4104173.18828038,
        xmax: 35490472.4516552,
        ymax: 4112836.35376729
        // xmax: 35828961.40695605,
        // xmin: 35152545.960878834,
        // ymax: 4219708.234019033,
        // ymin: 3852337.6893531457
    },
    dtbaselayer: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gssldt/MapServer',
    wpdt: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/by_zjd/MapServer',
    gsby: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gs_by2000dt/MapServer',
    jyyxdt: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gs_bywpdt/MapServer',
    dwzyx: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/dwziamge/MapServer',
    printUrl: 'http://121.36.226.49:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
    tdlyxz: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/by_zjd/MapServer',
    dzdt: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_vec/MapServer',
    yxdt: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_img/MapServer',
    layerTree: [
        {
            id: 'b',
            label: '白银市',
            children: [
                {
                    id: 'b2',
                    label: '靖远县',
                    region: '县',
                    children: [
                        {
                            id: 'btz',
                            label: '北滩镇',
                            children: [
                                {
                                    id: 'btzfwqq',
                                    label: '房屋确权',
                                    url: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_njq/MapServer',
                                    layrid: 'btzfwqqid'
                                },
                                {
                                    id: 'btzsd',
                                    label: '三调',
                                    url: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_sd/MapServer',
                                    layrid: 'btzsdid'
                                },
                                {
                                    id: 'btzzjd',
                                    label: '宅基地',
                                    url: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_zjd/MapServer',
                                    layrid: 'btzzjdid'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
