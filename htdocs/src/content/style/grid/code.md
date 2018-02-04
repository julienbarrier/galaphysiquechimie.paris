**The _CSS grid structure_ utilizes a flexbox-based layout to enable developers to quickly craft layout. Use of our grid classes is not required, but is there to help align and speed the development process with the design specifications of the grid. The grid system is loosely based around the semantics of the Bootstrap grid, so if you're familiar with the technicalities of that grid, this should feel similar.**

## Basic Usage

```html
<div class="bx--grid">
  <div class="bx--row">
    <div class="bx--col-xs-12 ">
      <p>Content space for bx--col-xs-12 bx--col-sm-6</p>
    </div>
  </div>
</div>
```

Let's run through the grid, there are a few fundamental building blocks that make up our layout.

#### `bx--grid`

The `bx--grid` creates the wrapper container to space your overall page according to design. This is meant to wrap your highest level content, typically used at `main` element below the Common Header.

#### `bx--row`

The `bx--row` initializes the element as a `display: flex` parent item, and is used as a wrapper element for any subsequent `bx--col-*` child elements. `bx--row` assumes child `bx--col` classes and applies a negative margin, it is not advised to use `bx--row` as a standalone wrapper.

#### `bx--col`

The `bx--col-{breakpoint}-{columnNumber}` is our mobile-first look at creating layouts. There are six major breakpoints

| Breakpoint Name | Media Query |
|-----------------|-------------|
| `xs`            | 0 - 576px   |
| `sm`            | > 576px     |
| `md`            | > 768px     |
| `lg`            | > 992px     |
| `xl`            | > 1200px    |
| `xxl`           | > 1600px    |

`bx--col-xs-{columnNumber}` is the grid layout that responds to mobile - all layouts should at th every least contain a `bx--col-xs-{columnNumber}` class on them. Any additional class is stacked on top of the original; at that breakpoint, the layout will adopt that number of columns.

So an application layout that had two blocks of content that were each full width at mobile, but then at a medium breakpoint (approximately tablet) became two columns would look like this

```html
<div class="bx--grid">
  <div class="bx--row">
    <div class="bx--col-xs-12 bx--col-md-6">Some content here</div>
    <div class="bx--col-xs-12 bx--col-md-6">Some content here</div>
  </div>
</div>
```


#### bx--col-{breakpoint}-auto

Instead of requiring a certain number of columns for an element to take up, you can also specify the auto class in lieu of a column number. This will tell the column to take as much room as the width of that column's content requires.

**Important:** All `bx--col` elements must be the direct child of a `bx--row` element.
