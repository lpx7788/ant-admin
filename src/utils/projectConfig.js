/**
 * 项目配置文件
 * 配置状态码
 * 请求URL等
 */

class projectConfig {

    // 运营后台接口地址-开发
    //static AIO_OPERATION_PLATFORM_BASE_URL = 'http://127.0.0.1:9090';
    // 运营后台接口地址-测试
    //static AIO_OPERATION_PLATFORM_BASE_URL = 'http://192.168.0.233:9090';
    // 运营后台接口地址-生产
    //static AIO_OPERATION_PLATFORM_BASE_URL = 'http://120.79.251.137:8082';


    // 在环境变量中获得配置的连接地址
    static AIO_OPERATION_PLATFORM_BASE_URL = process.env.ADMIN_HOST_NAME;
    // static AIO_OPERATION_PLATFORM_BASE_URL ='http://192.168.0.172:9090';
    

    // AIO,websocket,接口
    // static AIO_WEBSOCKET_SERVICE_URL = 'ws://192.168.0.173/webSk/service';
    static AIO_WEBSOCKET_SERVICE_URL = 'ws://192.168.0.233:8080/webSk/service';
    // static AIO_WEBSOCKET_SERVICE_URL = 'ws://127.0.0.1:8080/webSk/service';


    // 认证授权书地址下载
    //static AUTHORIZATION_URL = 'http://192.168.0.233:8080/company/authorizationFile';
    // 正式环境
    //static AUTHORIZATION_URL = 'http://aio.manytrader.net/company/authorizationFile';
    // 从环境变量中获得配置的url
    static AUTHORIZATION_URL = process.env.AUTHORIZATION_URL;




    // 返回状态码=========================.start
    static CODE_OK = 200; //200 正常返回值
    static CODE_METHOD_NOT_ALLOWED = 405; //405 处理Http method使用不正确
    static CODE_NOT_FOUND = 404; //404 资源找不到异常
    static CODE_INTERNAL_SERVER_ERROR = 500; //500 系统内部异常
    static CODE_NO_CONTENT = 204; //204 空异常(必须给值但是没有给值)
    static CODE_UNAUTHORIZED = 456; //401 未授权(没有登录 session失效 token失效等)

    // 平台状态码
    static SYSTEM_SUCESS_CODE = '0000';
    static SYSTEM_LOG_OUT_CODE = '2000';


    //1.2版本 

    static URL_V12_QUERY_ORDERCHART= '/v1.2/index/queryOrderChart' //最近一周交易前十买家公司图接口
    static URL_V12_QUERY_ORDERDETAIL= '/v1.2/index/queryOrderDetail' //订单成交明细（最近一周）
    static URL_V12_QUERY_ORDEMAKE= 'v1.2/index/queryOrderMake' //订单成交情况（最近一周）

    static URL_V12_QUERY_PREADDRESSLIST= 'v1.2/PreAddressManagement/queryPreAddressList'//获取前置地址列表
    static URL_V12_SAVE_PREADDRESS= 'v1.2/PreAddressManagement/savePreAddress' //添加前置地址
    static URL_V12_DELETE_PREADDRESS= 'v1.2/PreAddressManagement/deletePreAddress' //删除前置地址
    static URL_V12_FUTURESCOMPANYLIST= 'autoHedge/futuresCompanyList' //期货公司列表


    static URL_V12_CATEGORYLIST= 'autoHedge/categoryList' //获取套保品种接口
    static URL_V12_AOTUHEDGELIST= 'autoHedge/queryList' //获取套保账户

    static URL_V12_QUERYAOTUHEDGELIST= 'v1.2/CompanyAutoHedgeRule/queryAutoHedgeRuleList' //自动套保品种列表接口
    static URL_V12_GET_COMPANYlIST= 'v1.0/company/getCompanyList' //查询公司列表
    static URL_V12_GET_SAVEAUTOHEDGERULE= 'v1.2/CompanyAutoHedgeRule/saveAutoHedgeRule' //编辑品种
    static URL_V12_AUTOHEDGE_RULEDELETE= 'autoHedge/rule/delete' //自动套保规则删除
    static REQUEST_URL_AUTOHEDGE_OPEN = '/autoHedge/openAutoHedge' // 开启/关闭自动套保
    static  URL_V12_AUTOCANCEL_TIME_LIST = '/autoHedge/autoCancelTimeList'  // 自动撤单时间列表
    static  URL_V12_AUTOHEDGE_RULE_SAVE_UPDATE = '/autoHedge/rule/saveOrUpdate'    // 套保策略--新增或修改
    static URL_V12_AUTOHEDGE_AUTOCANCEL_TIME_LIST = '/autoHedge/autoCancelTimeList' // 自动撤单时间列表


    // 返回状态码=========================.end

    // 用户中心_用户管理_用户维护模块,请求URL配置====================.start
    // 登录url
    static URL_API_USER_LOGIN = '/user/login';
    // 用户权限测试url
    static URL_API_USER_INFO = '/api-user/user-admin/info';
    // 退出登录url
    static URL_API_USER_LOGOUT = '/api-user/user-admin/logout';
    // 验证登录账号
    static URL_API_USER_VALIDATE_ACCOUNT = '/api-user/user-admin/validateAccount';
    // 验证登录密码
    static URL_API_USER_VALIDATE_PASSWORD = '/api-user/user-admin/validatePassword';
    static URL_API_USER_GET_USER_INFO = '/api-user/user-admin/permission';
    // 修改用户信息/设置平台买手
    static URL_V10_USER_EDIT = '/v1.0/user/company/editUser'

    /////////////////////////////运营后台-企业管理模块接口配置.start////////////////////////////////////////////
    // 获取企业列表
    static URL_V10_COMPANY_QUERY = '/v1.0/company/query';
    // 获取企业详情
    static URL_V10_COMPANY_DETAIL = '/v1.0/company/detail';
    // 企业编辑
    static URL_V10_COMPANY_EDIT = '/v1.0/company/edit';
    // 获取已经注册的手机号码
    static URL_V10_REGISTER_PHONE = '/v1.0/company/registerPhone';
    // 企业入驻
    static URL_V10_COMPANY_JOIN = '/v1.0/company/join';
    // 企业-用户列表查询
    static URL_V10_USER_COMPANY_QUERY = '/v1.0/user/company/query';
    // 企业-用户详情表
    static URL_V10_USER_COMPANY_DETAIL = '/v1.0/user/company/detail';
    // 导出企业数据
    static URL_V10_COMPANY_EXPORT_DATA = process.env.ADMIN_HOST_NAME +'/v1.0/company/exportData';
    // 导出用户数据
    static URL_V10_USER_COMPANY_EXPORT_DATA = process.env.ADMIN_HOST_NAME +'/v1.0/user/company/exportData';

    // 获取企业客户数据
    static URL_V11_COMPANY_CUSTOMERS = '/v1.1/company/customers';
    // 获取企业供应商数据
    static URL_V11_COMPANY_SUPPLIERS = '/v1.1/company/suppliers';
    // 获取企业员工数据
    static URL_V10_COMPANY_QUERY_USER_COMPANY = '/v1.0/user/company/queryUserCompany'
    // 查询积分设置列表
    static URL_V11_INTEGRAL_LIST_QUERY = '/v1.1/company/queryIntegralList'
    // 积分设置添加/修改
    static URL_V11_ADD_REWARD_INTEGRAL = '/v1.1/company/addRewardIntegral'
    // 删除公司积分奖励设置
    static URL_V11_DELETE_INTEGRAL = '/v1.1/company/deleteIntegral'
    // 积分设置页面获取交易品种
    static URL_INTEGRAL_CATEGORY_QUERY = '/businessFollowUp/queryIntegralCategory'

    ////////////////////////////运营后台-企业管理模块接口配置.end////////////////////////////////////////////




    


    /////////////////////////////运营后台-订单管理模块接口配置.start////////////////////////////////////////////
    static URL_V10_ORDER_LIST = '/v1.0/order/query';
    // 订单详情
    static URL_V10_ORDER_DETAIL = 'v1.0/order/detail';
    // 导出订单数据
    static URL_V10_ORDER_EXPORT_DATA = process.env.ADMIN_HOST_NAME +'/v1.0/order/exportData';

    /////////////////////////////运营后台-订单管理模块接口配置.end////////////////////////////////////////////




    /////////////////////////////运营后台-资讯管理模块接口配置.start////////////////////////////////////////////
    static URL_V10_INDUSTRY_INFORMATION_RELEASE = '/v1.0/industryInformation/release';
    // 资讯来源数组
    static URL_V10_INDUSTRY_INFORMATION_CATEGORY_ARR = '/v1.0/industryInformation/categoryArr';
    // 资讯编辑者
    static URL_V10_INDUSTRY_INFORMATION_EDITOR_ARR = '/v1.0/industryInformation/editorArr';
    // 资讯查询
    static URL_V10_INDUSTRY_INFORMATION_QUERY = '/v1.0/industryInformation/query';
    // 资讯查询
    static URL_V10_INDUSTRY_INFORMATION_DISPLAY = '/v1.0/industryInformation/display';
    // 资讯查询
    static URL_V10_INDUSTRY_INFORMATION_TOPPED = '/v1.0/industryInformation/topped';
    // 资讯详情
    static URL_V10_INDUSTRY_INFORMATION_DETAIL = '/v1.0/industryInformation/detail';
    // 编辑资讯
    static URL_V10_INDUSTRY_INFORMATION_EDIT = '/v1.0/industryInformation/edit';
    // 编辑资讯,删除资讯,单个附件 /delete/attachmentFile
    static URL_V10_INDUSTRY_INFORMATION_DELETE_ATTACHMENT_FILE = '/v1.0/industryInformation/deleteAttachmentFile';
    // 删除资讯
    static URL_V10_INDUSTRY_INFORMATION_DELETE = '/v1.0/industryInformation/delete';
    // 批量删除资讯
    static URL_V10_INDUSTRY_INFORMATION_BATCH_DELETE = '/v1.0/industryInformation/batch/delete';
    /////////////////////////////运营后台-资讯管理模块接口配置.end////////////////////////////////////////////



    /////////////////////////////运营后台-资讯管理模块接口配置.start////////////////////////////////////////////
    static URL_V10_APP_COUNT_INDEX_DATA = '/v1.0/app/count';

    /////////////////////////////运营后台-资讯管理模块接口配置.end////////////////////////////////////////////





    /////////////////////////////aio-企业管理模块接口配置.start////////////////////////////////////////////
    // 企业审核
    static URL_COMPANY_EXAMINE_ADMIN= '/company/examine/admin';
    // 消息查询
    static URL_MESSAGE_QUERY = '/message/query'


    ////////////////////////////aio-企业管理模块接口配置.end////////////////////////////////////////////


    /////////////////////////////aio-双乾支付测试接口-调试使用,与运营后台无关.start////////////////////////////////////////////
    static SQ_TO_REGITER = '/sqPay/toRegister';


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////广告轮播////////////////////////
    // 新建轮播
    static URL_V11_ADVERTISEMENT_ADD = '/v1.1/advertisement/add';
    // 查询轮播
    static URL_V11_ADVERTISEMENT_QUERY = '/v1.1/advertisement/query';
    // 删除轮播
    static URL_V11_ADVERTISEMENT_DELETE = '/v1.1/advertisement/delete';
    // 修改轮播
    static URL_V11_ADVERTISTMENT_EDIT = '/v1.1/advertisement/edit';
    // 移动
    static URL_V11_ADVERTISEMENT_MOVE = '/v1.1/advertisement/move';


    /////////////////////意见反馈////////////////////////
    // 查询
    static URL_V11_PROPOSAL_QUERY = '/v1.1/proposal/query';
    // 数据导出
    static URL_V11_PROPOSAL_EXPORT_DATE = process.env.ADMIN_HOST_NAME + '/v1.1/proposal/exportData';

    /////////////////////自动套保/////////////////////////////////
    // 查询
    static URL_V11_COMPANY_AUTO_HEDGE_QUERY = '/v1.1/company/autoHedge/query';
    // 修改状态
    static URL_V11_COMPANY_AUTO_HEDGE_EDIT_STATUS = '/v1.1/company/autoHedge/editStatus';
    // 修改密码
    static URL_V11_COMPANY_AUTO_HEDGE_EDIT_PASSWORD = '/v1.1/company/autoHedge/editPassword';

    /////////////////////积分管理/////////////////////////////////
    //查询积分订单列表
    static URL_V11_INTEGRALORDER_LIST_QUERY = '/v1.1/integralorder/queryIntegralOrderList';
    // 积分订单导出
    static URL_V11_INTEGRALORDER_EXPORT = process.env.ADMIN_HOST_NAME + '/v1.1/integralorder/exportData'
    // 确定积分订单/发货
    static URL_V11_INTEGRAL_ORDER_UPDATE = '/v1.1/integralorder/updateIntegralOrder'
    // 拒绝订单
    static URL_V11_INTEGRAL_ORDER_REFUSE = '/v1.1/integralorder/refuseIntegralOrder'

    // 查询兑换设置列表
    static URL_V11_CASHING_COMMODITY_LIST_QUERY = '/v1.1/cashingcommodity/queryCashingCommodityList'
    // 新增/修改兑换设置接口
    static URL_V11_CASHING_COMMODITY_JOIN = '/v1.1/cashingcommodity/join'
    // 删除兑换设置
    static URL_V11_CASHING_COMMODITY_DELETE = '/v1.1/cashingcommodity/deleteCashingCommodity'

    // 查询指导价列表
    static URL_V11_GUIDEPRICE_LIST_QUERY = '/v1.1/guideprice/queryGuidePriceList'
    // 停用/启用指导价
    static URL_V11_GUIDEPRICE_STOP = '/v1.1/guideprice/stopGuidePriceList'
    // 商品分类查询
    static URL_CATEGORY_TREE = '/category/tree'

    // 查询积分明细列表
    static URL_V11_INTEGRAL_DETAIL_LIST_QUERY = '/v1.1/integraldetail/queryIntegralDetailList'
    // 新增/修改指导价设置
    static URL_V11_GUIDE_PRICE_ADD = '/v1.1/guideprice/addGuidePrice'
    // 积分明细导出
    static URL_V11_INTEGRAL_DETAIL_EXPORT = process.env.ADMIN_HOST_NAME + '/v1.1/integraldetail/exportData'

    // 查询积分添加列表
    static URL_V11_INTEGRAL_RECORD_LIST_QUERY = '/v1.1/integra/record/queryIntegraRecordList'
    // 手机号码查询用户积分关联订单
    static URL_V11_USER_INTEGRAL_QUERY = '/v1.1/integra/record/queryUserIntegral'
    // 添加积分
    static URL_V11_USER_INTEGRAL_ADD = '/v1.1/integra/record/addUserIntegral'

    // 积分汇总
    static URL_V11_INTEGRAL_COLLECT_LIST_QUERY = '/v1.1/user/queryUserList'
    // 积分汇总excel导出
    static URL_V11_INTEGRAL_COLLECT_LIST_EXPORT = process.env.ADMIN_HOST_NAME + '/v1.1/user/exportData'

    /////////////////////启动页广告管理/////////////////////////////////
    // 查询广告业列表
    static URL_V11_ADVERTISING_LIST_QUERY = '/v1.1/advertising/queryAdvertisingList'
    // 启动页添加
    static URL_V11_ADVERTISING_ADD = '/v1.1/advertising/add'
    // 删除启动页
    static URL_V11_ADVERTISING_DELETE = '/v1.1/advertising/deleteAdvertising'


 


    


}

export {
    projectConfig
};