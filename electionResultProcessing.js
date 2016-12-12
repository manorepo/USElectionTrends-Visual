var remaining = 12;
var finalResults = {};
var stateLookup = {};
function addResults(data, yearObj) {
  data.forEach(function(el) {
    if (el.STATE == "") {
      return;
    }
    if (el.STATE == "Totals") {
      yearObj.demTotalVotes = el.DemVotes;
      yearObj.demTotalEv = el.DemEV;
      yearObj.demTotalPer = el.DemPer;
      yearObj.repTotalVotes = el.RepVotes
      yearObj.repTotalEv = el.RepEV;
      yearObj.repTotalPer = el.RepPer;
      if (el["TOTAL VOTES"] == undefined) {
        yearObj.totalVotes = el["TOTAL. VOTES"];
      } else {
        yearObj.totalVotes = el["TOTAL VOTES"];
      }
      return;
    }
    yearObj[el.STATE] = {};
    stateResults = yearObj[el.STATE];
    if (el["TOTAL VOTES"] == undefined) {
      stateResults.totalVotes = el["TOTAL. VOTES"];
    } else {
      stateResults.totalVotes = el["TOTAL VOTES"];
    }
    stateResults.demVotes = el.DemVotes;
    stateResults.demPer = el.DemPer;
    stateResults.demEv = el.DemEV;
    stateResults.repVotes = el.RepVotes;
    stateResults.repPer = el.RepPer;
    stateResults.repEv = el.RepEV;
  });
}

var maybePrint = function() {
  if (remaining <= 0) {
    console.log(finalResults);
    console.log(JSON.stringify(finalResults));
  }
}

d3.csv("data/2016_Election.csv", function(data) {
  finalResults[2016] = {};
  finalResults[2016].demCandidate = "Hillary Clinton";
  finalResults[2016].repCandidate = "Donald Trump";
  addResults(data, finalResults[2016]);
  --remaining;
  maybePrint();
});

d3.csv("data/2012_Election.csv", function(data) {
  finalResults[2012] = {};
  finalResults[2012].demCandidate = "Barack Obama";
  finalResults[2012].repCandidate = "Mitt Romney";
  addResults(data, finalResults[2012]);
  --remaining;
  maybePrint();
});

d3.csv("data/2008_Election.csv", function(data) {
  finalResults[2008] = {};
  finalResults[2008].demCandidate = "Barack Obama";
  finalResults[2008].repCandidate = "John McCain";
  addResults(data, finalResults[2008]);
  --remaining;
  maybePrint();
});

d3.csv("data/2004_Election.csv", function(data) {
  finalResults[2004] = {};
  finalResults[2004].demCandidate = "John Kerry";
  finalResults[2004].repCandidate = "George W. Bush";
  addResults(data, finalResults[2004]);
  --remaining;
  maybePrint();
});

d3.csv("data/2000_Election.csv", function(data) {
  finalResults[2000] = {};
  finalResults[2000].demCandidate = "Albert Gore, Jr.";
  finalResults[2000].repCandidate = "George W. Bush";
  addResults(data, finalResults[2000]);
  --remaining;
  maybePrint();
});

d3.csv("data/1996_Election.csv", function(data) {
  finalResults[1996] = {};
  finalResults[1996].demCandidate = "William J. Clinton";
  finalResults[1996].repCandidate = "Robert Dole";
  addResults(data, finalResults[1996]);
  --remaining;
  maybePrint();
});

d3.csv("data/1992_Election.csv", function(data) {
  finalResults[1992] = {};
  finalResults[1992].demCandidate = "William J. Clinton";
  finalResults[1992].repCandidate = "George Bush";
  addResults(data, finalResults[1992]);
  --remaining;
  maybePrint();
});

d3.csv("data/1988_Election.csv", function(data) {
  finalResults[1988] = {};
  finalResults[1988].demCandidate = "Michael Dukakis";
  finalResults[1988].repCandidate = "George Bush";
  addResults(data, finalResults[1988]);
  --remaining;
  maybePrint();
});

d3.csv("data/1984_Election.csv", function(data) {
  finalResults[1984] = {};
  finalResults[1984].demCandidate = "Walter Mondale";
  finalResults[1984].repCandidate = "Ronald Reagan";
  addResults(data, finalResults[1984]);
  --remaining;
  maybePrint();
});

d3.csv("data/1980_Election.csv", function(data) {
  finalResults[1980] = {};
  finalResults[1980].demCandidate = "Jimmy Carter";
  finalResults[1980].repCandidate = "Ronald Reagan";
  addResults(data, finalResults[1980]);
  --remaining;
  maybePrint();
});

d3.csv("data/1976_Election.csv", function(data) {
  finalResults[1976] = {};
  finalResults[1976].demCandidate = "Jimmy Carter";
  finalResults[1976].repCandidate = "Gerald R. Ford";
  addResults(data, finalResults[1976]);
  --remaining;
  maybePrint();
});

d3.csv("data/1972_Election.csv", function(data) {
  finalResults[1972] = {};
  finalResults[1972].demCandidate = "George McGovern";
  finalResults[1972].repCandidate = "Richard M. Nixon";
  addResults(data, finalResults[1972]);
  --remaining;
  maybePrint();
});

d3.json("data/finalResults.json", function(data) {
  console.log(data);
});