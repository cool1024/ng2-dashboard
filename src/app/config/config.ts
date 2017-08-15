/*default menus*/
export const Config = {
    SERVER: {
        server: 'http://127.0.0.1',
        source: 'http://127.0.0.1',
    },
    THEME: {
        bgColor: "rgba(0, 0, 0, 0.62)",
        fontColor: "white",
        activeColor: "white",
        bgImage: "/assets/image/photo.jpg",
        mnImage:"/assets/image/siderbar/3.png"
    },
    CONTENT: {
        title: "NG2-DASHBOARD",
        version: "1.0.0",
        icon: "/favicon.ico",
    }
}

/*default token&cache*/
export enum StorageType {
    localStorage = 1,
    sessionStorage = 2
}
export const StorageSetting = {
    tokensSaveMethod: StorageType.sessionStorage,
    dataSaveMethod: StorageType.sessionStorage,
    tokenParams: ['ng-params-one', 'ng-params-two']
}


/*default menus */
export const Menus = [
    {
        icon: "fa fa-cog", title: "系统设置", childs: [
            { icon: "fa fa-list-ul", title: "菜单编辑", url: "/system/menu" },
            { icon: "fa fa-users", title: "角色管理", url: "/system/role" },
            { icon: "fa fa-lock", title: "权限分配", url: "/system/permission" }
        ]
    }, {
        icon: "fa fa-cubes", title: "工具测试", childs: [
            { icon: "fa fa-television", title: "确认对话", url: "/test/alert" },
            { icon: "fa fa-window-restore", title: "弹出对话", url: "/test/confirm" },
            { icon: "fa fa-pie-chart", title: "图表演示", url: "/test/charts" },
            { icon: "fa fa-sort", title: "拖拽排序", url: "/test/sortable" },
            { icon: "fa fa-chevron-circle-down", title: "下拉选择", url: "/test/select" },
            { icon: "fa fa-table", title: "表格分页", url: "/test/table" },
            { icon: "fa fa-superpowers", title: "表单提交", url: "/test/form" },
            { icon: "fa fa-floppy-o", title: "文件上传", url: "/test/upload" },

        ]
    }, {
        icon: "fa fa-cogs", title: "内置服务", childs: [
            { icon: "fa fa-spinner", title: "加载动画", url: "/test/loading" },
            { icon: "fa fa-comments-o", title: "通知消息", url: "/test/toastr" },
            { icon: "fa fa-internet-explorer", title: "发送请求", url: "/test/request" },
            { icon: "fa fa-cloud-upload", title: "上传服务", url: "/test/file" },
            
        ]
    }
]

/*login page setting*/
export const LoginPageConfig={
    icon:'fa fa-wechat fa-fw',
    title:'Hello1024 Manager',
    description:'version 2.0.1 2017.8.29@xiaojian',
    avatar:'/assets/image/photo.jpg',
    button:'Login',
    bgImage:'/assets/image/card/2.jpg'
}