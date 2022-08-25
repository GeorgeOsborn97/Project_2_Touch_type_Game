# Your Snowsports Guide

![full-mockup](assets/readme-images/mockup-images/full-mockup.png)
"THE TOUCH TYPE GAME" was designed to provide a fun training tool to those wanting to improve their ability to touch type. The Idea was to create a fun, useful, simple yet slightly challenging game that visually would be reminiscent of old arcade games (astroids, space invaders etc...). The game contains two modes to test the skill of the user, the 'easy' mode contains only letters and numbers, 'hard' mode starts to incporporate special characters including those accesed by shift. THE TOUCH TYPE GAME aims to be useful to people of all ages looking to improve their ability to touch type.

Find a link to the deployed site [here](https://georgeosborn97.github.io/Code-Institute-Project1-Beginners-Guide-to-Snowsports/)

## contents:
1. [User experiance](#user-experiance)
   - [Mockup desings](#simple-initial-design-plans)
2. [Final product](#final-product)
   - [Before submission](#before-submission)
   - [After Submission](#after-submission)
   - [Whilst playing](#whilst-playing)
   - [After playing](#after-playing)
3. [Features](#features)
   - [The background and imagary](#the-background-and-imagary)
   - [The audio](#the-audio)
   - [General formatting](#general-formatting)
   - [The Game-Screen](#the-game-screen)
   - [Scoreboards](#scoreboards)
   - [Brand links](#brand-links)
   - [User form](#ask-us-form)
4. [Technology that was utilised](#technology-that-was-utilised)   
   - [Languages](#languages)
   - [External assets](#external-assets-utilised)
5. [Testing](#testing)  
   - [HTML W3C Validation](#html-w3c-validation)
   - [CSS Jigsaw validation](#jigsaw-validation)
   - [Lighthouse](#lighthouse)
   - [Desktop results](#desktop-results)
   - [Mobile results](#mobile-results)
   - [Manual testing](#manual-testing)
   - [Device testing](#device-testing)
   - [user feedback](#user-feedback)
6. [Deployment](#deployment)
7. [Credits/Acknowledgments](#creditsacknowledgments)
   - [Content](#content)
   - [Media](#media)  
8. [Final thoughts](#final-thoughts)    
___
## User experiance:
### What I wanted to achieve:

1. Create a fun and useful learning tool.

2. Create a game that will challenge the user regardless of their skill level.

3. Create a game that is replayable, allowing users to track their progress.

4. Create a game that through its visuals and audio reminds them of an old arcade experiance. 

5. Create a game that can be played across desktop and mobile devices

6. Create a game that provides the user a sense of accomplishment when they are finished playing.
___
### Simple initial design plans:
state | Mockup example |
--- | --- |
Initial | ![desktop mockup of what the user see's when the game opens](assets/images/readme-images/wireframeFirstImage.png) |
Whilst playing | ![desktop mock up of page 2 "getting strated"](assets/images/readme-images/wireFrameSecond.png) |
___
## Final Product
### Before Submission
![Final image of the top of the Index page on opening](assets/readme-images/final-images/final-image-page1-top.png)
### After Submission
![Final image of the top of the Index page after submission](assets/readme-images/final-images/final-image-page1-bottom.png)
### Whilst Playing
![Final image of the top of the index page whilst playing](assets/readme-images/final-images/final-image-page2-top.png)
### After Playing
![Final image of the top of the homeIndex page after playing](assets/readme-images/final-images/final-image-page2-bottom.png)
___
## Features: 
### The background and imagary:
   - the background image aims to provides a fitting general setting for the site, whilst not distracting from the elements the user will have the most interaction with.
   - The background slowly zooms in as to give the site a sense of life. The speed of this effect was considered heavily as it could not distract the user from the game whilst they are playing.
   - The pixilated text, space theme of the background and icons were specifically choosen to provide a sense of nostalgia. They aim to be reminiscent of games such as space invaders and astroids. 
![what the user first sees](assets/readme-images/opening-main-img.png)   
### The audio: 
   - There is a background piece of music that beigns after the user has submitted their name and difficulty. It follows the classic sci-fi game theme of the site and aims to begin to immerse the user.
   - Different sound effects are utilised throughout, the key ones are the 'fail' sound and 'correct' sound. These are present to give an audible que within the game, but also to provide a bit of tension to the game.
   - All audio utilised is all in servce of immersion and to make the game and by extension the site as a whole feel more alive and responsive to the user.
### General formatting:
   - To avoid distarction the 'game-screen' is front and centre on all devices.
   - All user interactivity occurs within the 'game-screen' this is done specifically to keep consistancy of where and how the key informtion is presented
   - All key elements have a border to help them stand out to the user. White is used consistantly to provide contrast from the dark background. The only exception to the is the 'game-screen'. Its border is purple as are a many of the elements within. This is done to draw the users focus to it as although it's a darker color, It stands out against the rest of the elements. 
![open text block](assets/readme-images/open-text.png) 
### The Game-Screen: 
   - The game-screen is the central div. It's formatted slightly differently from the rest of the elements in order to draw the users attention.
   - Initially the game-screen contains a place for the user to input a name and the difficulty that they wish to play at. (the differences are specified to by the 'ufo')
   - After submitting a name the form is removed and replaced with a small title, a paragraph defining the rules of the game and a new button that starts the game.
   - When the play button is clicked the title turns into a 5 second countdown, after which the instructions are removed, the title is blown up and is replaced by a random key taht the user needs to match to gain a point.
   - After the game the screen changes again to a winner or looser screen.
   - If the user clicks on the sceen one final time their initally inputted name and their score is logged to the relevent table, and the original form is recreated.
![video on home page](assets/readme-images/video-image.png)  
![map on "getting started"](assets/readme-images/map-image.png) 
### Scoreboards:
   - There are two scoreboards to represent the different modes, easy and hard. The users name and score is logged to the relevent board on completion of the game and is then sorted into numerical order, highest to lowest.
![social links](assets/readme-images/social-footer.png)   
### Score counter:
   - The counter that sits under the game-screen simply tacks the users score. For every succesful click the counter increases by one. When the game ends the counter stops tracking the users key presses.
![links to external brands](assets/readme-images/retail-links.png)   
### Fail icons:
   - At the top of the page are 5 green spaceships. These icons were chosen specifically to match the theme of the game.
   - On a misclick the icons turn red, loose their border and become 'explosions'. If all 5 turn red the game ends. This feature aims to create a sense of urgency within the user and give the game as a whole a sense of drama.
### UFO:
   - The UFO is an attempt at a creative way to set forward a small bit of key information.
   - The goal of this was to first of all set out the differences between the two modes and secondly to provide a striking opening image/effect that would grab the user as they enter the site.
![user form](assets/readme-images/user-form.png)   
___
## Technology that was utilised:
### languages:
* HTML5
* CSS3
* javascript
### external assets utilised:
* [GitHub](https://github.com/)
* [GitPod](https://gitpod.io/)
* [font awesome](https://fontawesome.com/)
* [google fonts](https://fonts.google.com/)
* [balsimq](https://uizard.com/)
* [amiresponsive](https://ui.dev/amiresponsive)
* Chrome devtools
* Google images
* [W3C HTML validator](https://validator.w3.org/)
* [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)
* [JShint Javascript validator](https://jshint.com/)
___
## testing:
In order to test responisve elements throughout the development process Chrome Devtools was used frequently.
### HTML W3C validation:
      - Apart from some small typo errors nothing was highlighted during HTML validation.
### Jigsaw validation:
   - No errors were highlighted during CSS validation at any stage.
### JShint validation:
   - No errors were highlighted during javascript validation at any stage.   
### Lighthouse:
#### Desktop results:
   - Index results
![index page desktop results](assets/readme-images/page1-desktop-results.png)
   - Getting started results
![getting started desktop results](assets/readme-images/page2-desktop-results.png)
   - What to Buy? results
![what to buy? desktop results](assets/readme-images/page3-desktop-results.png)
   - Ask us? results
![ask us? desktop results](assets/readme-images/page4-desktop-results.png)
#### Mobile results:
   - Index results
![index page mobile results](assets/readme-images/page1-mobile-results.png)
   - Getting started results
![getting started mobile results](assets/readme-images/page2-mobile-results.png)
   - What to Buy? results
![what to buy? mobile results](assets/readme-images/page3-mobile-results.png)
   - Ask us? results
![ask us? mobile results](assets/readme-images/page4-mobile-results.png)
### Manual Testing:
#### Feature Testing:
* Background images: 
   - To make sure the CSS providing the images worked correctly the previewed site cache was constantly refreshed. 
   - In order to ensure that all the background images correctly showed on all devices Chrome dev tools was used to simulate different devices.
* Font awesome icons:
   - The icons I have selected to show from Font awesome all are cleaerly present when the site is loaded.
   - The icons linked to the clapsable text held within the fieldset change from a person skiing to a burst when open. All clapsable text was opened and closed to ensure this was present across all clapsable text.
   - Safari/IOS does not show these changing font awesome icons. I believe this is a issue with IOS as this feature has been tested on mutiple other devices and works as designed.
* Hover effects:
   - When the curser is moved over the nav icon and the claspable text they turn white and blue respectively. 
   - When the navigation items in the nav menu are hovered over they appear underlined.
   - When the clapsable text, brand icons, social links and submit/refresh buttons are hovered over they increase by a scale of 1.01, 1.05, 1.2 and 1.5 respectively.
* clapsable text:
   - The clapsable text stays open after one click and will claspe again after a second click.   
* Video:
  - The video does not autoplay when the page is loaded.
  - when the video is clicked the video plays, it can be paused, started again and can enter and exit full screen.
* Map:
  - The map can be zoomed in and out, the highlighted pins can be selected on PC, and a the map can be enlarged to take the user to Googlemaps. 
  - On mobile when the map is selected Google maps is opened instantly.
* Ask us:
  - If no information any information is not entererd the form will not submit.    
* Internal and External links:
  - All external links open in a new tab.
  - All Internal links take the user to the correct page.
#### Device testing:
This site has been physically tested on:
   - ASUS ZenBook
   - Iphone X
   - Samsung Galaxy S20
After the initial deployment these are the bugs that need addressing:
   1. Brand logos not showing on either desktop or mobile.
      - This bug was due to an error in the pathway to the images, with that clear the images loaded fine
   2. Icons for clapsable text are the default arrows on mobile
      - This issue appears to only be a problem for IOS, the icons load fine on Android. Issue still needs addressing on IOS
   3. On mobile the nav bar icon is now present when it should not be.
      - This issue is also only on IOS and still requires a fix.
   4. on mobile when the nav bar is selected a blue border is visible.
      - This is also an IOS issue that requires a fix. 
      - This was fixed by applying an "outline:none !important" to the all summary elements.
   5. when the page is loaded on mobile the screen width is ok, however if you attempt to zoom out or scroll to the right, the image stops abrubtly and a margin with the background colour is visible on the right.
      - This issue was due to the width of the h1 element, the width was set to 90vw and this appears to of solved this problem.
   ___
## deployment:
All code was written in Gitpod, pushed to GitHub and deployed to GitHub Pages.

In order to deploy our site from GitHub to Github pages the stages are as follows:

   1. From the repostories page in GitHub select the project that needs to be deployed.
   2. go to settings then on the right hand side menu select pages.
   3. within this page go to the souce dropdown and select "main" then select save.
   4. from here the link appears to our deployed site.   
___
## credits/acknowledgments
### Content:
- All code was written by myself no external code was copied in this webpage. However stackoverflow was used regulary in order to gain a better understanding of how certain elements interact and best practices for implementation. As well as Dilshan Kelsen who helped me to style the arrow in a summary element his site and the specific page can be found [here](https://dilshankelsen.com/style-arrow-of-html-accordion/)
- All icons are from [Font awesome](https://fontawesome.com/icons)
- the font used was imported from Google fonts and created by Cadson Demak @ Principal design it can be viewed [here](https://fonts.google.com/specimen/Kanit?preview.text=Your%20Snowsports%20Guide&preview.text_type=custom#standard-styles)

### Media:
- All images used in this site were taken from Google Images.
- All credit for the Video in the home page goes to "The Bag o' Tricks" link to his page can be found [here](https://www.youtube.com/channel/UCaEXnwWYRc5ph2QqQQviWlA)
- Google maps was used for the Map on "getting Started"
- The Mock up and wireframes were created using both [amiresponsive](https://ui.dev/amiresponsive) and [Uizard](https://uizard.io/) respectivly.
___
## Final thoughts.
