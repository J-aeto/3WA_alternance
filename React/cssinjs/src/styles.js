// On peut définir un objet contenant notre style:
/*
- Les noms de propriétés doivent être transformés en camelCase
- Virgules à la place des points virgule CSS
- Les valeurs données doivent être en string, si on donne number il sera considéré
comme étant en 'px'. Quelque soit l'unité différente de 'px', il faudra la préciser
explicitement
*/

export const centralPanelStyle = {
    minWidth: "60vh",
    minHeight: "72vh",
    backgroundColor: "bisque",
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}


export const appHeader = {
    backgroundColor: "#282c34",
    minHeight: "10vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}
