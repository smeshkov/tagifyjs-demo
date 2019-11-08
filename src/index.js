import { tagify } from '@zoomio/tagifyjs';

tagify({
    appID: 'ff3ee693-acdf-4216-88b7-7b3e4dbe3907',
    host: 'https://zoomio.org',
    targets: [
        {
            element: document.getElementById('tags-1'),
            source: 'https://zoomio.org/posts/id/mock_server-5632006343884800',
            title: 'Mock server'
        },
        {
            element: document.getElementById('tags-2'),
            source: 'https://zoomio.org/blog/post/humanreadable_urls-5641927449903104',
            title: 'Human-readable URLs'
        }
    ]
});