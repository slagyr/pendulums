# Pendulums

A coupled pendulum simulator that lets you explore their potentially chaotic behavior.

### [TRY IT! at http://micahmartin.com/pendulums/](http://micahmartin.com/pendulums/)

<table>
  <tr>
    <td><img src="https://github.com/slagyr/pendulums/blob/master/assets/android.png?raw=true" alt="Android" width="300"/></td>
    <td><img src="https://github.com/slagyr/pendulums/blob/master/assets/desktop.png?raw=true" alt="Desktop Swing" width="300"/></td>
    <td><img src="https://github.com/slagyr/pendulums/blob/master/assets/web.png?raw=true" alt="Web" width="300"/></td>
  </tr>
</table>

## Overview

The use has the ability to set up a coupled pendulum scenario, and then activate the physics engine to watch how the 
pendulums behave.  

There is always a "root" pendulum.  Additional pendulums are added such that the pivot of the new pendulum is attached
to the bob of the last pendulum.  Arms are weightless and the bob of each pendulum is 1kg.

## Vibe Coding

This was perhaps my first true foray into "Vibe Coding".  Using Claude Code and [Beads](https://github.com/steveyegge/beads), I acted as the Project Owner writing requirements and let Claude do almost all the coding.  Claude required some technical guidance which I provided in the form of TODOs in the code. Claude handled my suggestions surprisingly well.  Together we created a non-trivial decoupled architecture with moderately comprehensive tests.

## Development Stack

- Language: Clojure
- Unit Testing: Speclj
- Web Framework: Reagent with c3kit/scaffold
- GUI Framework: Swing
- Android: Kotlin / Jetpack Compose

## Architecture

### Engine

The large majority of code is a written as a reusable library.  This component includes not only the physics engine, 
but also the business logic of the application.  It is shared among the user interfaces (Web, Desktop, Android).

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

#### Building the Engine JAR

The Android app requires an AOT-compiled JAR of the Clojure engine with the Clojure runtime bundled:

```shell
# Build the Android JAR (includes Clojure runtime)
clj -T:build android-jar

# Copy to Android libs directory
cp target/pendulums-engine-1.0.0.jar android/app/libs/

# build the debug APK
cd android && ./gradlew assembleDebug

# install on connected device/emulator
cd android && ./gradlew installDebug

# run from Android Studio
# Open the android/ directory in Android Studio and click Run
```

