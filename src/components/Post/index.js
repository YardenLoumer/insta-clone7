import Component from "../Component"
import htmlTemplate from './index.html'
import CommentsPlace from "../CommentsPlace"

export default class Post extends Component{
    constructor (originalArgs = {}) {
        super('post')
        this.commentsPlace = new CommentsPlace
    
        const args = {
            user: {
                name: 'noname',
                family: 'nofamily',
                image: 'Oops'
            },
            content: {
                image: 'OOps',
                description: 'nodescriptopn',
                tags: []
            },
        
            comments: [],
            ...originalArgs
        }

        this.user = {
            name: args.user.name,
            family: args.user.family,
            image: args.user.image
        }

        this.content = {
            description: args.content.description,
            image: args.content.image,
            tags: args.content.tags.slice()
        }

        
    }

    render() {
        const element = super.render()
        element.append(this.commentsPlace.render())
        return element
    }

    getHtmlTemplate() {
        return htmlTemplate
            .replace(/{%user.name%}/g, this.user.name)
            .replace(/{%user.family%}/g, this.user.family)
            .replace(/{%user.image%}/g, this.user.image)
            .replace(/{%content.image%}/g, this.content.image)
    }

}