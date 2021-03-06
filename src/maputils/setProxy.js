import * as urlUtils from '@arcgis/core/core/urlUtils'
import config from '@arcgis/core/config'
export const setProx = () => {
  config.request.proxyUrl = '/gisa/Java/proxy.jsp'
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/by_zjd/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_vec/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_img/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gssldt/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_njq/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_sd/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })
  urlUtils.addProxyRule({
    urlPrefix: 'http://121.36.226.49:6080/arcgis/rest/services/GSXM/gsby_zjd/',
    proxyUrl: '/gisa/Java/proxy.jsp'
  })

}