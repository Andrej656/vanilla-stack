import { useMemo, useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import clsx from "clsx";
import { Bleed, Button, Columns, Stack, Text } from "@/components/base";
import useMatchScreenSize from "@/hooks/match-screen-size";
import BaseSection from "../Base/BaseSection";
import Icon from "./Icon";
import Slider from "./Slider";
import * as styles from "./FeaturesAlt.css";

const features = [
  {
    icon: "/assets/feature-icon-contacts.svg",
    name: "BNS Features",
    title: "Stay on top of things with always up-to-date reporting features.",
    description:
      "Start your journey with BNS on BNS One, the all-in-one platform for registering, renewing, making/accepting offers and managing your BNS assets..",
    image: "/assets/feature-profit-loss.webp",
  },
  {
    icon: "/assets/feature-icon-inventory.svg",
    name: "BNS managment",
    title:
      "Complete BNS managment tools",
    description:
      "Ability to create a profile, add your email for alerts & upload the BNS names you want to be alerted on their expiry,  add your BTC address to your BNS name (sending/receiving BTC currently only compatible with Leather), add your Nostr, update your Zonefile, Renewal, Transfer & Revoke options, all with slick UI/UX.",
    image: "/assets/feature-inventory.webp",
  },
  {
    icon: "/assets/feature-icon-contacts.svg",
    name: "BNS holders",
    title:
      "Adoption of BNS and some numbers",
    description:
      "BNS has a relatively small adoption compared to ENS. At present BNS has 313,000 names registered where as ENS has cumulative registrations totally 3.27m, meaning that BNS registrations are less than 1/10th of ENS. .",
    image: "/assets/feature-contacts.webp",
  },
] as const;

export type FeatureName = "BNS Features" | "BNS managment" | "BNS holders";

export type Feature = {
  icon: string;
  name: FeatureName;
  title: string;
  description: string;
  image: string;
};

export default function FeaturesAlt({ id }: { id?: string }) {
  const matchMediumScreen = useMatchScreenSize("m");
  const featuresList = useMemo(
    () =>
      matchMediumScreen ? (
        <MediumScreenFeaturesAlt />
      ) : (
        <SmallScreenFeaturesAlt />
      ),
    [matchMediumScreen]
  );
  return (
    <BaseSection
      id={id}
      heading={`All in one platform for managing your BNS.`}
      text={`Because you’d probably be a little confused if we suggested you
    complicate your everyday digital identity needs.`}
      textOptions={{ className: styles.sectionText }}
    >
      {featuresList}
    </BaseSection>
  );
}

function SmallScreenFeaturesAlt() {
  return (
    <Stack gap="xl-2xl">
      {features.map((feature) => (
        <div key={feature.name} className={styles.featureItem}>
          <Icon featureName={feature.name} />
          <Text as="p" className={styles.featureName}>
            {feature.name}
          </Text>
          <Text as="h3" className={styles.featureTitle}>
            <Balancer>{feature.title}</Balancer>
          </Text>
          <Text as="p" variant="bodyS">
            <Balancer>{feature.description}</Balancer>
          </Text>
          <Bleed
            className={styles.featureSmallImageBleed}
            style={{ marginInline: `calc(var(--fluid-edge-width) * -1)` }}
          >
            <div className={styles.featureSmallImageWrapper}>
              <div className={styles.featureSmallImage}>
                <Image src={feature.image} alt={feature.name} fill />
              </div>
            </div>
          </Bleed>
        </div>
      ))}
    </Stack>
  );
}

function MediumScreenFeaturesAlt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleFeatureClick = (index: number) => () => {
    setCurrentIndex(index);
  };
  return (
    <>
      <Columns as="ul" columns={3} gap="m-l" className={styles.featuresList}>
        {features.map((feature, index) => {
          const isActive = index === currentIndex;
          const itemClassNames = clsx(styles.featureItem, {
            [styles.featureItemActive]: isActive,
          });
          return (
            <li key={feature.name} className={itemClassNames}>
              <Icon featureName={feature.name} />
              <Button
                plain
                onClick={handleFeatureClick(index)}
                className={styles.featureNameButton}
                ariaSelected={index === currentIndex}
                ariaRole="tab"
              >
                {feature.name}
              </Button>
              <Text as="h3" className={styles.featureTitle}>
                <Balancer>{feature.title}</Balancer>
              </Text>
              <Text as="p" variant="bodyS">
                <Balancer>{feature.description}</Balancer>
              </Text>
            </li>
          );
        })}
      </Columns>
      <Slider features={features} index={currentIndex} />
    </>
  );
}
