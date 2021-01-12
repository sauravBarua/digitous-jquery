$("button").click(function() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/france",
        dataType: 'json',
        success: function(result) {
            result.name;
        }
    });
});