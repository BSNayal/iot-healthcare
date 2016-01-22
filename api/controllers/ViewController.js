/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  showHomePage: function(req, res) {
    // If not logged in, show the home page.
    return res.view('index');
  }
};

