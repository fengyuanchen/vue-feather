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
      <vue-feather :type="icon"></vue-feather>
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
  <vue-feather type="star" stroke="red"></vue-feather>
  <vue-feather type="star" stroke="green"></vue-feather>
  <vue-feather type="star" stroke="blue"></vue-feather>
  <vue-feather type="star" stroke="none" fill="red"></vue-feather>
  <vue-feather type="star" stroke="none" fill="green"></vue-feather>
  <vue-feather type="star" stroke="none" fill="blue"></vue-feather>
  <vue-feather type="star" stroke="red" fill="red"></vue-feather>
  <vue-feather type="star" stroke="green" fill="green"></vue-feather>
  <vue-feather type="star" stroke="blue" fill="blue"></vue-feather>
</template>
```

## Icon Class

```html
<template>
  <vue-feather type="star" icon-class="custom-class"></vue-feather>
</template>
```

## Sizes

```html
<template>
  <vue-feather type="star"></vue-feather>
  <vue-feather type="star" size="36"></vue-feather>
  <vue-feather type="star" size="48"></vue-feather>
  <vue-feather type="star" size="36px"></vue-feather>
  <vue-feather type="star" size="1.5rem"></vue-feather>
</template>
```

## Weights

```html
<template>
  <vue-feather type="star" stroke-width="1"></vue-feather>
  <vue-feather type="star"></vue-feather>
  <vue-feather type="star" stroke-width="3"></vue-feather>
</template>
```

## Animated Icons

```html
<template>
  <p>
    <span>Slow:</span>
    <vue-feather type="loader" animation="spin" animation-speed="slow"></vue-feather>
    <vue-feather type="settings" animation="spin" animation-speed="slow"></vue-feather>
    <vue-feather type="sun" animation="spin" animation-speed="slow"></vue-feather>
    <vue-feather type="rotate-cw" animation="spin" animation-speed="slow"></vue-feather>
    <vue-feather type="rotate-cw" animation="pulse" animation-speed="slow"></vue-feather>
  </p>
  <p>
    <span>Normal:</span>
    <vue-feather type="loader" animation="spin"></vue-feather>
    <vue-feather type="settings" animation="spin"></vue-feather>
    <vue-feather type="sun" animation="spin"></vue-feather>
    <vue-feather type="rotate-cw" animation="spin"></vue-feather>
    <vue-feather type="rotate-cw" animation="pulse"></vue-feather>
  </p>
  <p>
    <span>Fast:</span>
    <vue-feather type="loader" animation="spin" animation-speed="fast"></vue-feather>
    <vue-feather type="settings" animation="spin" animation-speed="fast"></vue-feather>
    <vue-feather type="sun" animation="spin" animation-speed="fast"></vue-feather>
    <vue-feather type="rotate-cw" animation="spin" animation-speed="fast"></vue-feather>
    <vue-feather type="rotate-cw" animation="pulse" animation-speed="fast"></vue-feather>
  </p>
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
| animation | `string` | - | spin, pulse | The animation type of the icon. |
| animation-speed | `string` | - | slow, fast | The animation speed of the icon. |
| fill | `string` | `"none"` | - | The fill color of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)). |
| icon-class | `string` | `""` | - | A string of classes to assign to the icon element. This is useful for implementation with CSS frameworks, such as Tailwind CSS. |
| size | `number \| string` | `24` | - | The size of the icon. Set both width and height of the icon. |
| stroke | `string` | `"currentColor"` | - | The stroke color of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke)). |
| stroke-linecap | `string` | `"round"` | butt, round, square | Specifies the shape to be used at the end of open subpaths when they are stroked ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)). |
| stroke-linejoin | `string` | `"round"` | miter, round, bevel | Specifies the shape to be used at the corners of paths or basic shapes when they are stroked ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)). |
| stroke-width | `number \| string` | `2` | - | The stroke width of the icon ([spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)). |
| tag | `string` | `"i"` | - | The tag of the icon. |
| type | `string` | `"feather"` | All [Feather](https://feathericons.com/)'s icons. | The type of the icon. |
