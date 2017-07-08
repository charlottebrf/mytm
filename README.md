# MIND MAPP

```
.        :   ::::::.    :::.:::::::-.  
;;,.    ;;;  ;;;`;;;;,  `;;; ;;,   `';,
[[[[, ,[[[[, [[[  [[[[[. '[[ `[[     [[
$$$$$$$$"$$$ $$$  $$$ "Y$c$$  $$,    $$
888 Y88" 888o888  888    Y88  888_,o8P'
MMM  M'  "MMMMMM  MMM     YM  MMMMP"`

.        :    :::.  ::::::::::.::::::::::.
;;,.    ;;;   ;;`;;  `;;;```.;;;`;;;```.;;;
[[[[, ,[[[[, ,[[ '[[, `]]nnn]]'  `]]nnn]]'
$$$$$$$$"$$$c$$$cc$$$c $$$""      $$$""    
888 Y88" 888o888   888,888o       888o     
MMM  M'  "MMMYMM   ""` YMMMb      YMMMb   

   an interactive mind mapping tool
```

## What is this cool thing?

An interactive mind map! We are using Node.js, Express, Javascript, JQuery, Pug and HTML5 Canvas to make a board that you can add ideas to, then link your ideas to other ideas. Possibly with a snazzy interface.

We're testing with Mocha and Zombie and potentially Chai.

## How do I get in on this?

Not deployed to web yet- watch this space! We may also potentially deploy via Electron.

## How do I use it?

![mapp](https://github.com/charlottebrf/mytm/blob/lovely-readme/images/mindmapp.png)

The green bar on the left has a selection of tools to help you map out your ideas- you can type a word in the text box, then click the shape that you would like to create. The idea will then appear on the canvas to the right, and can be clicked and dragged around with the mouse. You can then add lines between ideas by double clicking a start point and an end point.

You can clear lines but leave ideas on the canvas by clicking the 'Clear Lines' button on the toolbar, or both lines and ideas by clicking 'Clear Canvas'. Different canvas colours can be toggled with the row of circular coloured buttons, and the toolbar can be shown or hidden with the toggle in the lower left.

An instruction sheet can be toggled with the '?' button.

## Our Approach

We spent a good amount of time at the beginning of the project discussing user stories and the most appropriate technologies to use to accomplish them. We ultimately settled on using Node.js for the server and backend, and HTML5 Canvas for the mind map itself- meaning we would be using JavaScript to interface with it and render lines and shapes. The user interface was made with CSS3 and a very small amount of JavaScript for toggling parts of the display.


Initial diagramming:


![Diagramming](https://github.com/charlottebrf/mytm/blob/lovely-readme/images/diagramming.jpg)


![Diagramming](https://github.com/charlottebrf/mytm/blob/lovely-readme/images/diagramming2.jpg)


We encountered a lot of entertaining glitches with our shapes- especially when trying to get them to display text:


![Glitches](https://github.com/charlottebrf/mytm/blob/lovely-readme/images/glitches1.png)


## User Stories

```
As a user,
So that I can start my mind map,
I would like to add an initial idea
```

```
As a user,
So that I can grow my mind map,
I would like to add additional ideas
```

```
As a user,
So that I can change or expand upon my ideas,
I would like to be able to edit my existing ideas
```

```
As a user,
So that I can link up ideas,
I would like to add lines between ideas
```

```
As a user,
So that I can engage visually with information,
I would like to style my ideas
```

```
As a user,
So that I can return to my beautifully organised ideas,
I would like to save and load a mind map
```

## Who is Team MYTM?

The following cool cats:

[Charlotte Fereday](https://github.com/charlottebrf)

[Michael Jacobson](https://github.com/michaelbjacobson)

[Jenny Wem](https://github.com/wemmm)

[Sam Pritchard](https://github.com/sampritchard)

[Andrew Clarke](https://github.com/Dino892)

## How do Team MYTM do things?
```
We have stand ups at 10:00am
We check in at 2:30pm
We reassess our MVP everyday
We commit in the present tense
We commit little and often
We thoroughly review code before merging
We value frontend development
But the backend should probably work too
Wellbeing comes first
We are not afraid of new technologies
```

## What are our objectives?

- Enjoy the learning experience
- Learn Canvas
- Improve front end testing abilities
- Improve understanding of Javascript
- Use multiple technologies on a single project
- Strong team communication with [waffle](https://waffle.io/charlottebrf/mytm) and [slack](https://slack.com/)
- Use Agile & XP values


## Resources and Tutorials That We Have Deeply Appreciated

- [render html in express](https://codeforgeek.com/2015/01/render-html-file-expressjs/)
- [but what actually is node?](https://github.com/node-girls/what-is-node)
- [testing in mocha and zombie](http://www.redotheweb.com/2013/01/15/functional-testing-for-nodejs-using-mocha-and-zombie-js.html)
- [an amazing project using similar tech](https://github.com/ilarne/team-whiteboard)
- [intro to canvas](https://www.w3schools.com/graphics/canvas_intro.asp)
- [makin' shapes](https://github.com/simonsarris/Canvas-tutorials/blob/master/shapes.js)
- UI colour scheme based on [Michael Jacobson](https://github.com/michaelbjacobson)'s Hawaiian shirts.
