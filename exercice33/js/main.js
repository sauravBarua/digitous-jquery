$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
                console.log(`Country Name: ${data[0].name}`);
                console.log(`Capitale Name: ${data[0].capital}`);
            }
        });
    });
});