const animation_elements = document.querySelectorAll('.overlay')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('overlay')
        }
        else{
            entry.target.classList.remove('overlay') 
        }
    })
}, {
   threshold:0.5  
});

for(let i= 0;i < animation_elements.length;i++){
    const el = animation_elements[i];

    observer.observe(el)
}