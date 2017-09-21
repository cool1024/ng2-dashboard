/*系统默认菜单设置&此文件仅在开发环境下有效*/

export const Menus = [
    {
        icon: "fa fa-cog", title: "系统设置", childs: [
            { icon: "fa fa-list-ul", title: "菜单编辑", url: "/system/menu" },
            { icon: "fa fa-users", title: "角色管理", url: "/system/role" },
            { icon: "fa fa-lock", title: "权限分配", url: "/system/permission" },
            { icon: "fa fa-user-circle", title: "账户管理", url: "/system/admin" },
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