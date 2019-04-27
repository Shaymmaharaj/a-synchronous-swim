(function() {

  const serverUrl = 'http://127.0.0.1:8080';

  //
  // TODO: build the swim command fetcher here
//   $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
//   const ajaxGetSwim = (data) => {
//     $.ajax({
//       type: 'GET',
//       data: data,
//       success: () => {
//         // reload the page
//        console.log("i don't feel so good mr. stark");
//        // window.location = window.location.href;
//       }
//     });
//   };
// });
// ajaxGetSwim(data);


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

  
  const ajaxGetSwim = (data) => {
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:8080",
    })
      .done(function(data) {
        SwimTeam.move(data);
      });
    };

  setInterval(ajaxGetSwim, 1000);
  
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
