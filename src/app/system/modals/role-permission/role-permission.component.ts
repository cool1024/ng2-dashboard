import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent{

  @Input() role: any  

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() { }

}
