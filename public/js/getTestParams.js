const testParams = document.querySelector("#test-params form");

testParams.addEventListener("submit", function () {
  var formData = new FormData(testParams);
  var data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  // Store the object in sessionStorage
  sessionStorage.setItem("testParams", JSON.stringify(data));

  // Redirect to the next page
  window.location.href = "/test-page.html";
});
