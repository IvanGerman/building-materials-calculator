export const preventDefaultObj = {

  handleOver(event: Event) {
    event.preventDefault();
    console.log('handleOver');
    
  },

  handleLeave(event: Event) {
    event.preventDefault();
    console.log('handleLeave');
  },

  handleEnter(event: Event) {
    event.preventDefault();
    console.log('handleEnter');
  },

  handleDrop(event: Event) {
    event.preventDefault();
    console.log('handleDrop'); 
  }

};