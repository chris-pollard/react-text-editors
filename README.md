# React Text Editors

react-text-editors is a website which compares two rich-text editor frameworks in the React ecosystem, DraftJS and Slate.js.

[Open App](https://react-text-editors.surge.sh/)

## What is a Rich-text Editor

According to Wikipedia:

> An online rich-text editor is the interface for editing rich text within web browsers, which presents the user with a "what-you-see-is-what-you-get" (WYSIWYG) editing area. The aim is to reduce the effort for users trying to express their formatting directly as valid HTML markup.

## Project concept

The original purpose of this web app was for a user to be able to take notes, think a less sophisticated version of *Evernote*.

<img src="/README_assets/wireframe.png" alt="wireframe" width="400"/>

After building a simple version with markdown preview, I quickly realised that what I was missing was a Rich-text Editor. After some time researching and experimenting, I came to the conclusion that there are two options when it comes to Rich-text Editing:

* Use someone else's (very rigid, less work upfront)
* Build your own using a framework (less rigid, more work upfront)

As I liked the flexibility and elegance of the frameworks (particularly DraftJS and Slate.js) and I didn't like how hard-coded off-the-shelf components were, I chose to learn more about these. I started to focus on Slatejs, as I really liked the clear documentation and the examples provided. Unfortunately, I came to a road block with Slate when I realised that the *setState* value was almost immutable, and I was trying to use the one editor for multiple documents (bad idea).

## Result

So, finally I decided to pivot and built a simply web app showcasing the two frameworks that I had learnt about for the week. The app is designed for a developer as the user, to assist them in deciding which framework to choose.

<img src="/README_assets/screen_shot.png" alt="screen shot" width="500"/>

## Learnings

After this intense week of going down rich-text rabbit holes, I have concluded:

* I will never take rich-text editors for granted again. I have a newfound respect for these interfaces and the complex logic going on in the background.
* Storage and state are incredibly important. The way text blocks and text elements are stored and kept in memory is critical for the developer's experience and for creating content that can be moved off the platform into other formats.
* Good developer documentation is so useful. While both frameworks were lacking extensive resources, the documentation was well laid out and enabled me to make a good start.

## License
[MIT](https://choosealicense.com/licenses/mit/)