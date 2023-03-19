import { Component } from '@angular/core';
import {User} from '../models/User';
import { RequestProcessorService } from '../request-processor.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User = new User();

  constructor(private requestProcessorService: RequestProcessorService) {}

  register(user: User) {
    this.requestProcessorService.signUp(user)
                                .subscribe(res => console.log(res), err => console.log(err));
  }

}
