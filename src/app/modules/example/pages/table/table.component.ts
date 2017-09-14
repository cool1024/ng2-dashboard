import { Component, OnInit } from '@angular/core';
import { MdPaginatorIntl } from '@angular/material';
import { Page } from './../../../../system/tools/components/pagination/page.class';

const datas = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', thumb: 'http://placekitten.com/200/350' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', thumb: 'http://placekitten.com/150/150' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', thumb: 'http://placekitten.com/250/300' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', thumb: 'http://placekitten.com/450/300' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', thumb: 'http://placekitten.com/250/350' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', thumb: 'http://placekitten.com/200/300' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', thumb: 'http://placekitten.com/200/300' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', thumb: 'http://placekitten.com/200/300' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', thumb: 'http://placekitten.com/200/300' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', thumb: 'http://placekitten.com/200/300' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', thumb: 'http://placekitten.com/200/300' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', thumb: 'http://placekitten.com/200/300' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', thumb: 'http://placekitten.com/200/300' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', thumb: 'http://placekitten.com/200/300' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', thumb: 'http://placekitten.com/200/300' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', thumb: 'http://placekitten.com/200/300' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', thumb: 'http://placekitten.com/200/300' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', thumb: 'http://placekitten.com/200/300' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', thumb: 'http://placekitten.com/200/300' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', thumb: 'http://placekitten.com/200/300' },
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //分页参数
  page = new Page()

  //分页数据
  list = new Array<{ position: number, thumb: string, name: string, weight: number, symbol: string }>()

  //表格标题
  theads: Array<string>

  constructor(private mdp: MdPaginatorIntl) { }

  ngOnInit() {

    //表格数据
    this.theads = ['No.', '图片', '名称', '质量', '符号', '操作']
    this.list = datas.slice(0, this.page.limit)

    //分页组件配置
    this.page.total = datas.length
    this.mdp.previousPageLabel = "上一页"
    this.mdp.nextPageLabel = "上一页"
    this.mdp.itemsPerPageLabel = "每页数据量"

  }

  //换页事件(特别的更改每页数据量也会触发此事件)
  onChanged(page) {
    //page变量数据格式---->Object { pageIndex: number(页码，从0开始), pageSize: number(每页数据量，limit), length: number(可用数据总量，total) }
    this.page.page = page.pageIndex + 1
    this.page.limit = page.pageSize
    this.list = datas.slice(this.page.offset, this.page.offset + this.page.limit)
  }

}
