<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TheTechCompany/HexHive">
    <img src="images/HX2.1.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HexHive</h3>

  <p align="center">
    The SaaS platform for the Hexagon Protocol.
    <br />
    <a href="https://docs.hexhive.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TheTechCompany/HexHive">View Demo</a>
    ·
    <a href="https://github.com/TheTechCompany/HexHive/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheTechCompany/HexHive/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Skip the boiletplate, deploy your solution to the world.

HexHive is built on the Hexagon Protocol, a protocol that allows developers to build decentralized applications sooner and keeps users in control of where and how they want to use their data.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Single SPA](https://single-spa.js.org/)
- [Neo4J](https://neo4j.com/)
- [GraphQL](https://graphql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm # viersion
- node # version 

You will needs connection details to both a Neo4j instance and a MongoDB instance.

### Installation

```sh
  npm install @hexhive/dev-server -g
```

   <p align="right">(<a href="#top">back to top</a>)</p>

## Environment Preperation

1. Create a new file called .env in packages/backends/hive-frontend
   This is to be filled out with connection details from your Neo4j and MongoDB instances in the followiong template:

```MONGO_URL=<YOUR MONGO URL HERE (REMEBER TO REPLACE THE <password> appropriately)>

  NEO4J_URI= <YOUR NEO4J URL HERE>
  NEO4J_USERNAME=<YOUR NEO4J URL HERE>
  NEO4J_PASSWORD=<YOUR NEO4J URL HERE>

  CLIENT_ID=<YOUR HEXHIVE AUTH CLIENT ID>
  CLIENT_SECRET=<YOUR HEXHIVE AUTH PASSWORD>

  BASE_DOMAIN=<DOMIAN FOR SESSION COOKIE>
  UI_URL=<HIVE FRONTEND ADDRESS>
```

2. Create a new file called .env in packages/backends/hive-gateway

```MONGO_URL=<YOUR MONGO URL HERE (REMEBER TO REPLACE THE <password> appropriately)>

  NEO4J_URI= <YOUR NEO4J URL HERE>
  NEO4J_USERNAME=<YOUR NEO4J URL HERE>
  NEO4J_PASSWORD=<YOUR NEO4J URL HERE>

  CLIENT_ID=<YOUR HEXHIVE AUTH CLIENT ID>
  CLIENT_SECRET=<YOUR HEXHIVE AUTH PASSWORD>
```

3. Create a new file called endpoints.json at packages/backends/hive-gateway
   Copy the example at example-endpoints.json and point in at the GraphQL servers you would like to use.

<!-- USAGE EXAMPLES -->

## Usage

### Dev Server
```sh

hex-dev --config ./applications.json
```

applications.json
```
{
  applications: [
    {
      name: "MyApp",
      route: "/app",
      app: "/entry.js",
      graph: "/graphql"
    }
  ]  
}
```

Admin will be available at http://localhost:7000/
Visit http://localhost:7000/dashboard/app to see your app.

### GraphQL modules

```
import { HiveGraph } from '@hexhive/graphql-server';

const graph = new HiveGraph({
  rootServer: `gateway server`
})

graph.start($PORT)
```

### Microfrontend

```
npx create-single-spa ./app
```

_For more examples, please refer to the [Documentation](https://docs.hexhive.io)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- Local development gateway
  - Local registry
  - Local frontend server
  - Local auth/db
- Federated data
- Realtime collaboration
- Shared file system

See the [open issues](https://github.com/TheTechCompany/HexHive/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TheTechCompany/HexHive.svg?style=for-the-badge
[contributors-url]: https://github.com/TheTechCompany/HexHive/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TheTechCompany/HexHive.svg?style=for-the-badge
[forks-url]: https://github.com/TheTechCompany/HexHive/network/members
[stars-shield]: https://img.shields.io/github/stars/TheTechCompany/HexHive.svg?style=for-the-badge
[stars-url]: https://github.com/TheTechCompany/HexHive/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheTechCompany/HexHive.svg?style=for-the-badge
[issues-url]: https://github.com/TheTechCompany/HexHive/issues
[license-shield]: https://img.shields.io/github/license/TheTechCompany/HexHive.svg?style=for-the-badge
[license-url]: https://github.com/TheTechCompany/HexHive/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
