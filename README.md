# react-smooth-hash-link

    **********{ react-smooth-hash-link }**********
The project "react-smooth-hash-link" is a very simple but essential program for every developer. This project will make it easier for developers to create hash links in React projects. There are other projects that do the same task, but they have some issues like some of them don't work in the mobile version, some of them can not generate shareable links using hash, which is a big problem. This project has solved all of these problems. Now let's enjoy the program. Happy Coding.....

[![npm]](https://www.npmjs.com/package/react-smooth-hash-link)

This is a solution to [React Router's issue of not scrolling to `#hash-fragments`](https://github.com/reactjs/react-router/issues/394#issuecomment-220221604) when using the `<Link>` component to navigate.

When you click on a link created with `react-smooth-hash-link` it will scroll to the element on the page with the `id` that matches the `#hash-fragment` in the link. This will also work for elements that are created after an asynchronous data load.

## Basics

```shell
npm i react-smooth-hash-link
```

`react` is a peer dependency.


### `<HashLink>`

```js
import { HashLink } from 'react-smooth-hash-link'

...

// use it just like a RRv6 <Link>
// the 'to' props accept only hash link (#anything or /#anything)
// the 'menu' props accept string or a set of tags. To learn more follow the documentation


<HashLink to="/some/path#with-hash-fragment" menu={'Demo'}/>


```

---


## Scrolling API

### `stopSmooth`

- By default it uses smooth scrooling. But if you don't want to use smooth scrooling then use 'stopSmooth'
- Smooth scroll to the element
- React Router Hash Link uses the native Element method `element.scrollIntoView()` for scrolling, and when the `smooth` prop is present it will call it with the smooth option, `element.scrollIntoView({ behavior: 'smooth' })`
- Note that not all browsers have implemented options for `scrollIntoView` - see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) and [Can I Use](https://caniuse.com/#feat=scrollintoview) - there is also a browser [polyfill for smooth scrolling](https://github.com/iamdustan/smoothscroll) which you can install separately so `smooth` will work in all browsers

```js
import { HashLink } from 'react-smooth-hash-link'

...

<HashLink to="/some/path#with-hash-fragment" stopSmooth menu={'Demo'}/>
```

---

## `Example`

visit the link https://codesandbox.io/s/eager-buck-w5zkpk


### `Component.js`

