export interface Salg{
    id: string,
    nome: string,
    desc: string,
    fav: number,
    imagePath: string,
    link: string,
    ingredientes: string[]
    nomeAdj?: string
    adjacentes?: string[]
    modePreAdj?: string[]
    modoPreparo: string[]
    obs?: string
    porcoes: number
    tempoPreparo: number
}