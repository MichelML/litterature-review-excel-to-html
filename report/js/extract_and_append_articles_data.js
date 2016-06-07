$.getJSON("analyses.json", function(data) {
    var items = [],
        articles = [];
    $.each(data, function(key, val) {
        articles.push(data[key])
    });

    //you need to reorder the array of article objects since the AJAX request is asynchronous
    articles.sort(function compareNumbers(a, b) {
        return a.year - b.year;
    });
    var legend = [],
        additionalcomments = [],
        additionalfindings = [],
        i = 1;
    $.each(articles, function(key, val) {
        if (val["authors"] === "Introna") val["legend"].split("!!!").forEach(function(value) {
            legend.push("<p class='col-xs-12'>" + value + "</p>");
        });
        if (val["additionalgeneralcommentsallstudies"]) additionalcomments.push("<p class='col-xs-12'>&#8226; " + val["additionalgeneralcommentsallstudies"]) + "</p>";
        if (val["additionalgeneralresultsallstudies"]) additionalfindings.push("<p class='col-xs-12'>&#8226; " + val["additionalgeneralresultsallstudies"] + "</p>");

        items.push("<h3 id='" + key + "'><strong>" + val["authors"] + " " + val["year"] + "</strong></h3>" +
            "<div class='row oddrow'>" +
            "<h5 class='col-xs-6'><strong>Type of study: </strong>" + val["typeofstudy"] + "</h5>" +
            "<h5 class='col-xs-6'><strong>Number of participants: </strong>" + val["n"] + "</h5>" +
            "</div>" +
            "<div class='row'>" +
            "<h5 class='col-xs-6'><strong>Inclination: </strong>" + val["inclination"] + "</h5>" +
            "<h5 class='col-xs-6'><strong>Prospective/descriptive: </strong>" + val["prospectivedescriptive"] + "</h5>" +
            "</div>" +
            "<div class='row oddrow'>" +
            "<h5 class='col-xs-6'><strong>Stakeholders involved: </strong><br>" + val["stakeholdersinvolved"].split(";").map(function(val, index) {
                if (!val.match(/[^\s]+/)) return "";
                else return index + 1 + ". " + val + "<br>";
            }).join("") + "</h5>" +
            "<h5 class='col-xs-6'><strong>Monitoring techniques studied: </strong><br>" + val["monitoringtechniquesstudied"].split(";").map(function(val, index) {
                if (!val.match(/[^\s]+/)) return "";
                else return index + 1 + ". " + val + "<br>";
            }).join("") + "</h5>" +
            "</div>" +
            "<div class='row'>" +
            "<h5 class='col-xs-6'><strong>Type of monitoring: </strong><br>" + val["Typeofmonitoring"].split(";").map(function(val, index) {
                if (!val.match(/[^\s]+/)) return "";
                else return index + 1 + ". " + val + "<br>";
            }).join("") + "</h5>" +
            "<h5 class='col-xs-6'><strong>Type of justice: </strong><br>" + val["Typeofjustice"].split(";").map(function(val, index) {
                if (!val.match(/[^\s]+/)) return "";
                else return index + 1 + ". " + val + "<br>";
            }).join("") + "</h5>" +
            "</div>" +
            "<div class='row oddrow'>" +
            "<h5 class='col-xs-12'><strong>Main conclusions of authors: </strong></h5><br><p class='col-xs-12'>" + val["mainconclusionsofauthors"].split(";").map(function(val, index) {
                if (!val.match(/[^\s]+/)) return "";
                else return "&#8226; " + val + "<br>";
            }).join("") + "</p>" +
            "</div>" +
            "<div class='row'>" +
            "<h5 class='col-xs-12'><strong>Personal comments: </strong></h5><br><p class='col-xs-12'>" + (function() {
                return val["personalcomment"].split(";").map(function(val, index) {

                    if (!val.match(/[^\s]+/)) return "";
                    else return "&#8226; " + val + "<br>";
                }).join("")
            })() + "</p>" +
            "</div>" +
            "<hr>"
        );
    });
    document.body.innerHTML += "<div class='row'><h4 class='col-xs-12'>Legend</h4>";
    legend.sort().forEach(function(value) {
        document.body.innerHTML += value
    });
    document.body.innerHTML += "</div><hr>";
    items.forEach(function(value) {
        document.body.innerHTML += value
    });
    document.body.innerHTML += "<div class='row'><h3 class='col-xs-12'>Additional General Findings</h3>";
    additionalfindings.forEach(function(value) {
        document.body.innerHTML += value
    });
    document.body.innerHTML += "</div>";
    document.body.innerHTML += "<div class='row'><h3 class='col-xs-12'>Additional General Comments</h3>";
    additionalcomments.forEach(function(value) {
        document.body.innerHTML += value
    });
});