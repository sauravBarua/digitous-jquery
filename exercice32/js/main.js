$(document).ready(function() {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data, statuts, response) {
            console.log(`Country Name: ${data[0].name}`);
            console.log(`Capitale Name: ${data[0].capital}`);
        }
    });
});