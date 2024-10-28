import styles from "./custom-section.module.scss";
 
export interface CustomSectionProps {
  text: string;
}
 
const CustomSection = (props: CustomSectionProps) => {
  return (
    <section>
      <div className={styles.CustomSection}>
        {props.text}
      </div>
    </section>
  );
}

export default CustomSection;