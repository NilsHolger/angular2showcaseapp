import {
    Component,
    Renderer,
    ViewChild,
    HostBinding,
    AnimationPlayer
} from '@angular/core';

import {default as routerAnimations} from './../route.animations';

@Component({
    selector: 'demo_3',
    animations: [routerAnimations('route')],
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.css']
    
})
export class PlayComponent {
  @HostBinding('@route')
  public routeAnimations = true;

  @ViewChild("box") box;
  player : AnimationPlayer;

  _players: AnimationPlayer[] = [];

  constructor(private momentum:Renderer) {}

  ngOnInit() {
      this.trackXY(document.body.offsetWidth / 2 - 110, 200);
  }

  trackXY(x: number, y: number) {
      let boxEl = this.box.nativeElement,
          coords = this.getTopLeft(boxEl);
      let startPos = { left: coords.left, top:coords.top},
          destPos =  { left: x, top:y };

      console.log(`mouseDown: (${destPos.left},${destPos.top})`);

      var oldPlayer = this.player;

      var player = this.momentum.animate( boxEl, null, [
          this.buildAnimationKeyFrame(0, startPos),
          this.buildAnimationKeyFrame(1, destPos)
      ], 500, 0, 'ease-out' );

      player.onDone( ()=>{
          if (this.player !== player) return;
          this._players = [ ];

          boxEl.style.left = destPos.left + 'px';
          boxEl.style.top = destPos.top + 'px';
      });

      this.player = player;
      this._players.push(player);

      if (oldPlayer) {
          oldPlayer.destroy();
      }
      
      player.play();

  }

  trackMouse($event:MouseEvent) {
      this.trackXY($event.pageX, $event.pageY);
  }

  /**
   *
   */
   getTopLeft(boxEl) {
    let coords = boxEl.getBoundingClientRect();
    return { left: coords.left, top:coords.top}
   }
  /**
   * AnimationKeyframe generator for style hashmap
   */
  buildAnimationKeyFrame(offset: number, map:any){
    let _styles = {}
    for (let key in map) {
      _styles[key] = map[key];
    }
    return {
      offset,
      styles : {
        styles : [_styles]
      }
    };
  }

}

