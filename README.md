<!-- VARS -->
[license-badge]: https://img.shields.io/github/license/piiiiva/proffy?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/piiiiva/proffy?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/piiiiva/proffy?color=%238257E5
[netfly-badge]: https://img.shields.io/netlify/b4d3ee80-98f0-42d0-b3d0-13879c811a00?color=%238257E5
[language-count-badge]: https://img.shields.io/github/languages/count/piiiiva/proffy?color=%238257E5
[top-language-badge]: https://img.shields.io/github/languages/top/piiiiva/proffy?color=%238257E5
<!-- [codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db -->
<!-- [nlw-badge]: https://img.shields.io/badge/NLW-done-%21bcc1b&?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg== -->
<!-- [proffy-apk-badge]: https://img.shields.io/badge/Apk-download-important?logo=android&color=%238257E5 -->
<!-- [proffy-apk-url]: https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40pmqueiroz/mobile-16c4dd082b2e4fc892b33b58a3a9e529-signed.apk -->
<!-- [netfly-url]: https://pmqueiroz-proffy.netlify.app -->
[license-url]: https://github.com/piiiiva/proffy/blob/master/license
[issues-url]: https://github.com/piiiiva/proffy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/
[repo-size]: https://img.shields.io/github/repo-size/piiiiva/proffy?color=8257E5&

<!-- VARS -->



<div align="center">  
  <img width="100%" align="center" src="https://user-images.githubusercontent.com/60410507/89747545-98659d80-da95-11ea-96a6-4435ce933ed5.png">
  </img>
</div>

<br>
<p align="center">
    An online plataform to connect teachers(Proffys) with students, made 
    with React.js and React Native using Typescript during the<a href="https://nextlevelweek.com"> NLW (Next Level Week) #02 by Rocketseat </a>🚀
</p>

<div align="center">
  <img width="500px" align="center" src="https://user-images.githubusercontent.com/60410507/89748260-c8627000-da98-11ea-8d25-5a938f6c1cff.png">
  </img>
</div>

<div align="center">  
    
<a href="https://www.linkedin.com/in/rodrigo-piva-10772827/">
  <img alt="Linkedin Rodrigo Piva" src="https://img.shields.io/badge/-Rodrigo Piva-0072B1?style=flat&logo=Linkedin&logoColor=white" />
</a>

[![License][license-badge]][license-url]
![Git Stars][star-badge]

![GitHub repo size][repo-size]
![GitHub language count][language-count-badge]
![GitHub top language][top-language-badge]
<!-- ![Codacy Quality][codacy-badge] -->
<div align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Proffy%20-%20NLW%232&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fpiiiiva%2Fproffy%2Fmaster%2Finsomniaexport.json)

</div>

</div>

<!-- Badges -->

### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Web](#Web)
        * [Server](#Server)
        * [Mobile](#Mobile)
    * [Running](#Running)
* [Contributing](#Contributing-)
* [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/piiiiva/proffy.git

# Access the project folder
$ cd proffy
```

#### Requirements
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies you can check all dependencies in `packge.json` and install as you need.

To start the server you need the database, to make migrations use the command:

```
$ yarn knex:migrate
```
>The above command is a custom command made on `package.json` file. (Ln 8, Col 5)

##### Server
This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies you can check all dependencies in `packge.json` and install as you need.


##### Mobile

This projects use third party dependecies and fonts that need to be installed in development, use that command to install all needed dependencies and fonts

```ps
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn install
```
>The above command will install all third party dependencies used. If you want to install manually all the dependencies you can check all dependencies in `packge.json` and install as you need.

#### Running

To start the Web Server run the command

```ps
# Entering in web directory
$ cd web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering in Server directory
$ cd server

# Run the Back Server
$ yarn start
```

For this project we are using Expo. Make sure you have Expo installed in your phone or emulator.
<br>
To run the mobile version run the command

```ps
# Entering in Mobile directory
$ cd mobile

# Run the Mobile Version
$ expo start
```
>Note that you need scan the QRCode to open the app in your phone.

### Issues 📢

#### Report

In case you are having any problem do not be shy to report to us in [Issues][issues-url] session.

### Contributing 🤝 

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork piiiiva/proffy

# Clone your fork
$ git clone {your-fork-url}
$ cd proffy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project

### Todo 📌

Version 2.0 Features

- [ ] Splash screen
- [ ] Extended layout
    - [ ] Login
        - [ ] Remember me
    - [ ] Sign In
    - [ ] Succeed Screen
- [ ] User auth
    - [ ] Web
    - [ ] Mobile
- [ ] User logout
- [ ] Save favorite teachers
- [ ] Password recovery
- [ ] Teacher profile
- [ ] Pagination of classes result
- [ ] Show teacher schedule hours
- [ ] Deploy


### License 📝
This project is under the MIT license. See the [LICENSE][license-url] for more information.

<br>
Did you like this README? I was inspired by <a href="https://github.com/pmqueiroz/proffy/blob/master/.github/README.md">pmqueiroz</a>.

----
<br>
<div align="center">
Desenvolvido com 💜 por Rodrigo Piva
</div>
