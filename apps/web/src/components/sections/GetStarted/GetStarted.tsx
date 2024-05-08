import { Button } from "@/components/base";
import BaseSection from "../Base/BaseSection";
import * as styles from "./GetStarted.css";

export default function GetStarted({ id }: { id?: string }) {
  return (
    <BaseSection
      id={id}
      className={styles.section}
      primary
      wrapContent
      backgroundImage="/assets/background-cta.jpg"
      heading={`Get started today!`}
      text={`Start your journey with BNS One today and level-up your BNS name management!.`}
      textOptions={{ className: styles.sectionText }}
    >
      <Button primary url="/register" className={styles.cta}>
        Register new DID
      </Button>
    </BaseSection>
  );
}
