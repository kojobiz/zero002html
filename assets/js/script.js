// sp-open
document.getElementById('spnav-open').addEventListener('click', function() {
    document.querySelector('.l-spnav').style.display = 'block';
});

// sp-close
document.getElementById('spnav-close').addEventListener('click', function() {
    document.querySelector('.l-spnav').style.display = 'none';
});
document.querySelectorAll('.p-spnav-listbox__title').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.l-spnav').style.display = 'none';
    });
});
