import { useDynamicContent } from "@faststore/core";
import { ServerDynamicContentQuery } from "@faststore/core/api";

import { useRouter } from 'next/router';

import styles from "./custom-section.module.scss";
 
const CustomSection = () => {

  const { data } = useDynamicContent<ServerDynamicContentQuery>();
  const { extra }: any = data;
  console.log(data);

  return (
    <section>
      <div className={styles.CustomSection}>
        { extra.message }
      </div>
    </section>
  );
}

export default CustomSection;