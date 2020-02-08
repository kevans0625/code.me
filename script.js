$(document).ready(function () {
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    let easyArr = ["multiply", "opposite-number",
        "sum-of-positive", "find-the-smallest-integer-in-the-array", "remove-first-and-last-character", "remove-string-spaces",
        "vowel-count", "disemvowel-trolls"];

    let mediumArr = ["get-the-middle-character", "century-from-year", "convert-a-number-to-a-string", "reversed-strings", "grasshopper-order-of-operations", "exes-and-ohs",
        "shortest-word", "descending-order", "sum-of-odd-numbers", ""];

    let hardArr = ["create-phone-number", "who-likes-it", "find-the-odd-int", "counting-duplicates", "replace-with-alphabet-position", "convert-string-to-camel-case"];


    let easy = $("#easy")
    let medium = $("#medium");
    let hard = $("#hard");

    let q = $("#questionText");

    easy.on("click", function () {
        challengeIndex = Math.floor(Math.random() * easyArr.length)
        challengeID = easyArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (data) {
            q.text(data.description)
            console.log(data)
        })
    })

    medium.on("click", function (){
        challengeIndex = Math.floor(Math.random() * mediumArr.length)
        challengeID = mediumArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (data) {
            q.text(data.description)
            console.log(data)
        })
    })

    hard.on("click", function (){
        challengeIndex = Math.floor(Math.random() * hardArr.length)
        challengeID = hardArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (data) {
            q.text(data.description)
            console.log(data)
        })
    })

    //Youtube API search call - Mathew 
    var searchQuery="software";
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchQuery+"&key=AIzaSyDXtUj8urMLq0xLC4obpF9I1L1NNkx2H-I",
        method: "GET"
    }).then(function (data) {
        console.log(data);
        console.log(data.items[1].id.videoId);
        var videoUrl="https://www.youtube.com/embed/"+ data.items[1].id.videoId;
        console.log(videoUrl);
        $(".videos").append('<li><iframe width="200" height="150" src='+videoUrl+'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>')
    })

});