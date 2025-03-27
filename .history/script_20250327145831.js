function getDOB() {

  const dobInput = document.getElementById('inputDOB').value;
  const currentDateInput = document.getElementById('cdate').value;

    if(!dobInput || !currentDateInput) {
      alert('Please enter both Date of Birth and Current Date.');
    }
    const dob = new Date(currentDateInput);
    const currentDate = new
}