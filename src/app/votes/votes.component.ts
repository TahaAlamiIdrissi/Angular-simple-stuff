import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like = 0;
  @Input('dislike') dislike = 0;

  @Output('changeVote') changeVote= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  thumbsUp(){
    this.like++;
    this.changeVote.emit({ status:1, value:this.like});
  }
  thumbsDown(){
    this.dislike++;
    this.changeVote.emit({ status:0, value:this.dislike});


  }

}
