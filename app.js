window.addEventListener('load', function() {


  const canvas_div = document.getElementById('canvas_div');

  const canvas = document.getElementById('canvas');
  //modified
  console.log(canvas_div.getBoundingClientRect().width);
  //end
  canvas.width = canvas_div.getBoundingClientRect().width;
  canvas.height = canvas_div.getBoundingClientRect().height;




  const context = canvas.getContext('2d');
  let canvas_bg = 'transparent'
  context.fillStyle = canvas_bg;
  context.fillRect(0, 0, canvas.width, canvas.height);

  let stroke_slider = document.getElementById('stroke_width');
  let stroke_color = document.getElementById('stroke_color');

  let is_drawing = false;




  function start(event) {

    is_drawing = true
    context.beginPath();
    context.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
    event.preventDefault();
  }

  function draw(event) {
    //modified
    console.log(event.touches[0].clientY);
    console.log(event.touches[0].clientX - canvas.offsetLeft);
    console.log(event.touches[0].clientY - canvas.offsetTop);
//end


    if (is_drawing) {

      context.lineTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
      context.strokeStyle = stroke_color.value;
      context.lineWidth = stroke_slider.value;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.stroke();
    }
    event.preventDefault();
//modified

     console.log(canvas.offsetLeft);
    //end
  }

  function stop(event) {

    if (is_drawing) {
      context.stroke();
      context.closePath();
      is_drawing = false
    }
    event.preventDefault();

  }

  function clear_canvas(arg) {
    context.fillStyle = canvas_bg;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

  }


  canvas.addEventListener('touchstart', start)
  canvas.addEventListener('touchmove', draw)
  canvas.addEventListener('touchend', stop)
  document.getElementById('clear').addEventListener('click', clear_canvas);



})