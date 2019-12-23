import Component from "../Component"
import htmlTemplate from './index.html'

export default class Comment extends Component{
    constructor (originalArgs = {}) {
        super('comment')


        const args = {
            user: {
                name: 'noname',
                family: 'nofamily',
                image: 'Oops'
            },
            content: 'some new new content',

            ...originalArgs
        }

        this.user = {
            name: args.user.name,
            family: args.user.family,
            image: args.user.image
        }

        this.content = args.content

    }


    getHtmlTemplate() {
        return htmlTemplate
            .replace(/{%comment.name%}/g, this.user.name)
            .replace(/{%comment.family%}/g, this.user.family)
            .replace(/{%comment.image%}/g, this.user.image)
            .replace(/{%comment.content%}/g, this.content)
    }
}