// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    amOnPageAndAssertURL(url, assertURL){
      this.amOnPage(url);
      this.seeInCurrentUrl(assertURL)
    }

  });
}
