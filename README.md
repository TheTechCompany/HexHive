
<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/TheTechCompany/HexHive">
    <img src="images/HX2.1.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HexHive</h3>

  <p align="center">
    The extendable SaaS platform.
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

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Single SPA](https://single-spa.js.org/)
- [GraphQL](https://graphql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- NPM : ^8.3.1
- Node.js : ^16.13.0
- Docker : [Install](https://docs.docker.com/get-docker/)
- Docker Compose : [Install](https://docs.docker.com/compose/install/)

### Installation

```sh
  npm install @hexhive/dev-server -g
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Dev Server

#### Install

- [@hexhive/dev-server](https://npmjs.com/@hexhive/dev-server)

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

### Gateway GraphQL modules

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

Distributed under the GNU GPL v3 License. See `LICENSE.txt` for more information.

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
