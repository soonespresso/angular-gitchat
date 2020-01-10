import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canLoad() {
    // HTTP 调用后端的服务检查授权
    return true;
  }

  canActivate() {
    // HTTP 调用后端的服务检查授权
    return true;
  }
}
