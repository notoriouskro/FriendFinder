// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


var userData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {

    res.json(userData);
  });



  app.post("/api/friends", function (req, res) {
    var newUser = req.body;
    console.log(newUser);

    //Lowest score wins
    //Set newUser.id to userData.length
    //each element in userData
    //each element in userData.scores
    // Compare each answer to the users currently in the array
    //clear totalScore = 0
    //ABS of userData subtract newUser 
    //Add each value to total score

    var lowestScore = 1000;
    var totalScore = 0;
    userData.forEach(function(user){
      totalScore = 0;
      user.scores.forEach(function(score){
        totalScore = Math.abs(score - newUser.scores);
        console.log("New user score", newUser.scores);
      });
      console.log("Total Score", totalScore);
      if (totalScore < lowestScore) {
        lowestScore = totalScore;
        lowestIdx = i;
      }
    });


    // Now push newUser into the friends array
    userData.push(newUser);

    var data = userData[lowestIdx];
    res.send(data);
    res.end();
  });

};
