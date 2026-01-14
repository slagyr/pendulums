plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.micahmartin.pendulums"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.micahmartin.pendulums"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    packaging {
        resources {
            // Exclude duplicate Clojure files
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
            pickFirsts += "data_readers.cljc"
        }
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("androidx.activity:activity-ktx:1.8.2")

    // Clojure runtime
    implementation("org.clojure:clojure:1.12.0")

    // AOT-compiled pendulums engine JAR (copy from target/ after running: clj -T:build jar)
    implementation(files("libs/pendulums-engine-1.0.0.jar"))
}
