# pagination

## Usage

``` html
<div id="pages"></div>

```
$("#pages").paginate({
  currentPage: 1,
  visiblePage: 5,
  maxPage: 100,
  onPageChange: function (page) {
    //do something with page
  }
});
