import styles from "./Avatar.module.css";

export function Avatar(props){
  let { border, src } = props;

  return (
    <img
      src={src}
      className={border ? styles.avatarBorder : styles.avatar}
    />
  )
}