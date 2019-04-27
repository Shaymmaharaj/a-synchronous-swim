(function() {
  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
 
  const ajaxGetSwim = () => {
    console.log('i dont feel so good mr. stark')
    $.ajax({
      type: 'GET',
     url: serverUrl,
      success: (data) => {
        // reload the page
       SwimTeam.move(data);
       console.log(data)
       console.log("i don't feel so good mr. stark");
      }
    });
  };

  //setInterval(ajaxGetSwim, 1000);
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
     url: serverUrl,
      success: () => {
        // reload the page
        console.log("i don't feel so good mr. stark");
        window.location = window.location.href;
      }
    });
  };


  $('form').on('submit', function(e) {
    e.preventDefault();
    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
