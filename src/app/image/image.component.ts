import {Component, HostBinding} from '@angular/core';
import {default as routerAnimations} from './../route.animations';

@Component({
    selector: 'demo_2',
    animations: [routerAnimations('routeAnimations')],
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent {
    activeImage = null;
    images = [
        './app/image/images/1.jpg',
        './app/image/images/2.png',
        './app/image/images/3.jpg',
        './app/image/images/4.png',
        './app/image/images/5.png',
        './app/image/images/6.png',
        './app/image/images/7.png',
        './app/image/images/8.jpg',
        './app/image/images/9.jpg',
        './app/image/images/10.png',
        './app/image/images/11.jpg',
        './app/image/images/12.png'
    ];

    @HostBinding('@routeAnimations')
    public routeAnimations = true;

    constructor() {
        this.activeImage = this.images[0];
    }
}
