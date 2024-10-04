const loadAllPosts = async(category) => {
   // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category = ${category}` : ''}`)

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
    const data = await response.json();
    console.log(data.posts)
}
loadAllPosts()

const handleSearchByCategory = () =>{
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText)
}
