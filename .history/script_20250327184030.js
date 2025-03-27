function getDOB() {
  const dobInput = document.getElementById('inputDOB').value;
  const currentDateInput = document.getElementById('cdate').value;

  if (!dobInput || !currentDateInput) {
    alert('Please enter both Date of Birth and Current Date.');
    return;
  }

  const dob = new Date(dobInput);
  const currentDate = new Date(currentDateInput);

  // Ensure the date is correctly parsed
  if (dob.toString() === 'Invalid Date' || currentDate.toString() === 'Invalid Date') {
    alert('Please enter valid dates.');
    return;
  }

  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDifference = currentDate.getMonth() - dob.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}