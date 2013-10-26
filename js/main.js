require.config({
    paths: {
        'jquery': 'jquery.min',
        'jPreview': 'jquery.preview'
    },
    shim: {
        'jPreview': {
            deps: ['jquery']
        }
    }
});

require(['jPreview'], function() {
    $('#small_image_container').jPreview();
});
