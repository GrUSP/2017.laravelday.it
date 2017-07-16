# Conference site

## Edit contents

#### Conference data

All dynamic data is **ONLY** inside `_data` folder

#### Page contents

Every content page is inside `_includes/page-name-folder`

#### Frontend code

CSS and JavaScript source code are inside `_frontend` folder

- CSS: `_frontend/frontsize`
- JavaScript: `_frontend/js`

The source code is built inside `/css` and `/js` folder in the root of the project.

---

## Installation

Ensure to have [Jekyll](jekyll) installed with this command:

```
sudo gem install jekyll
```

Install [nodejs](nodejs) and the components you need:

```
npm install && cp node_modules/dustman/gulpfile.js .
```

---

## Build

#### HTML

To build the site with [HTTP server](localhost):

```
jekyll serve
```

#### CSS and JavaScript

Now you can watch your CSS build with this:

```
./node_modules/.bin/gulp watch -S --config dustman-conference-name.yml
```

#### CSS and JavaScript + view HTML pages

```
./node_modules/.bin/gulp -S --config dustman-conference-name.yml && jekyll serve
```

For test the local view go to [http://127.0.0.1:4000](localhost)

---

## How to add HTML contents

To add contents without edit SASS, create a page in the root path and write code with this simple widgets.

#### Page wrapper

Wrap contents inside this page wrapper:

```html
<div class="limit">
  wrapped contents
</div>
```

#### Page huge title

This will show a huge title in the center of the page:

```html
<div class="intro intro--no-height">
  <h1 class="intro__title">Code of Conduct</h1>
</div>
```

#### Grid

To choose the number of the columns per row use this modifier `row--2` where **2** is the number of columns per row.

```html
<div class="row row--2">
  <p class="row__column">
    Single paragraph column
  </p>
  <p class="row__column">
    Single paragraph column
  </p>
</div>
```

Available columns set modifiers:

- `row--2`
- `row--3`
- `row--4`

To use one column per row, just skip adding the modifier:

```html
<div class="row">
  <p class="row__column">
    Single column row
  </p>
  <p class="row__column">
    Single column row
  </p>
</div>
```


Remember the more columns you use per row, the smaller text paragraphs you need to put inside them.

---

#### Grid impagination

If you need a title and more paragraphs per row add it outside the row to ensure a good vertical align between paragraphs:

```html
<h2 class="row__title">The Short Version</h2>

<div class="row row--2">
  <div class="row__column">
    ...
  </div>
  <div class="row__column">
    ...
  </div>
</div>
```

If you need multiple paragraphs per column, use this approach:

```html
<div class="row row--2">
  <div class="row__column">
    <p class="row__text">
      Multiple paragraphs per column
    </p>
    <p class="row__text">
      Multiple paragraphs per column
    </p>
    <p class="row__text">
      Multiple paragraphs per column
    </p>
  </div>
  <div class="row__column">
    <p class="row__text">
      Multiple paragraphs per column
    </p>
    <p class="row__text">
      Multiple paragraphs per column
    </p>
  </div>
</div>
```

---

Coded with &#9825; by [@vitto](https://github.com/vitto) in [@ideato](https://www.ideato.it)

[jekyll]: https://jekyllrb.com/
[localhost]: http://127.0.0.1:4000
[nodejs]: https://nodejs.org/
