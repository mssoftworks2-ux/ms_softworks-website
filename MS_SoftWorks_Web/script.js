function toggleDetails() {
    const details = document.getElementById('moreDetails');
    const btn = document.querySelector('.more-btn');
    if(details.style.display === 'block') {
        details.style.display = 'none';
        btn.textContent = "More Details";
    } else {
        details.style.display = 'block';
        btn.textContent = "Less Details";
    }
}
