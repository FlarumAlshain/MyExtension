export default function sortOdemeler(odemeler) {
    return odemeler.slice(0).sort((a, b) => {
        const aPos = a.id;
        const bPos = b.id;
        return aPos > bPos ? 1 : aPos < bPos ? -1 : 0;
    });
}