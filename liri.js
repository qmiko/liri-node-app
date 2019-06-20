require("dotenv").config();

var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var x = process.argv[2];
var y = process.argv[3];

//Spotify Song Function
function liriSong(y) {
    if (y === undefined ) {
        y = "Liri doesn't do that"
    }
    spotify.search({
        type: "track",
        query: y
    },
        function (err, data) {
            if (err) {
                console.log("error occured" + err);
                return;
            }
            var arr = [];
            var songInfo = data.tracks.items;
            for (var i = 0; i < songInfo.length; i++) {
                var printInfo = {
                }

   
            }
        })
}
//I wanted to get to printing out the info from the spotify API
//Then I was looking to add in the bands in town API and random function
