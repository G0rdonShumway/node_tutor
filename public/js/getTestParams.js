function getTestParams() {
  var form = document.querySelector('#test-setup-form')
  var formData = new FormData(form);
  var data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  // Store the object in sessionStorage
  sessionStorage.setItem("testParams", JSON.stringify(data));

  // Redirect to the next page
  window.location.href = "/test-page.html";
}