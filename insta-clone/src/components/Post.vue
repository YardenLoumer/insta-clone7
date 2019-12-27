<template>

    <div class="post"> {{ data }}

			<div class="post__header">

				<div class="post__user">
					<div class="user">
						<a href="#" class="user__avatar">
							<img :src="data.user.ava" alt="">
						</a>
						<a href="#" class="user__name">{{data.user.name}} {{data.user.surname}}</a>
					</div>

				</div>

				<div class="post__links">
					<a href="#" class="edit-link">
						<i class="far fa-trash-alt"></i>
						Delete
					</a>


					<a href="edit.html" class="edit-link">
						<i class="fas fa-pencil-alt"></i>
						Edit
					</a>

				</div>
			</div>

			<div class="post__img">
				<img :src="data.src" alt="Photo">
			</div>

			<!-- post__data  -->
			<div class="post__data">

				<div class="post__description">
					{{data.description}}
				</div>

				<div class="post__hashtags">

                    <template v-for="tag of data.tags">
                        <a href="#" v-bind:key="tag"> #{{ tag }} </a>

                    </template>
					<!-- <a 
                        href="#"
                        v-for="tag of data.tags"
                        v-bind:key="tag"
                    >{{ tag }} </a> -->
					
				</div>
			</div>
			<!-- // post__data -->

			<!-- post__comments -->
			<div class="post__comments">
                <Comment v-for="comment of data.comments" :data="comment" v-bind:key="comment.id"></Comment>
			</div>
			<!-- // post__comments -->

			<div class="post__comment-form">
				<div class="comment-form">
					<textarea class="comment-form__textarea" placeholder="Добавить комментарий"></textarea>
					<button disabled class="comment-form__button">Опубликовать</button>
				</div>
			</div>

		</div>
</template>

<script>
import Comment from '@/components/Comment'
export default {
    props: ['data'],
    components: {
        Comment
    }
} 
</script> 