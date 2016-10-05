import {
    Component,
    EventEmitter,
    Output,
    trigger,
    state,
    transition,
    keyframes,
    group,
    animate,
    // query,
    style,
    sequence,
    HostBinding,
    HostListener
} from '@angular/core';

@Component({
  selector: 'modal',
  styleUrls: ['./technology.component.css'],
  template:`
        <div class="modal-frame" @showScreen></div>
      <div class="modal-container" @showModal>
        <header #header>Angular 2</header>
        <div #body class="body" ngNonBindable>
            <p>
                  Angular 2 is a superheroic JAVASCRIPT framework evolution of the Angular 1 version.
                  The framework consists of several libraries, some of them core, some optional.
                  You can build great applications by composing HTML templates with Angularized markup.
                  You can write component classes to manage those templates, add CSS to make your application
                  look pretty and add application logic in services and box components and services in modules.
                  Then you can launch your app by bootstrapping the root module. Angular takes over, presents your
                  application in the browser and responds to user interactions according to the instructions that you have
                  provided.  
           </p>
            <p>
                  Let us focus on the big picture. Angular global. We have 8 main building blocks in an Angular
                  Application. Modules, Components, Templates, Metadata, Data Binding, Directives, Services and
                  Dependency Injection. Angular Modules are a big deal, Angular has its own modularity system
                  called Angular Modules or NgModules. It is a class with the @NgModule decorator. Components are 
                  at the core of your Angular application. A component controls a patch of the screen called the view.
                  Each component has a template that you can define inline with ES6 backticks for example or in separate
                  file for a better separation of concerns and a clean code approach. Metadata tells Angular how
                  to process a class. You attach a decorator, for example the @Component decorator to a class with
                  properties such as the moduleId, selector, templateUrl, styles and providers. Data binding is another
                  awesome feature that Angular delivers. The interpolation syntax {{}} is from the component to the DOM.
                  The [] property binding syntax is also from the component to the DOM. the () syntax is from the DOM to
                  the component and finally the banana in a box syntax [()] is bidirectional. There is also 3 way data binding
                  in combination with a realtime backend like Firebase, where updates to the DOM are instantly reflected in the
                  component as well as in the Firebase database and changes in the repository are immediatly synchronized with the
                  component and the template. Under the hood web socket technology is used. Socket.IO.
                  TODO: continue with directives, services and dependency injection ...
            </p>
        </div>
        <footer #footer>
            You can build awesome apps with Angular, get up and running fast using Angular-CLI. Have fun and enjoy the ride.
            Happy Coding!
        </footer>
        <button #close (click)="close()" class="close-button">X</button>
      </div>  
  `,
   animations: [
        trigger('showScreen', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ])
        ]),
        trigger('showModal', [
            transition('void => *', [
                group([
                    style({ opacity: 0 })
                    // query('header', style({ opacity: 0 })),
                    // query('body', style({ opacity: 0 })),
                    // query('footer', style({ opacity: 0 })),
                    // query('close', style({ opacity: 0 }))
                ]),
                group([
                    style({ height: 200, width: '30%', transform: 'translateX(-50%) translateY(-70%)' }),
                    animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%)' })),
                    // query('header', [
                    //     animate('0.8s 150ms cubic-bezier(.48,.1,.51,1)', keyframes([
                    //         style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                    //         style({ transform: 'scale(1)', offset: 0.75 }),
                    //         style({ opacity:1, offset: 1 })
                    //     ]))
                    // ]),
                    // query('body', [
                    //     animate('0.8s 400ms cubic-bezier(.48,.1,.51,1)', keyframes([
                    //         style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                    //         style({ transform: 'scale(1)', offset: 0.75 }),
                    //         style({ opacity: 1, offset: 1 })
                    //     ]))
                    // ]),
                    // query('footer', [
                    //     animate('0.8s 500ms cubic-bezier(.48,.1,.51,1)', keyframes([
                    //         style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                    //         style({ transform: 'scale(1)', offset: 0.75 }),
                    //         style({ opacity: 1, offset: 1 })
                    //     ]))
                    // ]),
                    // query('close', [
                    //     animate('0.5s 400ms', keyframes([
                    //         style({ opacity: 0, transform: 'scale(1.2)', offset: 0 }),
                    //         style({ opacity: 1, transform: 'scale(1)', offset: 1 })
                    //     ]))
                    // ]),
                    animate('500ms cubic-bezier(.29,.55,.53,1.53)', style({ height: '*', width: '*' })),
                ]),
            ])
        ])
    ]
})
export class TechnologyComponent {

  @Output("close")
    closeEvent = new EventEmitter();

    close() {
        this.closeEvent.next();
    }

}
