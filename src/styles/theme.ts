export const lightTheme: ThemeInterface = {
    body: "white",
    text: '#818181',
    transitionTime: '.5s',
    navBg: '#f4f5f7',
    primaryColor: '#1976d2',
    titleColor: 'black'
}
export const darkTheme: ThemeInterface = {
    body: "#0f131a",
    text: "#c1c1c1",
    transitionTime: ".5s",
    navBg: '#1a1d24',
    primaryColor: '#1976d2',
    titleColor: 'white'
}

export interface ThemeInterface {
    body: string,
    text: string,
    transitionTime: string,
    navBg: string,
    primaryColor: string,
    titleColor: string
}