import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lumen',
  templateUrl: './lumen.component.html',
  styleUrls: ['./lumen.component.scss']
})
export class LumenComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  groupData = [
    {
      "parentid": 0,
      "groups": [
        {
          "parentid": 0,
          "id": "1",
          "icon": "fa fa-cog",
          "title": "系统设置",
          "url": "",
          "level": "1",
          "permissionid": "0"
        },
        {
          "parentid": 0,
          "id": "5",
          "icon": "fa fa-cogs",
          "title": "内置服务",
          "url": "",
          "level": "5",
          "permissionid": "0"
        }
      ]
    },
    {
      "parentid": 1,
      "groups": [
        {
          "parentid": 1,
          "id": "2",
          "icon": "fa fa-list-ul",
          "title": "菜单编辑",
          "url": "/system/menu",
          "level": "2",
          "permissionid": "1"
        },
        {
          "parentid": 1,
          "id": "4",
          "icon": "fa fa-lock",
          "title": "权限分配",
          "url": "/system/permission",
          "level": "3",
          "permissionid": "3"
        }
      ]
    },
    {
      "parentid": 39,
      "groups": [
        {
          "parentid": 39,
          "id": "40",
          "icon": "fa fa-server",
          "title": "LumenAPI",
          "url": "/docs/lumen",
          "level": "1",
          "permissionid": "0"
        }
      ]
    }
  ]

  //文档数据
  docs = [
    `
    //场景:用户登入，需要邮箱，密码（密码最短8位，最长12位，不能是单纯的数字）
    
    ...某个控制器文件...
    use App\Api\Contracts\ApiContract;

    ...

    private $api;

    //控制器构造方法
    public function __construct(ApiContract $api)
    {
        $this->api = $api;
    }

    //登入方法（email,password是必要参数）
    function loginV1(){

        //调用getParams方法获取前端提交的email,password参数
        $params = $this->api->getParams(['email', 'password']);

        if($params['result']==true){
          //email,password存在，获取这些参数
          $email=$params['datas']['email];
          $password=$params['datas]['password'];

        }
        else{
          //没有提供email,password，返回校验结果给客户端
          return $params;
        }

    }

    //登入方法（email,password是必要参数,且邮箱格式必须正确，密码也要符合规范）
    function loginV2(){
      
        //调用getParams方法获取前端提交的email,password参数
        $params = $this->api->getParams(['email:email', 'password:string|min:8|max:12']);

        if($params['result']==true){
          //email,password存在，并且符合校验规范，获取这些参数
          $email=$params['datas']['email];
          $password=$params['datas]['password'];

        }
        else{
          //没有提供email,password，返回校验结果给客户端
          return $params;
        }

    }
  `,
    `
  //场景：用户注册接口，个人备注信息时可选的，个人联系电话可以不填写

  ...某个控制器文件...
  ...此处省略$api服务引入代码，详细请看==>基本用法，登入参数校验

  function signUpV1(){
    
      //email,password是必填字段,phone,description是可选填字段
      $params = $this->api->getParams(['email', 'password'],['phone','description']);

      if($params['result']==true){
        //email,password存在，获取这些参数
        $email=$params['datas']['email];
        $password=$params['datas]['password'];

        //尝试获取phone,description
        if(isset($params['datas']['phone'])){
          $phone=$params['datas']['phone'];
        }
        if(isset($params['datas']['description'])){
          $description=$params['datas']['description'];
        }
      }
    else{
      //没有提供email,password，返回校验结果给客户端
      return $params;
    }
  }

  function signUpV2(){
      //email,password是必填字段,phone,description是可选填字段(且description个人备注不能超过100个字)
      $params = $this->api->getParams(['email', 'password'],['phone','description:max:100']);
      .......其它代码省略.......
  }
  `,
    `
  //场景:用户个人信息编辑,前端字段后台接受后需要更换名字

  function changeUserInfo(){
      
      $params = $this->api->getParams(['e_mail', 'you_password'],[],['e_mail'=>'email','you_password'=>'password']);

      if($params['result']){

        //获取email,password
        $email=$params['datas']['email];
        $password=$params['datas]['password'];
      }
      else{
        return $params;
      }


  }
  `,
    `
  .....使用示例....
  $params = $this->api->getParams(['email', 'password'],[],[],['email.required' => '邮箱是必须参数','email.email='邮箱非法']);
  `
    ,
    `
  //用success返回成功消息
  return $this->api->success('操作成功~')

  //用error返回失败消息
  return $this->api->error('操作成功~')

  //用datas返回查询结果（多数据查询，且允许查询结果为空，如获取收购物车数据。。）
  $carts = Cart::all();
  
  return $this->api->datas($carts)
  
  //用data返回详情数据（单个数据查询，如获取指定ID的商品信息）
  $goods = Goods::find(1);

  return $this->api->data($goods,'数据获取成功','商品不存在~');

  //使用insert_message返回插入结果
  $insert_id = Goods::insertGetId(['name'=>'测试商品','price'=>100]);

  return $this->api->insert_message($insert_id, '商品添加成功'，'商品添加失败');
  
  //使用delete_message返回删除结果
  $delete_result = Goods::destroy(1);

  return $this->api->delete_message($delete_result, '商品删除成功'，'商品删除失败');
  
  //使用update_message返回更新结果
  $update_result = Goods::where('id',1)->upda te(['name'=>'测试商品','price'=>100]);

  return $this->api->update_message($update_result, '商品更新成功'，'商品更新失败');
  `,
    `
  //文件默认保存目录为lumen项目的public目录，如需要更改，在使用保存方法时设置path

  ...某个控制器文件...
  use App\Api\Contracts\FileContract;

  ...

  private $file;

  //控制器构造方法
  public function __construct(FileContract $file)
  {
      $this->file = $file;

      //自定义文件保存路径
      $this->file->setSavePath('/var/www/custom')
  }

  //文件上传测试方法
  function testUpload(){

      //image为表单数据中图片对应的name,upload为要保存到的文件夹名称
      $result = $file->saveImageByMd5('image', 'upload');、

      //上传成功$result为文件访问链接
      ...
  }
  `,
    `
  <?php
  namespace App\Api\Models;
  
  use Illuminate\Database\Eloquent\Model;
  use App\Api\Traits\Orm\DataGroupTrait;
  
  class Menu extends Model
  {
  
      //使用分组特性
      use DataGroupTrait;
  
      /表名
      protected $table = 'menu';
  

      //！！！！！使用分组Trait必须定义此变量！！！！！！
      private $groupConfig=[
          'groupKey'=>'parentid',//分组依据，数据将按照parentid分组，parentid相同的数据将在同一组中
          'groupParams' => ['id', 'icon', 'title', 'url','level','permissionid'],//组成员每条数据包含的字段（需要查询的字段）
      ];
  
  }
  `,
    `
  //控制器构造方法
  public function __construct()
  {
      $this->menu = new Menu();
  }

  //测试方法
  function testFunc(){

    //按parentid分组数据
    $groups = $this->menu->groupData();

    //有时候我们需要对符合条件的数据进行分组
    $groups = $this->menu->groupData([
      ['op' => 'where', 'params' => ['id', '>', 100]],//只获取id大于100的数据
      ['op' => 'whereIn', 'params' => ['level', [1,2,3,4,5]]],//只要level在[1,2,3,4,5]中的数据
    ]);
  }
  `,
  `
  ....某个模型...
  use App\Api\Traits\Orm\DataSortTrait;
  class Menu extends Model
  {
    use DataSortTrait;
  }
  ....某个控制器....
  public function __construct()
  {
      $this->menu = new Menu();
  }

  //测试方法
  testFunc1(){
    $this->menu->sort([1,2,3],'level');
  }

  testFunc2(){
    $this->menu->rsort([1,2,3],'level')    
  }
  `,
  `
  //暂无文档
  `
  ]
}
