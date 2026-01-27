import styles from './popup.module.scss'

export const Popup = ({ children }: React.PropsWithChildren) => {
	return <div className={styles.overlay}>{children}</div>
}
