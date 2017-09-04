/*账户管理页面配置*/

export const AdminPageConfig: { table: Array<any>, editor: Array<any>, urls: { select?: string, insert?: string, update?: string, delete?: string } } = {
    table: [
        { name: 'ID', key: 'i' },
        { name: '邮箱', key: 'email', primary: true },
        { name: '名称', key: 'name' },
        // { name: '头像', key: 'avatar', type: 'image' }
    ],
    editor: [
        { name: '邮箱', key: 'email', type: 'text', },
        { name: '名称', key: 'name', type: 'text', },
        { name: '密码', key: 'password', type: 'password', placeholder: '如不更改密码,此处不写', required: false },
        // { name: '描述', key: 'description', type: 'textarea' },
    ],
    urls: {
        select: '/admin/search',
        insert: '/admin/add',
        update: '/admin/update',
        delete: '/admin/delete'
    }
}