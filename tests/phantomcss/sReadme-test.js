casper.thenOpen('https://github.com/ACC-Style/Strathmore')
.then(function() {
  phantomcss.screenshot('#readme', 'ReadME');
});