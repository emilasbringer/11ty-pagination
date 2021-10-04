---
layout: base.njk
---

# Skapa sidor från data

Vi kan använda 11ty för att skapa sidor från datafiler (json eller js).

[11ty dokumentation](https://www.11ty.dev/docs/pages-from-data/)

Data fil, ```_data/possums.json```:

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

NJK templat för att skapa sidorna, ```src/possum-pages.njk```:

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

Detta exempel använder [passthrough](https://www.11ty.dev/docs/copy/) för att kopiera css till ```dist/``` mappen.

Det ser ut som följer i konfigurationsfilen ```.eleventy.js```:

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

För att göra kodexempel läsbara så använder sidan även [syntax highlightning](https://www.11ty.dev/docs/plugins/syntaxhighlight/) plugin för 11ty. Det hämtar sina stilar från [Prism](https://prismjs.com/).

För att arbeta vidare med sidorna så är det nog dags att du tittar på och provar [shortcodes](https://www.11ty.dev/docs/shortcodes/) eller
[image pluginet](https://www.11ty.dev/docs/plugins/image/).

Kom även ihåg att om du hämtar extern data så kan det vara klokt att [cacha](https://www.11ty.dev/docs/plugins/cache/) dessa. Detta kan med fördel kombineras med bilderna (något som borde göras och testas på robohash).

