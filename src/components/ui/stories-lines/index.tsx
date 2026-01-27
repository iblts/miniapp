import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styles from './stories-lines.module.scss'

export const StoriesLines = ({
	lines = 3,
	time = 5000,
}: {
	lines?: number
	time?: number
}) => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => setCurrent(prev => prev + 1), time)

		return () => clearTimeout(timeout)
	}, [time])

	return (
		<ul className={styles.lines}>
			{new Array(lines).fill('').map((_, i) => (
				<li key={i} className={styles.line}>
					<div
						className={clsx(styles.inner, { [styles.active]: current === i })}
					/>
				</li>
			))}
		</ul>
	)
}
