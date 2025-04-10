import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard( {character, } ) {
    return (
        <div className={styles.card}>
            <img src={character.image} className={styles.avatar} alt={character.name} />
            <h3 className={styles.title}>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type || "Sem tipo"}</p>
            <p>{character.gender}</p>
        </div>
    );
}