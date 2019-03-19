# Sparky Portfolio
[![License: MIT](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/m-i-n-a-r/sparky-portfolio/blob/master/LICENSE.md)\
Sparky Portfolio is an open source **responsive website** project of a simple yet beautiful portfolio/personal site. It's under the **MIT License**. Build your personal site in **half a day**!

### Status: V 1.1. Ready to be used!
- [ ] New sections (i accept suggestions!)
- [x] Monthly colors
- [x] Optimizations
- [x] Cleanup
- [x] Code comments

## Introduction
This little project started with a **question** i did to myself during my studies:

> Is a personal site useful? And how could people see it?

The short answer is: a site can be linked almost everywhere (Github, LinkedIn, YouTube, Facebook, Instagram, Telegram) so it's a good way to tell people **who you are** and **what you can do**. It could be a sort of online curriculum, just like LinkedIn, but more personal.

So i built a **small site**, starting from some libraries and templates, trying to create something customizable yet very, i mean very, simple. The result is a good looking site which contains a lot of personal informations in a small amount of space and in a **single page**. I'm still trying to figure out how to make it even more simple.

## Features
- Responsive site based on an heavily modified [html5up](https://html5up.net/) template.
- Customizable and simple layout.
- Customizable [Particles.js](https://vincentgarreau.com/particles.js/)!
- Animated logo, [Fontawesome 5](https://fontawesome.com/) icons.
- More to come...

## Screenshots!
![First look](https://i.imgur.com/oaSfF57.png)
![Skills section](https://i.imgur.com/OLlb6ON.png)
![Projects section](https://i.imgur.com/O1kERnR.png)
![Statistics section](https://i.imgur.com/yRPcl86.png)

## Contents
The project contains everything is needed and probably more. 
- The single page layout with **4 sections** (introduction, skills, projects, additional informations). Rearranging the content should be easy enough.
- The needed css, easily **customizable** and commented.
- Some javascript libraries, such as **particles.js**. You can easily customize particle.js, refer to the official [site](https://vincentgarreau.com/particles.js/).
- Various images (which are meant to be replaced), including the **favicon** (the small image in the tab title).

## Usage
Since this is my [personal site](https://minar.ml), you have to replace some assets and configure the layout to your liking.
1. **Clone** the repository to your machine, or simply **download** as a zip and unzip it.
2. The "core" of the site is the `index.html` file: here you will find the page layout.
3. Replace the images in the `/images` folder with your profile pic, your projects and your site icon. I used an **svg** for my logo, but you can replace it with a png.
4. Open `app.js` to customize particles.js. You can easily **remove** them, if you want. A little function changes the color scheme depending on the month. Removing or modifying it should be easy.
5. To change the **font** and customize buttons, dimensions and so on, just open `main.css` and read the comments inside. If something is not commented and you don't know what you're doing, don't modify it!
6. To **test** the site, just open the `index.html` in Chrome or in your favorite browser. Use the dev tools to show the **mobile version**, if you need it.

## What about the domain?
I use the `.ml` domain: it is free and renewable, you can learn more [here](https://my.freenom.com). Regarding the hosting, you have a lot of potential options, but my advice is to use **Firebase**:
- First thing first, [sign up or login](https://firebase.google.com/).
- Click on **go to console**.
- Start a **new project**.
- Open your new project and click on **hosting**.
- Now connect your personalized domain to the Firebase one.

Firebase is perfect for this kind of sites, in my opinion.