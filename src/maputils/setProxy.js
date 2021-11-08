import * as urlUtils from '@arcgis/core/core/urlUtils'
import config from '@arcgis/core/config'
export const setProx = () => {
  config.request.proxyUrl = '/api/Java/proxy.jsp'
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gs_bywpdt/',
    proxyUrl: '/severapi/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/dwziamge/',
    proxyUrl: '/severapi/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/by_zjd/',
    proxyUrl: '/severapi/Java/proxy.jsp'
  })
}