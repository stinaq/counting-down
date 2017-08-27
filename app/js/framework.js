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

    varje gång en vy registreras så ska det bestämmas om den ska visas, det borde vara det första jag gör
    sen handlar det nog om att gå igenom alla när hashen ändras?

    varje vy har ett condition som säger om det ska visas eller inte, innan det är sant ska de inte visas
  */




})();

let AppState = (() => {
  let allThings = {};

  window.addEventListener('hashchange', () => {
    console.log('hash changed');
    Object.keys(allThings).forEach((name) => {
      ViewDecider(name);
    });
  });

  // should view be renamed to component?
  const ViewDecider = (name) => {
    if (name) {
      const view = allThings[name];
      if (view.condition()) {
        console.log(`${name} shown`);
        view.show();
      } else {
        console.log(`${name} not shown`);
        view.hide();
      }
    }
  };

  return {
    RegisterThing: (name, element, condition, show, hide) => {
      console.log(`Registering ${name}`);
      allThings[name] = { element, condition, show, hide };
      ViewDecider(name);
    }
  };
})();
