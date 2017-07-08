# pagination

## Usage

``` html
<div id="pages"></div>
´´´

``` js
$("#pages").paginate({
  currentPage: 1,
  visiblePage: 5,
  maxPage: 100,
  onPageChange: function (page) {
    //do something with page
  }
});
´´´

