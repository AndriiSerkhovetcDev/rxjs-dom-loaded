import { fromEvent, of } from "rxjs";


const work = (event) => {
    try {
        if (event) {
            setTimeout(() => {
                of('DOM is loaded').subscribe(
                    (val) => console.log(val)
                )
            }, 2000)
        }
    }
    catch (error) {
        console.error(error)
    }
}

function checkIsReady() {
   fromEvent(document, 'DOMContentLoaded')
       .subscribe((event) => work(event))
}

checkIsReady()
