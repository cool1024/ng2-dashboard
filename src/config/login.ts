/*登入页面配置*/

export const LoginPageConfig = {
    icon: 'fa fa-wechat fa-fw',//界面图标
    title: 'Hello1024 Manager',//界面标题
    description: 'version 2.0.1 2017.8.29@NG2-DASHBOARD',//登入描述信息
    avatar: '/assets/image/avatar/2.jpg',//用户默认头像
    button: '登入',//按钮文字
    bgImage: '/assets/image/card/4.jpg',//登入背景图
    inputs: [
        { icon: 'fa fa-envelope', placeholder: '请输入邮箱', name: 'email' },//账号输入框（图标，默认提示文字，字段名称）
        { icon: 'fa fa-key', placeholder: '请输入密码', name: 'password' },//密码输入框（图标，默认提示文字，字段名称）
    ],
    footer: 'Copyright © 2016 XiaoJian. All Rights Reserved.| 赣 ICP备16010587号'//页脚文字
}