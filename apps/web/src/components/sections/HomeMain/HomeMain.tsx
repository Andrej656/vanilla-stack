import Balancer from "react-wrap-balancer";
import { Text, Inline, Button } from "@/components/base";
import Scribble from "./Scribble";
import PlayIcon from "./PlayIcon";
import * as styles from "./HomeMain.css";

export default function HomeMain() {
  function openVideoPopup() {
    alert("Video popup opened");
  }

  return (
    <main className={styles.main}>
      <Text as="h1" variant="heading2Xl" className={styles.headline}>
        <Balancer>
          BNS{" "}
          <em className={styles.emphasize}>
            Bitcon Naming
            <Scribble className={styles.scribble} />
          </em>{" "}
          system
        </Balancer>
      </Text>
      <Text as="p" className={styles.body}>
        <Balancer>
        BNS One is all-in-one platform for BNS investors to be able to register, renew, manage, make/accept offers on their BNS names and much more, all in one place.
        BNS One is the first complete platform for BNS (Bitcoin Name System) and will empower BNS investors by providing them with all the tools they need to be able to manage their assets.

        </Balancer>
      </Text>
      <Inline align="center" gap="s-m" rowGap="xs-s">
        <Button secondary url="/register">
          Join DID world
        </Button>
        <Button outline iconBefore={<PlayIcon />} onClick={openVideoPopup}>
          See how it works
        </Button>
      </Inline>
    </main>
  );
}
