<script>
	function myFunction() {
		const navigationBar = document.getElementById("navigation-bar");
		if (navigationBar.className === "navigation-bar") {
			navigationBar.className += "responsive";
		} else {
			navigationBar.className = "navigation-bar";
		}
	}
</script>
