myCanvas.onmousemove = function(event) { var eve = window.event || event; mx = eve.clientX; my = eve.clientY; txt.lineTo(mx, my); txt.strokeStyle = $(col).val(); txt.stroke(); } } myCanvas.onmouseup = function(event) { var eve = window.event || event; myCanvas.onmousemove = null; } btn.onclick = function() { txt.clearRect(0, 0, 400, 600); }