/*系统默认设置*/

export const Config = {

    /*服务端配置*/
    SERVER: {
        server: 'http://ng.cool1024.com',//API接口访问地址
        source: 'http://ng.cool1024.com',//资源文件访问地址
    },
    /*系统主题配置*/
    THEME: {
        bgColor: "rgba(0, 0, 0, 0.9)",//系统背景色（菜单背景色，登入页面背景色）
        fontColor: "white",//系统菜单字体颜色
        activeColor: "black",//系统积极状态的组件颜色 
        activeBgColor: 'yellow',//子菜单选中颜色
        childsColor: 'yellow',//子菜单字体颜色
        childsBgColor:'rgba(0, 0, 0, 0.5)',//子菜单背景颜色
        bgImage: "/assets/image/avatar/6.jpg",  //系统背景图
        mnImage: "/assets/image/siderbar/3.png" //菜单背景图片
    },
    /*系统描述信息*/
    CONTENT: {
        title: "NG2-DASHBOARD",//系统标题
        version: "1.0.0",//系统版本
        icon: "/favicon.ico",//系统图标图片
    }
}