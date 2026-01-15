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
- GUI Framework: Swing

## Architecture

### Engine

The large majority of code is a written as a reusable library.  This component includes not only the physics engine, 
but also the business logic of the application.  It is shared among the user interfaces (Web & GUI).

### Web UI

Built using Reagent.  This is a static SPA (Single Page Application) allowing the application to be run in a browser.

### Desktop GUI

Built using Swing allowing the app to be run as a desktop application.

### Android App

Built using Jetpack Compose with the physics engine compiled as an AOT Clojure JAR.

## Development

### Common commands
```shell
# run the specs
clj -M:test:spec

# transpile the cljs and run specs once
clj -M:test:cljs once

# Automatically transpile the cljs and run specs on each update
clj -M:test:cljs

# run the web app
open web/index.html

# run the desktop app
clj -M:gui
```

### Android

Prerequisites:
- Android Studio (or Android SDK with command line tools)
- Java 17+

```shell
# build the debug APK
cd android && ./gradlew assembleDebug

# install on connected device/emulator
cd android && ./gradlew installDebug

# run from Android Studio
# Open the android/ directory in Android Studio and click Run
```

The APK will be output to `android/app/build/outputs/apk/debug/app-debug.apk`.
