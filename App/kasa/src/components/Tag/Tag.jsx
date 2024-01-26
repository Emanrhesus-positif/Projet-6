import classes from './Tag.module.scss'

export const Tag = ({ element }) => {

    return(<span className={classes.container}>{element}</span>)
}