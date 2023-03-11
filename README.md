# 🐛 react-marquease

[![npm](https://img.shields.io/npm/v/react-marquease?style=flat-square)](https://www.pkgstats.com/pkg:react-marquease)
[![NPM](https://img.shields.io/npm/l/react-marquease?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/react-marquease?style=flat-square)](https://www.pkgstats.com/pkg:react-marquease)
[![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/react-marquease?style=flat-square)](https://coveralls.io/github/ryanhefner/react-marquease)
[![codecov](https://codecov.io/gh/ryanhefner/react-marquease/branch/main/graph/badge.svg)](https://codecov.io/gh/ryanhefner/react-marquease)
[![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/react-marquease?style=flat-square)](https://circleci.com/gh/ryanhefner/react-marquease)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ryanhefner/react-marquease?style=flat-square)

HTML `<marquee>`s, the React way (with some handy control features).

## Install

Via [npm](https://npmjs.com/package/react-marquease)

```sh
npm install -S react-marquease
```

Via [Yarn](https://yarn.pm/react-marquease)

```sh
yarn add react-marquease
```

## How to use

```js
import Marquee from 'react-marquease'

const ExampleComponent = () => (
  <Marquee>
    <p>Scrolly text, moving through, my browser window, moving smooth.<p>
  </Marquee>
)
```

### Props

* `defaultOffset` - The `px` value to offset the initial scroll position of the `Marquee`
* `reverse` - Reverse the direction of the `Marquee`. (Scroll left to right)
* `pause` - Pause `Marquee` scrolling
* `speed` - Modifier applied to `offset` position as `Marquee` scrolls through the viewport. (Default: `1`)
* `ref` - References the outermost `div` of the component.
* `...rest` - Applied to outermost `div` of the component.


## License

[MIT](LICENSE) © [RyanHefner](https://www.ryanhefner.com)
