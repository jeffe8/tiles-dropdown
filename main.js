document.addEventListener('DOMContentLoaded', function(){
    let data = [
        {
            title: "A project can take anywhere from 24-hours to several weeks.  ",
            description: "It all depends on the detail and design."
        },
        {
            title: "Typically, a custom book project starts at around $100 and works up from there.",
            description: "Designs are chosen for efficiency."
        },
        {
            title: "Tanned sheep skin leather.  This is the best I've seen simply for it's soft feel and ease of manipulation.",
            description: "Works well with corners."
        },
        {
            title: "Tolkien and Martin - along with some of the classics",
            description: "However, I do enjoy contemporary authors from time to time."
        }
    ]
    let FAQAnswers = document.querySelector('#FAQAnswers');
    
    for (let item of data) {
        let itemTemplate = `
            <a class="show-toggle">Answer</a>
            <div class="extra">
                <p>${item.title}</p>
                <p>${item.description}</p>
            </div>
        `;
        let newListItem = document.createElement('li');
        newListItem.innerHTML = itemTemplate;
        FAQAnswers.appendChild(newListItem);
    }

    
    let items = document.querySelectorAll('#FAQAnswers li a');
    for (let item of items) {
        item.addEventListener('click', function(event){
            event.currentTarget.parentElement.classList.toggle('open');
            if (event.currentTarget.innerHTML == 'Collapse') {
                event.currentTarget.innerHTML = "Answer";
            } else {
                event.currentTarget.innerHTML = "Collapse";
            }
            
        });
    }
});
