$(document).ready(function() {
    $("#pages").paginate({
        visiblePage: 10,
        maxPage: 954,
        onPageChange: function(page) {
            $("#content").html(page);
            console.log(page);
        }
    });
});