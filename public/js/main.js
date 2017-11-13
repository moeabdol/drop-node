Dropzone.options.imagesDropzone = {
  autoProcessQueue: false,
  url: '/api/uploads',
  paramName: 'image',

  init: function() {
    var submitButton = $('#submit-all');
    var myDropzone = this;

    submitButton.on('click', function() {
      myDropzone.options.autoProcessQueue = true;
      myDropzone.processQueue();
    });

    this.on('queuecomplete', function() {
      myDropzone.options.autoProcessQueue = false;
    });
  }
};
