import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import  Logo from '../assets/hivesystems.svg';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<img src={Logo.src}  width="100px" height="50px"/>}>
        <li>
          <Link href="https://github.com/TheTechCompany/hexhive-common">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://api.hexhive.io/login">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern workplace for\n'}
            <span className="text-primary-500">Modern Work</span>
          </>
        }
        description="The easiest way to connect your work."
        button={
          <Link href="/signup">
            <a>
              <Button xl>Get started today</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
