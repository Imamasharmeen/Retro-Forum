const loadAllPosts = async(category) => {
   // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category = ${category}` : ''}`)

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
    const data = await response.json();
    displayAllPost(data.posts)
}
loadAllPosts()

const handleSearchByCategory = () =>{
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText)
}


const displayAllPost = (displayData) => {
    //console.log(displayData)
    const displayContainer = document.getElementById('displaySection')
    displayData.forEach(displaySingleData => {
        const dynamicDiv = document.createElement('div')
        console.log(dynamicDiv)
        dynamicDiv.innerHTML =`
            <div class="w-11/12 mx-auto rounded-2xl bg-gray-100 py-4 my-5 md:flex md:flex-col ">
      <div class="flex gap-5">
        <div class="w-4/12">
          <img class="w-full rounded-xl" src="${displaySingleData.image}">
        </div>
        <div class="w-8/12">
          <div class="flex gap-5">
            <div>#${displaySingleData.category}</div>
            <div>${displaySingleData.author.name}</div>
          </div>
          <h2 class="font-bold test-xs md:text-base lg:text-xl my-3">${displaySingleData.title}</h2>
          <h4 class="font-bold test-xs md:text-sm lg:text-base opacity-30">${displaySingleData.description}description</h4>
          <hr class= "border-dashed my-3">
          <div class="flex gap-3">
            <div>${displaySingleData.comment_count}</div>
            <div>${displaySingleData.view_count}</div>
            <div>${displaySingleData.posted_time}</div>
          </div>
        </div>
      </div>
    </div>
        
        `

    displaySection.appendChild(dynamicDiv)  
    });

}
