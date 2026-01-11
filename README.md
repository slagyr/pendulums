# Pendulums

A coupled pendulum simulator.  

## Overview

The use has the ability to set up a coupled pendulum scenario, and then activate the physics engine to watch how the 
pendulums behave.  

There is always a "root" pendulum.  Additional pendulums are added such that the pivot of the new pendulum is attached
to the bob of the last pendulum.  Arms are weightless and the bob of each pendulum is 1kg.

## Development Stack

- Language: Clojure
- Unit Testing: Speclj
- Web Framework: Reagent with c3kit/scaffold
- GUI Framework: HumbleIUI

## Architecture

### Engine

The large majority of code is a written as a reusable library.  This component includes not only the physics engine, 
but also the business logic of the application.  It is shared among the user interfaces (Web & GUI).

### Web UI

Built using Reagent.  This is a static SPA (Single Page Application) allowing the application to be run in a browser.

### Desktop GUI

Built using HumbleUI allowing the app to be run as a desktop application.
