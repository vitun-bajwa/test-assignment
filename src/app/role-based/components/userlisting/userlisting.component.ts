import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoleService } from 'src/app/core/services/role.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent implements OnInit {
  userList: any;
  dataSource: any;
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private Role: RoleService, private dialog: MatDialog) {
    this.loadUser();
  }

  ngOnInit(): void {}

  loadUser() {
    this.Role.getAll().subscribe((res: any) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  updateUser(id: any) {
    this.dialog.open(UpdatepopupComponent),
      {
        enterAnimationDuration: '1000ms',
        exitrAnimationDuration: '500ms',
        width: '50%',
        data: {
          userCode: id,
        },
      };
  }

  openDialog() {}
}
