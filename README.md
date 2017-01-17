# REACT Flickr task

A small application for exploring REACT consuming the Flickr API.

## Installation

1. Install all node dependencies `npm install`
2. Run `npm start`
3. Visit `http://localhost:8080` in your browser

## Considerations

Having never used REACT or webpack, alot of this is following documentation and tutorials online so may not be what's considered 'best practice'.

I have also tried to use a few different features from REACT including rendering REACT components using the Router.

For rapid development I've used Bootstrap served from a CDN mainly for the grid system and a few other components. In the real world, I would probably pull down the repo and compile the components that were being used rather than loading the entire package.

Likewise, I've also used JQuery only to handle ajax requests to the Flickr API and resolve CORS errors. Again, this was for rapid development and in a real world project, It would probably be better to use a dedicated AJAX package more suitable for REACT such as AXIOS [https://github.com/mzabriskie/axios].
