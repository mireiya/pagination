# Pagination

A simple jQuery pagination plugin.

## Demo

http://mireiya.github.io/pagination

--------------------------------

## Usage

Add these two lines in your html file.

``` html
<link href="pagination.css" rel="stylesheet" type="text/css"/>
<script src="paginate.min.js"></script>
```

--------------------------------

### HTML Code
``` html
<div id="pages"></div>
```

--------------------------------

### Javascript Code
``` javascript
$("#pages").paginate({
  currentPage: 1, //if not provided, default is 1
  visiblePage: 5, //if not provided, default is 5 (prefer odd numbers)
  maxPage: 100,   //must be provided by user, otherwise it will throw an error
  onPageChange: function (page) {
    //do something with page
  }
});
```

--------------------------------

### Licence

MIT
