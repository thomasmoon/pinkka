/**
 * IntroController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index: function (req, res) {
      return res.view('home/index',{layout:'layoutIntro'})
  }

};
