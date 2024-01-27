const VKID = window.VKIDSDK;
 
VKID.Config.set({
  app: 51837169, 
  redirectUrl: 'https://ruslinesoft.github.io/zenit/assets/sotr.html', 
});

function handleClick() {
   VKID.Auth.login()
  }
  
  const button = document.getElementById('VKIDSDKAuthButton');
  if (button) {
   button.onclick = handleClick;
  }
