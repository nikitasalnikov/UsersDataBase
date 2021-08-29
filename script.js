const users = {

}

for (let i = 1; i <= 10; i++) {
    users.id = i;
    users.name = prompt('Введите имя пользователя: ');
    users.age = prompt('Введите возраст: ');
    console.log('Пользователь - ' + i + '.\n' + 'Имя: ' + users.name + '.\n' + 'Возраст: ' + users.age + '.');
    console.log(users);
}