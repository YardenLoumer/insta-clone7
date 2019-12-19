import Component from "../Component"
import htmlTemplate from './index.html'

export default class ComponentsPlace extends Component{
    constructor () {
        super('components_place')
        this.comments = []
    }

    add(comment){
        this.comments.push(comment)
    }

    render() {
        const element = super.render()
        element.append(...this.comments.map(x => x.render()))
        return element
        
    }

    getHtmlTemplate() {
        return htmlTemplate
    }
}