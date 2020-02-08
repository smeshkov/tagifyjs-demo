import tagify, { tagsForAnchors } from '@zoomio/tagifyjs';

// Convenient method for taking care of <a> tags.
tagsForAnchors({
    appId: '07553a4b-32cb-466d-9ec6-bebd43c2bcd8',
    anchorsClassName: 'article-link',
    targetsClassName: 'tags-1',
    pagesUrl: 'https://zoomio.org/tagify/relevant'
});

// Core method, provides more control.
tagify({
    appId: '07553a4b-32cb-466d-9ec6-bebd43c2bcd8',
    host: 'https://zoomio.org',
    pagesUrl: 'https://zoomio.org/tagify/relevant',
    targets: [
        {
            element: document.getElementById('tags-2'),
            source: 'https://zoomio.org/blog/post/tags_as_a_service-5712840111423488',
            title: 'Tags as a Service'
        }
    ]
});
