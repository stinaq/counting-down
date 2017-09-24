const ParseHash = (function(argument) {

  const parseHash = () => {
    const fullHash = window.location.hash.substr(1);
    const queryParts = fullHash.split('&');

    return queryParts.reduce((accumulator, item, index) => {
      const parts = item.split('=');
      let tempObject = {};
      tempObject[parts[0]] = parts[1];
      return Object.assign(accumulator, tempObject);
    },{});
  };

  return parseHash;
})();
