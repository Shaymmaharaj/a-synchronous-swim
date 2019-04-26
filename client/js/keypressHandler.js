
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});
const ajaxGetSwim = (data) => {
  $.ajax({
    type: 'GET',
    data: data,
    success: () => {
      // reload the page
     console.log("i don't feel so good mr. stark");
     // window.location = window.location.href;
    }
  });
};
ajaxGetSwim();

console.log('Client is running in the browser!');
