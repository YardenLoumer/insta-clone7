export default class Page {
    constructor(container){
        console.log('from page', container)
        this.fragment = document.createDocumentFragment()
        this.fragment.append(...container.map(x => x.render()))
    }
}