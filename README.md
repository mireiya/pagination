# pagination

## Usage

Add these two in your html file.

´´´ html
<link href="pagination.css" rel="stylesheet" type="text/css"/>
<script src="paginate.js"></script>
´´´

### HTML Code
``` html
<div id="pages"></div>
```

--------------------------------

### Javascript Code
``` javascript
$("#pages").paginate({
  currentPage: 1,
  visiblePage: 5,
  maxPage: 100,
  onPageChange: function (page) {
    //do something with page
  }
});
```
