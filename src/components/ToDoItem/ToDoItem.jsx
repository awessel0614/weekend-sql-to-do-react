function ToDoItem(props) {

    console.log(props);

    return (
        <li>{props.item.task}</li>
    )

}

export default ToDoItem;