/*系统默认设置*/

export const Config = {

    /*服务端配置*/
    SERVER: {
        server: 'http://ng.cool1024.com',//API接口访问地址
        source: 'http://ng.cool1024.com',//资源文件访问地址
    },
    /*系统主题配置*/
    THEME: {
        bgColor: "rgba(0, 0, 0, 0.7)",//系统背景色（菜单背景色，登入页面背景色）
        fontColor: "white",//系统菜单字体颜色
        activeColor: "black",//系统积极状态的组件颜色 
        activeBgColor: 'yellow',//子菜单选中颜色
        childsColor: 'yellow',//子菜单字体颜色
        childsBgColor: 'rgba(0, 0, 0, 0.5)',//子菜单背景颜色
        bgImage: "http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/assets/image/avatar/2.jpg",  //系统背景图(目前好像没什么用。。)
        mnImage: "http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/assets/image/siderbar/4.png" //菜单背景图片
    },
    /*系统描述信息*/
    CONTENT: {
        title: "NG2-DASHBOARD",//系统标题
        version: "1.0.0",//系统版本
        icon: "http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/favicon.ico",//系统图标图片
    }
}