import {Tagify} from 'tagify-js'

console.log('FOOOOO');

const tagify = new Tagify({
    target: document.getElementById('tags'),
    source: 'https://medium.com/@emmanuelmark/how-to-create-a-javascript-library-30df146b3d2a'
});