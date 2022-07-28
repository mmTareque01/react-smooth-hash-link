# react-smooth-hash-link

    **********{ react-smooth-hash-link }**********
The project "react-smooth-hash-link" is a very simple but essential program for every developer. This project will make it easier for developers to create hash links in React projects. There are other projects that do the same task, but they have some issues like some of them don't work in the mobile version, some of them can not generate shareable links using hash, which is a big problem. This project has solved all of these problems. Now let's enjoy the program. Happy Coding.....



      Example
import React from 'react'
import { HashLink } from 'react-smooth-hash-link'

export default function Testing() {
  return (
    <>
      <HashLink
        path="/#demo"
        menu = {"Demo"}
      />
    </>
  )
}
