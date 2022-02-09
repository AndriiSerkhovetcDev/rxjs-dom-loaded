import { fromEvent } from "rxjs";


function ready() {
    fromEvent(document, 'DOMContentLoaded')
        .subscribe(() => console.log('DOM Loaded'))
}

ready()