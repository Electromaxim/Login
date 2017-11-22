import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  { name = 'Angular'; }
