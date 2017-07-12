$(document).ready(function() {
    $("#pages").paginate({
        visiblePage: 7,
        maxPage: 1749,
        onPageChange: function(page) {
            $("#content").html(page);
            console.log(page);
        }
    });
});
