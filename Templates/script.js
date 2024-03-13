$(document).ready(function() {
    $('#domainForm').submit(function(event) {
        event.preventDefault();
        var domain = $('#domainInput').val();
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: {domain: domain},
            success: function(response) {
                $('#domainResult').text(domain);
                $('#predictedLabel').text(response.predicted_label);
                window.location.href = '/result';
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
