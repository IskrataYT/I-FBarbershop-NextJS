import  styles  from "./css/input.module.css"

const InputField = ({placeholder, type, margin, padding, value, onChange}) => {
  return(
    <input className={styles.input} type={type} placeholder={placeholder} style={{margin: margin, padding: padding}}   value={value}
      onChange={onChange}/>
  )
}

export default InputField