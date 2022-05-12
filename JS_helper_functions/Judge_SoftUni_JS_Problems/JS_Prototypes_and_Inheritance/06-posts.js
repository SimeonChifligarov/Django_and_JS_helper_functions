function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let toStringAsArray = [`Post: ${this.title}`, `Content: ${this.content}`];
            return toStringAsArray.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let baseToString = super.toString().split('\n');
            let ratings = `Rating: ${this.likes - this.dislikes}`;
            let commentsArray = ['Comments:'];
            for (const comm of this.comments) {
                commentsArray.push(` * ${comm}`);
            };

            baseToString.push(ratings);
            if (this.comments.length > 0) {
                for (const comm of commentsArray) {
                    baseToString.push(comm);  
                };
            }

            return baseToString.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let baseToString = super.toString().split('\n');
            baseToString.push(`Views: ${this.views}`);
            return baseToString.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();

// let blogpost = new classes.BlogPost("p1", "c1", 4);
// console.log(blogpost.toString());
// blogpost.view();
// blogpost.view();
// blogpost.view();
// blogpost.view();
// blogpost.view().view().view();
// console.log(blogpost.toString());



let post = new classes.Post("Post", "Content");

console.log(post.toString());

// // Post: Post
// // Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!
