$("h1").fadeIn("slow", function() {
    $("h1").animate({
        fontSize: "85px"
    })
    "slow"
},
);

$("button").click( function () {
    $(this).animate ({
        opacity: "0.8"},
    500,
    function () {
        $(this).animate ({
            opacity: "1"},
        500,)
    }
    )
});