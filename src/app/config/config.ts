/*default menus*/
export const Config = {
    SERVER: {
        server: 'http://zrwc.cool1024.com:8080',
        source: 'http://127.0.0.1',
    },
    THEME: {
        bgColor: "rgba(0, 0, 0, 0.62)",
        fontColor: "white",
        activeColor: "white",
        bgImage: "/assets/image/photo.jpg",
    },
    CONTENT:{
        title:"NG2-DASHBOARD",
        version:"1.0.0",
        icon:"/favicon.ico",
    }
}


/*default menus */
export const Menus = [
    {
        icon: "fa fa-cog", title: "System Setting", childs: [
            { icon: "fa fa-list-ul", title: "Menu Board", url: "/" },
            { icon: "fa fa-users", title: "Role Group", url: "" },
            { icon: "fa fa-lock", title: "Permission List", url: "" }
        ]
    }, {
        icon: "fa fa-cubes", title: "工具测试", childs: [
            { icon: "fa fa-television", title: "Bootstrap Confirm", url: "/test/alert" },
            { icon: "fa fa-window-restore", title: "Dialog Confirm", url: "/test/confirm" },
            { icon: "fa fa-pie-chart", title: "Charts Js", url: "/test/charts" },
            { icon: "fa fa-sort", title: "Sortable Js", url: "/test/sortable" },
            { icon: "fa fa-chevron-circle-down", title: "Select Example", url: "/test/select" },
            { icon: "fa fa-table", title: "Table Example", url: "/test/table" },
            { icon: "fa fa-superpowers", title: "Form Example", url: "/test/form" },
        ]
    }, {
        icon: "fa fa-cogs", title: "Service Tool", childs: [
            { icon: "fa fa-spinner", title: "Show Loading", url: "/test/loading" },
            { icon: "fa fa-comments-o", title: "Show Toastr", url: "/test/toastr" },
        ]
    }
]