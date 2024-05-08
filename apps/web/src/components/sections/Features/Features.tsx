import { useState } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button, Text } from "@/components/base";
import BaseSection from "../Base/BaseSection";
import * as styles from "./Features.css";

// TODO: Prefetch images when hovering over feature buttons
// https://web.dev/learn/design/responsive-images/#preloading-hints
// <link rel="preload" href="hero.jpg" as="image" fetchpriority="high">

const features = [
  {
    title: "Register",
    description:
      "Easily search and register your BNS names. Find the names you want through our intelligent suggestions algorithm. Bulk register up to 10 names.",
    image: "/assets/dashboard.webp",
  },
  {
    title: "Renew",
    description:
      "Renewing your BNS names became so much simpler with our two click renewal. Upload a CSV of all your names and we’ll provide you with real-time renewal alerts.",
    image: "/assets/dashboard.webp",
  },
  {
    title: "Send STX or BNS",
    description:
      "Make light work of registering and renewing BNS names with our ‘Send STX to many’ tool, in a few clicks up to 10 addresses can be funded at the speed of Nakamoto.",
    image: "/assets/dashboard.webp",
  },
  {
    title: "REST API",
    description:
      "We've developed a REST API for BNS to streamline integration and tooling processes. Now, integrating with BNS is easier than ever.",
    image: "/assets/dashboard.webp",
  },
];

export default function Features({ id }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleFeatureClick = (index: number) => () => {
    setCurrentIndex(index);
  };
  const currentFeature = features[currentIndex];

  return (
    <BaseSection
      id={id}
      className={styles.section}
      wrapContent
      primary
      backgroundImage="/assets/background-features.jpg"
      heading={`Everything you need in one place.`}
      text={`Well everything you need if you aren’t that picky about minor
    details like BNS biding.`}
    >
      {/* TODO: ARIA: tab role (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) */}
      <div className={styles.layout}>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={feature.title} className={styles.featureItem}>
              <Text as="h3" className={styles.featureTitle}>
                <Button
                  plain
                  onClick={handleFeatureClick(index)}
                  className={styles.featureTitleButton}
                  ariaSelected={index === currentIndex}
                  ariaRole="tab"
                >
                  {feature.title}
                </Button>
              </Text>
              <Text
                as="p"
                variant="bodyS"
                className={styles.featureDescription}
              >
                {feature.description}
              </Text>
            </li>
          ))}
        </ul>

        <Text
          as="p"
          align="center"
          variant="bodyM"
          className={styles.featureSeparateDescription}
        >
          <Balancer>{currentFeature.description}</Balancer>
        </Text>

        <div className={styles.featureImage}>
          {/* TODO: Add framer-motion ?? */}
          <div className={styles.featureImageInner}>
            <Image
              fill
              quality={90}
              src={currentFeature.image}
              alt={currentFeature.title}
              priority={currentIndex === 0 ? true : undefined}
            />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
