import Post from "../Post"
import Component from "../Component"
import htmlTemplate from './index.html'
import CommentsPlace from "../CommentsPlace"

export default class PostCarousel extends Post{
    constructor (originalArgs = {}) {
        super(originalArgs)
    }

    getHtmlTemplate() {
        return htmlTemplate
            .replace(/{%user.name%}/g, this.user.name)
            .replace(/{%user.family%}/g, this.user.family)
            .replace(/{%user.image%}/g, this.user.image)
            .replace(/{%content.image%}/g, this.content.image)
    }
}