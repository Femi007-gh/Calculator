function getDOB() {

  const dobInput = document.getElementById('inputDOB').value;
  const currentDateInput = document.getElementById('cdate').value;

    if(!dobInput || !currentDateInput) {
      alert('Please enter both Date of Birth and Current Date.');
      return;
    }
    const dob = new Date(currentDateInput);
    const currentDate = new Date(currentDateInput);
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference ===))
}