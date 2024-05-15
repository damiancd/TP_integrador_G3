function changeMap(src) {
    document.getElementById('map').innerHTML = '<iframe src="' + src + '" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  }