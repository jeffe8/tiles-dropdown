// Demo show/hide feature
document.addEventListener('DOMContentLoaded', function(){
    let data = [
        {
            title: "TEST",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            title: "TEST",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            title: "TEST",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            title: "TEST",
            description: "Lorem ipsum dolor sit amet."
        }
    ]
    let demolist = document.querySelector('#demolist');
    
    for (let item of data) {
        let itemTemplate = `
            <a class="show-toggle">show me</a>
            <div class="extra">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            </div>
        `;
        let newListItem = document.createElement('li');
        newListItem.innerHTML = itemTemplate;
        demolist.appendChild(newListItem);
    }

    
    let items = document.querySelectorAll('#demolist li a');
    for (let item of items) {
        item.addEventListener('click', function(event){
            event.currentTarget.parentElement.classList.toggle('open');
            if (event.currentTarget.innerHTML == 'show me') {
                event.currentTarget.innerHTML = "hide me";
            } else {
                event.currentTarget.innerHTML = "show me";
            }
            
        });
    }
});
