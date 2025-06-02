const translate = {
    en: {
        btnTranslate: 'ENG',
        cardTitle: "Card Title",
        cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },

    id: {
        btnTranslate: "IDN",
        cardTitle: "Judul Kartu",
        cardText: "Disinlah sebuah kisah akan terpatri. Realitas yang menampar ekspetasi, Kenyataan yang menghancurkan imajinasi, dan fakta keji yang meruntuhkan semua mimipi. Teguhkan dirimu di dunia yang penuh kemunafikan."
    }
}

let currentLanguage = 'en'
document.getElementById('btnTranslate').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en'

    const lang = translate[currentLanguage]
    document.getElementById('btnTranslate').textContent = lang.btnTranslate
    document.getElementById('cardTitle').textContent = lang.cardTitle
    document.getElementById('cardText').textContent = lang.cardText
})