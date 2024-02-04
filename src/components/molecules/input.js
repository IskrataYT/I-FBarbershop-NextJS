import  styles  from './css/input.module.css'

const InputField = ({placeholder, type, margin, padding}) => {
    return(
        <input className={styles.input} type={type} placeholder={placeholder} style={{margin: margin, padding: padding}}/>
    )
}

export default InputField