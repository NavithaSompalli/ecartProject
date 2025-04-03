# Sample16Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. 


1. Angular keeps the component & view in sync using templates, data binding and change detection etc. All of them are bypassed when we update the DOM directly.
2. The DOM manipulation works only in browsers. You will not be able to use your app in other platforms like web workers, servers for server-side rendering, desktop or mobile apps etc. where threr is no browser.
3. The DOM APS's does not sanitize the data. Hence it is possible to inject a script, thereby, opening our app an easy target for the XSS injection attacks.


Renderer2 : allows us to manipulate the DOM without accessing the DOM elements directly, by provind a layer of abstraction between the DOM element and the component code.

@HostListner : 

The @HostListner decorator listens to a DOM event on the host element and it reacts to that event by executing an event handler method.

@HostBinding: 

The @HostBinding decorator binds a host elements property to a property of a directive or a component class.

Property Binding vs @HostBinding: 

Creating a conditional Attribute directive: 








