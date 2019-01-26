# Feather

> Easy to use [Feather](https://feathericons.com/) icons component.

## Icons

```html
<template>
  <p>
    <input class="form-control" placeholder="Search icons..." @input="input" :value="keyword">
  </p>
  <ul class="icons">
    <li v-for="icon in icons" :key="icon">
      <feather :type="icon"></feather>
      <span>{{ icon }}</span>
    </li>
  </ul>
</template>

<script>
  import feather from 'feather-icons';

  const icons = Object.keys(feather.icons);

  export default {
    data() {
      return {
        icons,
        keyword: '',
      };
    },

    methods: {
      input(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.filter(event.target.value);
        }, 300);
      },

      filter(value) {
        value = value.trim().toLowerCase();
        this.icons = icons.filter(icon => icon.indexOf(value) !== -1);
        this.keyword = value;
      },
    },
  };
</script>

<style scoped>
  .icons {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .icons > li {
    background-color: #f8f8f8;
    padding: 0.5rem 1rem;
    transition: color 0.15s;
  }

  .icons > li:hover {
    color: #0074d9;
  }

  .icons > li > i {
    vertical-align: middle;
  }

  .icons > li > span {
    color: gray;
    margin-left: 0.5rem;
    transition: color 0.15s;
  }

  .icons > li:hover > span {
    color: inherit;
  }
</style>
```

## Colors

```html
<template>
  <div>
    <feather type="star" stroke="red"></feather>
    <feather type="star" stroke="green"></feather>
    <feather type="star" stroke="blue"></feather>
    <feather type="star" stroke="none" fill="red"></feather>
    <feather type="star" stroke="none" fill="green"></feather>
    <feather type="star" stroke="none" fill="blue"></feather>
    <feather type="star" stroke="red" fill="red"></feather>
    <feather type="star" stroke="green" fill="green"></feather>
    <feather type="star" stroke="blue" fill="blue"></feather>
  </div>
</template>
```

## Sizes

```html
<template>
  <div>
    <feather type="star"></feather>
    <feather type="star" size="36"></feather>
    <feather type="star" size="48"></feather>
    <feather type="star" size="36px"></feather>
    <feather type="star" size="1.5rem"></feather>
  </div>
</template>
```

## Weights

```html
<template>
  <div>
    <feather type="star" stroke-width="1"></feather>
    <feather type="star"></feather>
    <feather type="star" stroke-width="3"></feather>
  </div>
</template>
```

## Animated Icons

```html
<template>
  <div>
    <p>
      <span>Slow:</span>
      <feather type="loader" animation="spin" animation-speed="slow"></feather>
      <feather type="settings" animation="spin" animation-speed="slow"></feather>
      <feather type="sun" animation="spin" animation-speed="slow"></feather>
      <feather type="rotate-cw" animation="spin" animation-speed="slow"></feather>
      <feather type="rotate-cw" animation="pulse" animation-speed="slow"></feather>
    </p>
    <p>
      <span>Normal:</span>
      <feather type="loader" animation="spin"></feather>
      <feather type="settings" animation="spin"></feather>
      <feather type="sun" animation="spin"></feather>
      <feather type="rotate-cw" animation="spin"></feather>
      <feather type="rotate-cw" animation="pulse"></feather>
    </p>
    <p>
      <span>Fast:</span>
      <feather type="loader" animation="spin" animation-speed="fast"></feather>
      <feather type="settings" animation="spin" animation-speed="fast"></feather>
      <feather type="sun" animation="spin" animation-speed="fast"></feather>
      <feather type="rotate-cw" animation="spin" animation-speed="fast"></feather>
      <feather type="rotate-cw" animation="pulse" animation-speed="fast"></feather>
    </p>
  </div>
</template>

<style scoped>
  p {
    align-items: center;
    display: flex;
    margin-bottom: 0.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  p > span {
    margin-right: 0.5rem;
    text-align: right;
    width: 4rem;
  }

  p > i {
    margin-right: 0.5rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| animation | `String` | - | spin, pulse | The animation type of the icon. |
| animation-speed | `String` | - | slow, fast | The animation speed of the icon. |
| fill | `String` | `'none'` | - | The fill color of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)). |
| size | `Number` \| `String` | `24` | - | The size of the icon. Set both width and height of the icon. |
| stroke | `String` | `'currentColor'` | - | The stroke color of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke)). |
| stroke-linecap | `String` | `'round'` | butt, round, square | Specifies the shape to be used at the end of open subpaths when they are stroked ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)). |
| stroke-linejoin | `String` | `'round'` | miter, round, bevel | Specifies the shape to be used at the corners of paths or basic shapes when they are stroked ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)). |
| stroke-width | `Number` \| `String` | `2` | - | The stroke width of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)). |
| tag | `String` | `'i'` | - | The tag of the icon. |
| type | `String` | - | All [Feather](https://feathericons.com/)'s icons. | The type of the icon. |
