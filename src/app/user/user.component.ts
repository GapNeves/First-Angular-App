import { Component, EventEmitter, /*computed*/ Input, Output, /*input*/ } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
