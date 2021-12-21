# HexHive UI

## Get Started

Bootstrap monorepo if not done already `npx lerna bootstrap`

Start storybook
```sh
yarn storybook
```

## Building

```sh
yarn build
```

## Contributing

Each component should be under a single directory in src/components

Each component should have a relevant storybook in the same directory named $Component.stories.tsx

Each component should be exported through the src/components/index.tsx