import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';

@Component({
  selector: 'moves-preview',
  templateUrl: './moves-preview.component.html',
  styleUrls: ['./moves-preview.component.scss'],
})
export class MovesPreviewComponent implements OnInit {
  constructor() {}
  @Input() move!: Move;
  @Input() user!: User;

  ngOnInit(): void {}
}
