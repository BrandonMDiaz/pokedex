import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ApiUserResponse, User } from '../../models/user';
import { UsersService } from '../../services/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public tableColumns: string[] = [
    'name',
    'lastName',
    'role',
    'email',
    'actions',
  ];
  constructor(
    private userService: UsersService,
    private router: Router,
    public dialog: MatDialog,
    private titleService: Title
  ) {
    this.titleService.setTitle('Users');
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getUsers(1);
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this user?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(id);
      }
    });
  }

  async deleteUser(id: string) {
    try {
      const res = await this.userService.delete(id);
      if (res.ok) {
        this.users = this.users.filter((item) => item._id !== id);
      }
    } catch (err) {}
  }
  edit(id: string): void {
    this.router.navigateByUrl(`users/edit/${id}`);
  }
  redirect() {
    this.router.navigateByUrl('users/add');
  }
}
