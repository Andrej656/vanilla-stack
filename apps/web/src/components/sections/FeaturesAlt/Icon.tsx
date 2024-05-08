import { FC } from 'react';
import * as styles from './Icon.css';
import { FeatureName } from './FeaturesAlt';

interface IconProps {
  featureName: FeatureName;
}

const Icon: FC<IconProps> = ({ featureName }) => {
  let iconSrc = '';

  switch (featureName) {
    case 'BNS Features':
      iconSrc = '/assets/feature-icon-contacts.svg';
      break;
    case 'BNS managment':
      iconSrc = '/assets/feature-icon-inventory.svg';
      break;
    case 'BNS holders':
      iconSrc = '/assets/feature-icon-contacts.svg';
      break;
    default:
      break;
  }

  return <img src={iconSrc} alt={featureName} className={styles.icon} />;
};

export default Icon;
