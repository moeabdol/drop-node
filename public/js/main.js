// $('#my-dropzone').dropzone({ url: '/api/uploads' });

Dropzone.options.myDropzone = {
  // Prevents Dropzone from uploading dropped files immediately
  autoProcessQueue: false,
  url: '/api/uploads',
  paramName: 'image',

  init: function() {
    var submitButton = $('#submit-all');
    var myDropzone = this;

    submitButton.on('click', function() {
      myDropzone.processQueue();
    });

    // You might want to show the submit button only when
    // files are dropped here:
    this.on('addedfile', function() {
      // Show submit button here and/or inform user to click it.
    });
  }
};
