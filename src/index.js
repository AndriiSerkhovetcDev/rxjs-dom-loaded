import {
    delay,
    from,
    fromEvent,
    switchMap,
    tap,
} from "rxjs";

function ready() {
    const observerFromArray = from([1, 2, 3, 4])

    fromEvent(document, 'DOMContentLoaded').pipe(
        tap(() => console.log('Dom is loaded')),
        delay(5000),
        switchMap(() => observerFromArray)
    ).subscribe(element => console.log(element))
}

ready()
