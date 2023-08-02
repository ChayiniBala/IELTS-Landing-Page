// Add this inside the website's code where you want to track button clicks
const buttonElement = document.getElementById('google-track-btn');

buttonElement.addEventListener('click', () => {
  const data = {
    type: 'buttonClick',
    data: {
      buttonLabel: 'Call Now',
    },
  };
  
  // Send a message to the parent window (the React app)
  window.parent.postMessage(data, 'https://your-react-app.com');
  console.log('call now button clicked');
});
