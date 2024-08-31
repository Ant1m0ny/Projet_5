import annoncesData from "./annonces.json"

export function getAnnonces() {
    return annoncesData
}

export function getAnnonceById(id) {
    const annonce = annoncesData.find((element) => element.id === id);
    return annonce ? annonce : null
}