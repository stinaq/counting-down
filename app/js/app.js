(function() {

  /*

  * Read time from query parameter
  * Read title from parameter
  * Set time in url
  * Ska man göra nån slags pub/sub? Publicera till en state? ha en global app och göra ping till
    den när något hänt. Och varje gång man pushat ett state så är det en "viewer" som bestämmer
    vad som ska visas ut. Ska man göra två olika delar i htmlen? och bara sätta
    visa/inte visa på dem?
    Positivt med det är att man inte behöver rendera om markupen, den är där redan

    view.ping

    Vad behöver hända?
    Registrera vyer, sen slå av och på dem vid olika events

  */




})();

let AppState = (() => {
  let allThings = {};


  // sätt upp en watcher på locationChange? då måstejag nog använda hash ist, annars laddar sidan om
  window.addEventListener('hashchange', () => {
    console.log('hash changed');
  });

  const ViewDecider = (name) => {
    if (name) {
      allThings[name].condition();
    }
  };

  return {
    RegisterThing: (name, element, condition) => {
      console.log(`Registering ${name}`);
      allThings[name] = { element, condition };
      ViewDecider(name);
    }
  };
})();
