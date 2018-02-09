# Elephant Front-end Coding Challenge / Jerry Pallath

## Greeting

Hello, Elephant!  I was told that this project would take no more than an hour and that's how I initially approached it.  After navigating the markdown and wireframes-- I figured out this would take a lot longer than an hour!  So I spent a lot of last night and this morning finishing it up.  Forgive me on pixel perfection; I'm better with more time.  

Anyways this will be somewhat of a documentation of what I did in this project

## API

I honestly should have tested if the API was firing first before I even started this project.  A lot of my finishing touches was to make sure the API was being hit.  Originally I did an XMLHttpRequest (no jQuery allowed!) call to data/navigation and I kept getting a 404; I finally looked at the documentation and found that the api was actually located via the server through api/navigation.  Once I figured that out most of the work was autopilot.

I could've done a javasscript reductor function but since time was vital I went through with the more meticulous of rendering every button clickable.  This is why my app.js file is a few lines too long.

## Design
I spent the majority of last night working on the actual design of the page, both mobile and desktop.  I worked in an initial mobile first set up and then worked on desktop.  Since I only found out about the mask and pushing functions in the morning (i just thought they were just no animation menus), I did a lot of additional CSS to make sure both layouts had functioning front-ends.

### Desktop

It looks like I covered a majority of the functionality that you've listed in your checklist.  One gripe I have with my final design is that if you hover out of the UL box made with submenus-- it doesn't disappear.  It only disappears if you click the overlay.

#### Mobile

I had trouble with the chevrons.  I actually didn't know they were chevrons until I finished reading the README, I just used carats (^) and now I feel like I might spend way too much time editing my project to add custom css for chevrons, so I'll let it be.

##That's It
Hopefully you're satisfied with this.  I wish I had more time, or I gave myself adequate time to get ready for this challenge.  This is the best I can do with my limited time though.  I do hope you like it.

