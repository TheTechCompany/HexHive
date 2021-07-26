import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Hive Core"
    description="A unified dashboard to organise your workspace."
  >
    <VerticalFeatureRow
      title="Hive Flow"
      description="Plan your work, organise your assets and workforce with Hive Flow. Gantt views, Files and Timeline planning tools enable you to see ahead"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Hive Command"
      description="Connect your field assets and create actions to run things behind the scenes, whether it's PLC's or Email actions Hive command has it all."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Hive API"
      description="Write your own applications with the Hive API to access and update your organisations data graph."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
