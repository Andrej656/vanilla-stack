import Image from "next/image";
import { maxFontSize } from "@/styles/fluid/settings";
import { Inline, Text } from "@/components/base";
import * as styles from "./Companies.css";
import { chunkArray } from "@/helpers";

const companies = [
  {
    name: "Transistor",
    logo: "/assets/bns.svg",
    width: 158,
    height: 88,
  },
  {
    name: "Tuple",
    logo: "/assets/bitcoin.svg",
    width: 105,
    height: 88,
  },
  {
    name: "StaticKit",
    logo: "/assets/stacks.svg",
    width: 127,
    height: 88,
  },
];

export default function Companies() {
  const companiesChunks = chunkArray(companies, 3);
  return (
    <section className={styles.section}>
      <Text as="p" align="center" className={styles.text}>
        Trusted by Bitcoin and Stacks community
      </Text>
      <Inline align="center" gap="l-xl">
        {companiesChunks.map((companiesChunk, index) => (
          <Inline
            key={`companies.${index}`}
            as="ul"
            gap="l-xl"
            rowGap="m-l"
            className={styles.logosList}
          >
            {companiesChunk.map(({ name, logo, width, height }) => (
              <li key={name}>
                <Image
                  src={logo}
                  alt={name}
                  width={width}
                  height={height}
                  style={{
                    // fluid image size based on intrinsic width and height
                    width: `calc((${width / maxFontSize}) * 1em)`,
                    height: `calc((${height / maxFontSize}) * 1em)`,
                  }}
                />
              </li>
            ))}
          </Inline>
        ))}
      </Inline>
    </section>
  );
}
