import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
 @Injectable({
   providedIn: 'root'
 })
 export class RoleGuard implements CanActivate {
   constructor(private router: Router) {}
     canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     // Replace this with your actual user role retrieval logic
     const userRole = localStorage.getItem('userRole');
     if (userRole === 'admin') {
       return true;
     }
     // If the user is not an admin, redirect to the home page
     this.router.navigate(['/']);
     return false;
   }
 }