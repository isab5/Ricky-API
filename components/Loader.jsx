import Image from 'next/image';
import styles from '../styles/Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src="/loading.gif" alt="Carregando..." width={300} height={300} priority />
            <p className={styles.message}>Carregando...</p>
        </div>
    );
}