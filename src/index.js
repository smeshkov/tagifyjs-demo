import tagify from '@zoomio/tagifyjs';

tagify({
    appID: 'ff3ee693-acdf-4216-88b7-7b3e4dbe3907',
    host: 'https://zoomio.org',
    targets: [
        {
            element: document.getElementById('tags'),
            source: 'https://zoomio.org/posts/id/mock_server-5632006343884800',
            title: 'Mock server'
        }
    ]
});