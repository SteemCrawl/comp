jQuery.fn.preventDoubleSubmission = function () {
    $(this).on('submit', function (e) {
        var $form = $(this);

        if ($form.data('submitted') === true) {
            e.preventDefault();
        } else {
           $form.data('submitted', true);
        }
    });

    return this;
};

$('form').preventDoubleSubmission();