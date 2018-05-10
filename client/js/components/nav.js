export const navBar = () => {
  return `
  <a id="profil" href="#"></a>
  <a id="inscription" href="subscribe.html"> inscription </a>
`
}

(() => {
    const nav = document.getElementById('nav')
    nav.innerHTML = navBar()
})()
