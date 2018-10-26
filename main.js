


var mainArray = [

    { ContactNumber: "0301422489", UserName: "Haider", Password: "12345", todo: [] }

];


class usersInfo {
    constructor(contactNo, uName, uPass) {
        this.ContactNumber = contactNo;
        this.UserName = uName;
        this.Password = uPass;
        // this.todo = todos;
        var a = { ContactNumber: contactNo, UserName: uName, Password: uPass, todo: [] };
        var matchFound = false;
        for (var i = 0; i <= mainArray.length; i++) {
            if (localStorage.key(i) === contactNo) {
                alert("Phone Number Already Exist !!");
                 
                matchFound = true;
            }
        }
        if (matchFound === false) {
            mainArray.push(a);
            var b = { UserName: uName, Password: uPass, todo: [] };
            localStorage.setItem(contactNo, JSON.stringify(b));
            console.log(mainArray);
            alert("Registered");
        }
    }
}

function signUp() {

    var z = document.getElementById("inputUserNumber").value;
    var a = document.getElementById("inputName").value;
    var b = document.getElementById("inputPassword").value;
    var c = document.getElementById("inputPassword2").value;

    if (b != c ) {
        return alert("Error in Confirm Password !!!");
    }
    // var c = document.getElementById("todo").value;
    var newUser = new usersInfo(z, a, b);

}

function ChkLogIn(d, e) {

    var matchFound = false;
    for (var i = 0; i <= localStorage.length; i++) {

        if (localStorage.key(i) === d) {

            var f = JSON.parse(localStorage.getItem(localStorage.key(i)));

            if (f.Password === e) {
                matchFound = true;
                location.href = "todo.html";
                // alert("Successfully LOGIN !!!");         

                return a = alert("Welcome : " + f.UserName);

            }
        }
    }

    if (matchFound === false) {
        alert("LogIn Error!!!");
    }

}


function dmyo() {

    var d = document.getElementById("inputLogInPhone").value;
    var e = document.getElementById("inputLogInPassword").value;
    var logInUser = new ChkLogIn(d, e);
    return console.log(d);

}


function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('add').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

function edit() {

    var id = this.getAttribute('id');
    var a = JSON.parse(localStorage.getItem('todo'));
    var editTd = prompt('Edit the todo' , a[id]);
    a[id] = editTd;
    console.log(a);
    localStorage.setItem('todo', JSON.stringify(a));
    var todos = get_todos;
    window.location.reload();

}


function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<p>' + todos[i] + ' <a class="remove" style="margin-left: 60px ;margin-bottom: 4px; color:red" id="' + i  + '"> x </a><button id= ' +  i  + ' class="Edit" >Edit</button></p>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    var btnEdit = document.getElementsByClassName('Edit');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

    for (var i =0 ; i < btnEdit.length ; i++ ) {
        btnEdit[i].addEventListener('click' , edit)
    };
}

function signInPage() {
    window.location.href = "signIn.html";
}

function clearTodo() {

    localStorage.removeItem("todo");
    window.location.reload();

}

 
document.getElementById('add').addEventListener('click', add);
show();

