//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {provideStore} from '@ngrx/store'
import {todos, visibilityFilter} from './todos';
import {undoable} from './undoable'

bootstrap(App, [
  provideStore({
    todos:undoable(todos),
    visibilityFilter})  
])
.catch(err => console.error(err));