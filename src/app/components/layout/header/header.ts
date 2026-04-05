import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  selectedRole: 'viewer' | 'admin' = 'viewer';

  constructor(private roleService: RoleService) {}

  onRoleChange() {
    this.roleService.setRole(this.selectedRole);
  }
}