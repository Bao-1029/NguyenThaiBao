$(document).ready(function (){
    let addB = $('.add-button');
    let field = $('.add-field');
    let tasks=$('.tasks')

    addB.on('click', function(){
        let elem = `<li class="task">
                        <div class="task-checked col-1">
                            <input type="checkbox">
                        </div>
                        <div class="task-text col-2">${field.val()}</div>
                        <div class="task-remove col-3"></div>
                    </li>`;
        tasks.append(elem);
        field.val('');
    })

    tasks.on('click', '.task-remove', function(){
        $(this).parent().remove();
    })
     
    tasks.on('change', '.task-checked input', function(){
        $(this).parent().next().toggleClass('checked');
    })

    $('#tasks-list').sortable();
})