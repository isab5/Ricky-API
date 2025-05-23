import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard( {character, onClick } ) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={character.image} className={styles.avatar} alt={character.name} />
            <h3 className={styles.title}>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type || "Sem tipo"}</p>
            <p>{character.gender}</p>
            <p>{character.created}</p>
        </div>
    );
}