const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: `https://fdr.rdw.nl`,
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  rp(options)
  .then(function(data) {
      // REQUEST SUCCEEDED: DO SOMETHING
      // console.log(data);
      //console.log(data('#LI1').text()); // Zoek op chipnummer
      var _options = data('#ctl00_cntMaincol_ctrlZoekOpFramenummer_drpMerk')[0].children;
      // console.log(_options); // All brand options
      // console.log(_options.length); // Number of options
      // console.log(_options[0]); // First option's selected?
      // console.log(_options[0].next.attribs.value); // First option's value
      var i;
      for (i=0; i < _options.length; i++) {
          if(typeof _options[i].next != 'undefined' && _options[i].next != null) {
            console.log("brand : ", _options[i].next.attribs);

            // set option to selected
            // _options[i].next.selected = true;

            // console.log("brand selected : ", _options[i].next);

            if(typeof _options[i].next.selectedIndex != 'undefined') {
              console.log(_options[i].next.selectedIndex);
            }
          }
          i++; // Skip undefined next options
      }
  })
  .catch(function (err) {
      // REQUEST FAILED: ERROR OF SOME KIND
      console.log(err);
  });



