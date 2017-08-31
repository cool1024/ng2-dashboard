/*账户管理页面配置*/

export const AdminPageConfig: { table: Array<any>, editor: Array<any> } = {
    table: [
        { name: 'ID', key: 'i' },
        { name: '账号', key: 'account', type: 'text', primary: true },
        { name: '描述', key: 'description' },
        { name: '头像', key: 'avatar', type: 'image' }
    ],
    editor: [
        { name: '账号', key: 'account' },
        { name: '描述', key: 'description' },
        { name: '头像', key: 'avatar', type: 'image' }
    ]
}