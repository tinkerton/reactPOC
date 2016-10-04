
## Proof of Concept React Native with Native Starter Kit

## Get Started

###1. System Requirements

* Globally installed [node](https://nodejs.org/en/) >= 4.0

* Globally installed [npm](https://www.npmjs.org/) >= 3.0

* Globally installed [rnpm](https://github.com/rnpm/rnpm) *(only if React Native version < 0.29)*

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.



###2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/start-react/native-starter-kit.git

$ cd native-starter-kit/

$ npm install
```

If React Native < 0.29

```sh
$rnpm link
```

If React Native >= 0.29

```sh
$ react-native link
```

###3. Simulate for iOS

**Method One**

*	Open the project in XCode from **ios/NativeStarterKit.xcodeproj**

*	[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation:

*	CodePush key deployment

	*	Go to **"Build Settings"** and search for keyword - **codepush**.

	*	Add the **codepush production key** in place of **Release key**

	*	Add the **codepush staging key** in place of **Debug key**

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal

```sh
$ react-native run-ios
```

###4. Simulate for Android

*	Codepush key deployment

	*	Open file **/android/app/build.gradle**

	*	Search for **buildTypes** and add following lines of code

```sh
.  .  .
buildTypes {
    release {
        buildConfigField "String", "CODEPUSH_KEY", "codepush production key"
        .  .  .
    }

    debug {
        buildConfigField "String", "CODEPUSH_KEY", "codepush staging key"
    }
}
.  .  .
```

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```

Note: If you are building Native Starter Kit for first time on your system, please follow Method One to simulate on iOS. (To link the CodePush plugin through Xcode for iOS)


For apps with more advance designs, please visit **[StrapMobile](https://strapmobile.com/)**.
