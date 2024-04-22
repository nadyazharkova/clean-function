export function checkLifes(characters) {
    const healthy = 'healthy';
    const wounded = 'wounded';
    const critical = 'critical';

    if (characters.health > 50) {
        return healthy;
    } else if (characters.health >= 15 & characters.health <= 50) {
        return wounded;
    } else {
        return critical;
    }
}