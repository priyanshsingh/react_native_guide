![react native logo](https://miro.medium.com/max/1000/1*ub1DguhAtkCLvhUGuVGr6w.png)
# React Native Guide
This is a guide for beginners, if they want to dive in into the world of app development.

Read the documentation [here](https://reactnative.dev/docs/getting-started)


## Pre-requisites
- **JavaScript**
- **React.js** -> Components, JSX, States, Props etc.

## Overview
- React Native is a **Framework** for building **Native** apps using **JavaSctipt**.
- A **native** application is a software program that is developed for use on a **particular platform or device**.
- You donot need to know **IOS** or **Andriod** Development to develop native apps, unless you need to build very complex apps that directly use the native APIs of these platforms.
- All the code can be written in **JavaScript** and that code can be shared to make the IOS as well as the android application.
- IOS Development use **Objective C** or **Swing**.
- Android development use **Java** or **Kotlin**.
- Some common **examples** of apps that are built using **React Native** are:
  - **Facebook**
  - **Instagram**
  - **Pinterest**
  - **Skype**
  - **Uber Eats**
- There are **two** ways to build a **React Native** app:
  - **Expo CLI**
  - **React Native CLI**
- **Expo CLI** -> Expo is a set of **tools** and **framework** that sit on top of **React Native** and hides a lot of complexity from us. It makes incredibly **fast and easy** to build React Native Apps.

<br>
<p align="center">
<!-- <img src = "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s" style="max-width: 18%"></p> -->
<img src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s" alt="drawing" style="width:100px;"/>
<h2 align='center'>We will Build our First React Native App using EXPO CLI !!!</h2>
</p>
<!-- <img src = "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s" style="max-width: 18%"></p> -->
<!-- <img src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s" alt="drawing" style="width:100px;"/> -->

<br>


## Setting Up the Development Enviornment
### Installation:-
- Install Node.js -> **V12.0.0** or higher
- Install **Expo CLI** -> 
  ```npm i -g expo-cli```
- Download and install the Expo App on your mobile device -> **Expo** for Android and **Expo Go** for IOS devices
- Install Git
- Install VS Code
  - Add the VS Code Expo Extension
- Install Yarn
  - Global install ->```npm install --global yarn```
  - Check version -> ```yarn --version```
- Make sure that Windows Powershell is working properly
- **Extensions** for VS Code
  - **React Native Tools** (by **Microsoft**)
  - **React Native/React/Redux Snippets** (by **EQuimper**)
  - **Prettier** for formatting the code (by **Esban Peterson**)
  
<br>


## Your First App

Type the following command in a repo, in CMD:

    ```expo init app_name```