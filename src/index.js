import Application from './Application'
import Header from './components/Header'
import Container from './components/Container'
import Post from './components/Post'
import Comment from './components/Comment'
import store from './fakedata.json'

const app = new Application ({
    el: document.querySelector('#app')
})

const header = new Header
const container = new Container

for (const post of store.posts){
    container.add(new Post(post))
}


for(let i = 0;  i < store.posts.length; i++){
    for(const comment of store.posts[i].comments){
        container.components[i].commentsPlace.add(new Comment(comment))
    }
}

app.router.add('/', [header, container])

app.update()

console.log(app)