document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Check if checkout date is after checkin date
  let checkin = new Date(document.querySelector("input[name='checkin']").value);
  let checkout = new Date(document.querySelector("input[name='checkout']").value);
  if (checkout <= checkin) {
    alert("Check-out date must be after Check-in date.");
    return;
  }

  alert("🎉 Your Hotel Room Booking has been submitted successfully!");
  this.reset();
});
