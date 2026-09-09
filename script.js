<script>
document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    await fetch("/login", {
        method: "POST",
        body: formData
    });
});
</script>
