# Web Components
Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

# Concepts

 - **Custom Elements**: A set of JavaScript APIs for defining custom elements and their behavior, which can then be used as desired in your user interface.

 - **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
 
 - **HTML templates**:  The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

# Usage

To create a new web component, you start by defining a class that extends HTMLElement and implementing its behavior. Once you have defined the class, you can register it as a custom element using either `customElements.define()` or `CustomElementRegistry.define()`. This will make the custom element available for use in your HTML files, where you can use it just like any other standard HTML element.
Notice that when you register to the custom elements registry, you must provide a valid custom element name that contains a hyphen(kebab-case). This is to avoid conflicts with existing, or future, HTML elements.

```javascript
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    
  }
}
customElements.define('my-custom-element', MyCustomElement);
```

After registering the custom element, you can use it in your HTML files like any other HTML element. 

```html
<html>
  <head>
    <script src="my-custom-element.js"></script>
  </head>
  <body>
    <my-custom-element></my-custom-element>
  </body>
</html>
```

# Shadow DOM

DOM(Document Object Model) is a tree-structured model used to access, manage and manipulate the content of HTML, CSS and javascript codes of the web page. 

There are three types of DOM
  - DOM : DOM is the default structure that created by the browser.
  - Virtual DOM : Virtual DOM is a copy of the real DOM tree. It provides a better performance to the web application by rendering any changes first in Virtual DOM. 
  - Shadow DOM : The Shadow DOM encapsulates an html element from the rest of the application. Thus, the code in the shadow dom is not affected by the code in the rest of the application.

To add your HTML element to Shadow DOM, you can use ```Element.attachShadow()``` method. This methods takes a paremeter that ```mode:open``` to make the shadow DOM accessible or ```"mode:closed"``` to make it can not accessible from rest of the code. 

Once we attached a shadow DOM to a custom element, we can append HTML elements to it with using ```ShadowRoot.appendChild()``` method.

```javascript
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    
        const template = document.createElement('template');

        const shadowRoot = this.attachShadow({mode:"open"});
        shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('my-custom-element', MyCustomElement);
```

# Life Cycle Callbacks

Some special callback functions can be defined inside custom element's class definition.
   - ```connectedCallback```: Invoked when the custom element is  - first connected to the document's DOM.
   - ```disconnectedCallback```: Invoked when the custom element  is disconnected from the document's DOM.
   - ```adoptedCallback```: Invoked when the custom element is    moved to a new document.
   - ```attributeChangedCallback```: Invoked when one of the custom element's attributes is added, removed, or changed.

