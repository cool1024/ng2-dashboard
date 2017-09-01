/*账户管理页面配置*/

export const AdminPageConfig: { table: Array<any>, editor: Array<any> } = {
    table: [
        { name: 'ID', key: 'i' },
        { name: '账号', key: 'account', primary: true },
        { name: '描述', key: 'description' },
        { name: '头像', key: 'avatar', type: 'image' }
    ],
    editor: [
        { name: '账号', key: 'account', type: 'text' },
        { name: '密码', key: 'password', type: 'text', placeholder: '如不更改密码,此处不写', required: false },
        { name: '描述', key: 'description', type: 'textarea' },
    ]
}