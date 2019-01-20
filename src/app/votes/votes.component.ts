import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like = 0;
  @Input('dislike') dislike = 0;

  @Output('changeVoteLike') changeVoteLike= new EventEmitter();
  @Output('changeVoteDislike') changeVoteDislike= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  thumbsUp(){
    this.like++;
    this.changeVoteLike.emit(this.like);
  }
  thumbsDown(){
    this.dislike++;
    this.changeVoteDislike.emit(this.dislike);


  }

}
