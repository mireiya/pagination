$(document).ready(function() {
    $("#pages").paginate({
        visiblePage: 7,
        maxPage: 777,
        onPageChange: function(page) {
            $("#content").html(page);
        }
    });
});
