import {
    delay,
    from,
    fromEvent,
    switchMap,
    tap,
} from "rxjs";

function ready() {
    const observerFromArray = from([1, 2, 3, 4])
    createContent()
    fromEvent(document, 'DOMContentLoaded').pipe(
        tap(() => console.log('Dom is loaded')),
        delay(3000),
        switchMap(() => observerFromArray)
    ).subscribe(element => console.log(element))
}

ready()

function createContent() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab deleniti eaque eveniet libero magnam magni odio\n' +
        '  repudiandae? Animi distinctio dolorem dolorum, ea enim error in iure minima molestias nemo, repudiandae vero\n' +
        '  voluptatem? Ducimus enim impedit ipsam ipsum maiores nemo nisi omnis porro sint ut vero vitae, voluptas voluptatem.\n' +
        '  Aliquid assumenda consectetur deleniti enim, excepturi exercitationem explicabo hic in laborum magnam nemo nobis quam\n' +
        '  qui quod reprehenderit sapiente sunt? Dolor dolorem numquam officiis rem sed soluta voluptatem? A alias deserunt enim,\n' +
        '  et ex facilis nihil quaerat quasi quod repellendus voluptatibus voluptatum? Eligendi laboriosam mollitia neque\n' +
        '  nostrum, reiciendis repellendus sed veniam?'

    const newDiv = document.createElement('div');

    newDiv.append(content)
    setTimeout(() => {
        document.body.append(newDiv)
    }, 3000)
}