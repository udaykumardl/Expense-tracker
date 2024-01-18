document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code will go here
});
document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    expenseForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = document.getElementById('expenseAmount').value;

        if (expenseName && expenseAmount) {
            const expenseItem = document.createElement('li');
            expenseItem.className = 'list-group-item';
            expenseItem.textContent = `${expenseName}: $${expenseAmount}`;

            expenseList.appendChild(expenseItem);

            // Save to local storage
            saveToLocalStorage(expenseName, expenseAmount);

            // Clear form fields
            expenseForm.reset();
        }
    });

    // Function to save data to local storage
    function saveToLocalStorage(name, amount) {
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

        expenses.push({ name, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
});
