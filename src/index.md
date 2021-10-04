---
layout: base.njk
---

# Creating pages from data

We can use 11ty and datafiles (json or js) to create a series of pages.

[11ty documentation for this](https://www.11ty.dev/docs/pages-from-data/)

Data file, ```_data/possums.json```:

```json
[
  {
    "name": "Fluffy",
    "age": 2
  },
  {
    "name": "Snugglepants",
    "age": 5
  },
  {
    "name": "Lord Featherbottom",
    "age": 4
  },
  {
    "name": "Pennywise",
    "age": 9
  }
]
```

NJK template page for creating the pages, ```src/possum-pages.njk```:

{% raw %}
```markdown
---
pagination:
    data: possums
    size: 1
    alias: possum
permalink: "possums/{{ possum.name | slug }}/"
---

{{ possum.name }} is {{ possum.age }} years old
```
{% endraw %}

This example also makes use of [passthrough](https://www.11ty.dev/docs/copy/) for css.

```.eleventy.js```
```js
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}
```

To make code readable it also uses [syntax highlightning](https://www.11ty.dev/docs/plugins/syntaxhighlight/) plugin for 11ty.

