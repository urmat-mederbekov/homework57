'use strict';

let user = {
    name: "Rick",
    email: "rick@email.com",
    password: 1234,
    isAuthrorized: true
};
console.log(user);

let post = {
    id: "1",
    image: "",
    description: "Me and my girlfriend",
    likes: 10000000,
    dataTime: "2020.01.01",
    user
}

let post2 = {
    id: "2",
    image: "",
    description: "In my house",
    likes: 10000021,
    dataTime: "2020.02.01",
    user
}

let post3 = {
    id: "3",
    image: "",
    description: "In my jet",
    likes: 10000002140,
    dataTime: "2020.01.15",
    user
}
console.log(post);

let comment = {
    text: ":)",
    dataTime: "2020.03.25",
    post    
}

let posts = [
    post
]

console.log(posts)
function addPost(post){
    posts.push(post);
}
addPost(post2);
addPost(post3)
console.log(posts);

console.log(user.isAuthrorized);
function changeAuthorized(){
    return user.isAuthrorized = !user.isAuthrorized;
}
console.log(changeAuthorized());
console.log(changeAuthorized());

console.log(post3);
function addLike(byId){
    for(let i = 0; i <= posts.length; i++){
        if(posts[i].id.includes(byId)){
            posts[i].likes++;
            return post[i];
        }
    }
    return null;
}
addLike("3");
console.log(post3);
console.log(post);
function removeLike(byId){
    for(let i = 0; i <= posts.length; i++){
        if(posts[i].id.includes(byId)){
            posts[i].likes--;
            return post[i];
        }
    }
    return null;
}
removeLike("1")
console.log(post);