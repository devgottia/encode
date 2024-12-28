document.getElementById("input").addEventListener("change", function (e) {
  const value = e.target.value; // Get the input value

  // Encode the input value to Base64
  const encode = window.btoa(value);

  // Create the script tag with Base64 encoding inserted as plain text
  const scriptTag = `<script>
document.write(atob("${encode}"))
</script>`;

  // Set the textarea value with the script tag as plain text
  e.target.value = scriptTag; // Display the script tag with the Base64 encoded content
});
