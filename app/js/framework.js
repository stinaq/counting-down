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

    - Visa ut tiden med alla tid-delar
    - Kunna visa starttid = query params ist för hash
    - Byta timepicker


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
