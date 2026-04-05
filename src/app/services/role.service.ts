import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role: 'viewer' | 'admin' = 'viewer';

  setRole(newRole: 'viewer' | 'admin') {
    this.role = newRole;
  }

  getRole() {
    return this.role;
  }

  isAdmin() {
    return this.role === 'admin';
  }
}