const baseUrl = 'http://127.0.0.1:7001/jiucai/v1/'

const userUrl = baseUrl + 'user/'


const serviceURL = {
   /**登录 */
   login: {
      url: userUrl + 'login',
      method: 'GET'
   },
   /**注册 */
   registry: {
      url: userUrl + 'registry',
      method: 'POST'
   },

    /**完善信息 */
    improveInformation: {
      url: userUrl + 'improveInformation',
      method: 'POST'
   },

   /**验证手机号是否已经被注册 */
   checkPhone: {
      url: baseUrl + 'checkPhone',
      method: 'GET'
   },

   /**股帮新闻列表 */
   gbList: {
      url: "https://admin.gbhome.com/api/v4/common/3in1/discovery",
      method: 'GET'
   },
   /**股帮新闻详情 */
   gbDetail: {
      url: "https://admin.gbhome.com/api/common/zlArticle/detail/",
      method: 'GET'
   },
}
export default serviceURL;