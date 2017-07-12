$.fn.paginateCore = function(paginationData) {
    var currentPage = parseInt(paginationData.currentPage);
    var visiblePage = parseInt(paginationData.visiblePage);
    var maxPage = parseInt(paginationData.maxPage);

    var vhalf = Math.floor(visiblePage / 2);

    var first = 1;
    var index = 0;
    var pagingdiv = '<div class="paging-wrapper"><ul class="paging noselect" data-p="' + currentPage + '">';
    pagingdiv += '<li id="page-back" data-p="prev-page">&lt </li>';
    if (maxPage < 10) {
        for (index = 1; index <= maxPage; ++index) {
            pagingdiv += '<li id="page-' + index + '" data-p="' + index + '">' + index + ' </li>';
        }
    } else if (currentPage < visiblePage) {
        pagingdiv += '<li id="page-' + first + '" data-p="' + first + '">' + first + ' </li>';
        for (index = 2; index < ((maxPage < visiblePage) ? maxPage : visiblePage) + 1; ++index) {
            pagingdiv += '<li id="page-' + index + '" data-p="' + index + '">' + index + ' </li>';
        }
        pagingdiv += '<li class="paging" style="margin-left: 25px;" id="page-' + maxPage + '" data-p="' + maxPage + '">' + maxPage + '</li>';
    } else if (currentPage >= visiblePage && currentPage <= maxPage - visiblePage) {
        pagingdiv += '<li id="page-' + first + '" data-p="' + first + '" style="margin-right: 25px;">' + first + ' </li>';
        for (index = currentPage - vhalf; index < currentPage + visiblePage - vhalf; ++index) {
            pagingdiv += '<li id="page-' + index + '" data-p="' + index + '">' + index + ' </li>';
        }
        pagingdiv += '<li id="page-' + maxPage + '" data-p="' + maxPage + '" style="margin-left: 25px;">' + maxPage + '</li>';
    } else if (currentPage >= maxPage - visiblePage) {
        pagingdiv += '<li id="page-' + first + '" data-p="' + first + '" style="margin-right: 25px;">' + first + ' </li>';
        index = (maxPage - visiblePage < currentPage) ? maxPage - visiblePage : currentPage;
        for (; index <= maxPage; ++index) {
            pagingdiv += '<li id="page-' + index + '" data-p="' + index + '"> ' + index + '</li>';
        }
    }
    pagingdiv += '<li id="page-next" data-p="next-page"> &gt</li></a>';
    pagingdiv += '<span class="goto-text">Go to: </span><input type="number" id="goto-page" name="cpage" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>';
    pagingdiv += '<li id="page-goto" data-p="go-page" alt="Go to page" title="Go to page"> &gt&gt</li>';
    pagingdiv += '</ul></div>';

    this.html(pagingdiv);

    return this;
};

$.fn.paginate = function(pdata) {
    var p;
    var main = $(this);

    if (pdata.currentPage === undefined) pdata.currentPage = 1;
    if (pdata.visiblePage === undefined) pdata.visiblePage = 5;
    if (pdata.maxPage === undefined) throw new Error("maxPage is undefined!");

    $(this).paginateCore(pdata);
    $("#page-" + pdata.currentPage).addClass('active');
    $("ul.paging li").click(function() {
        var data = $(this).data("p");
        if (data === pdata.currentPage) return;
        if (data === "prev-page") {
            if (pdata.currentPage <= 1) return;
            $("ul.paging li").removeClass('active');
            p = pdata.currentPage <= 1 ? 1 : pdata.currentPage - 1;
        } else if (data === "next-page") {
            if (pdata.currentPage >= pdata.maxPage) return;
            $("ul.paging li").removeClass('active');
            p = pdata.currentPage >= pdata.maxPage ? pdata.maxPage : pdata.currentPage + 1;
        } else if (data === "go-page") {
            p = $("#goto-page").val();
            p = parseInt(p);
            if (!p || p === pdata.currentPage) return;
            $("ul.paging li").removeClass('active');
            p = p <= 1 ? 1 : (p >= pdata.maxPage ? pdata.maxPage : p);
        } else {
            p = parseInt(data);
        }
        pdata.currentPage = parseInt(p);
        main.paginate(pdata);
        $("#page-" + pdata.currentPage).addClass('active');
    });
    $("#goto-page").unbind().keypress(function(e) {
        var pval = $(this).val();
        if (e.which === 13 && pval) {
            pdata.currentPage = pval <= 1 ? 1 : (pval >= pdata.maxPage ? pdata.maxPage : pval);
            main.paginate(pdata);
        }
    });
    if (pdata.onPageChange !== undefined) {
        pdata.onPageChange(pdata.currentPage);
    }
}
