const SwimTeam = {

  // direction, start and max all need to match the CSS
  direction: 'left',
  coords: { top: 100, left: 100 },
  max: { top: 0, left: 0, bottom: 295, right: 240 },
  
  move: (direction) => {
    if (!SwimTeam.valid(direction)) {
      return;
    }
    var allDirections = ['left', 'right', 'up', 'down'];
    var randomDirection = allDirections[Math.floor(Math.random()*allDirections.length)]
    console.log(`Lets go: ${randomDirection}`);

    // set the swim-team's direction
    $('.swimmer')
      .removeClass((idx, classNames) => { 
        var name = classNames.match(/(turn-\w+)/);
        return name && name[1];
      })
      .addClass(`turn-${randomDirection}`);

    // same direction as last time? -> if yes, move the swim-team
    if (SwimTeam.direction === randomDirection) {
      SwimTeam.updateLoc(direction);
      $('.team')
        .css('top', `${SwimTeam.coords.top}px`)
        .css('left', `${SwimTeam.coords.left}px`);
    }

    SwimTeam.direction = randomDirection;
  },

  valid: (randomDirection) => {
    if (!randomDirection) {
      return false;
    }
    if (['left', 'right', 'up', 'down'].indexOf(randomDirection) < 0 ) {
      console.log(`Ignoring command: ${randomDirection}`);
      return false;
    }
    return true;
  },

  updateLoc: (randomDirection) => {
    // calculate what the new position is for the swim-team is
    // but don't let the swim-team get outside the max bounds!
    switch (randomDirection) {
    case 'up':
      if (SwimTeam.coords.top > SwimTeam.max.top) {
        SwimTeam.coords.top -= 5;
      }
      break;
    case 'down':
      if (SwimTeam.coords.top < SwimTeam.max.bottom) {
        SwimTeam.coords.top += 5;
      }
      break;
    case 'left':
      if (SwimTeam.coords.left > SwimTeam.max.left) {
        SwimTeam.coords.left -= 5;
      }
      break;
    case 'right':
      if (SwimTeam.coords.left < SwimTeam.max.right) {
        SwimTeam.coords.left += 5;
      }
      break;
    } 
  }

};
