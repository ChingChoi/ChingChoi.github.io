<html>
 <head>
  <title>PHP Test</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/grid.css">
  <link rel="stylesheet" type="text/css" href="css/body.css">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type='text/javascript' src='js/bootstrap.min.js'></script>
  <script type='text/javascript' src='js/masonry.pkgd.min.js'></script>
  <script type='text/javascript' src='js/masonryImage.js'></script>
  <script type='text/javascript' src='js/functions.js'></script>
 </head>
 <body>
  <div id="header">
    <section id="header-section">
        <div class="container text-white">
        <div class="row mh1">
          <div class="col-sm-3 nav-item"></div>
          <div class="col-sm-1 nav-item">
            <a href="./pawesome.php#main" id="fav-icon"></a>
          </div>
          <div class="col-sm-1 nav-item">
            <a href="#mission-container">Mission</a>
          </div>
          <div class="col-sm-1 nav-item">
            <a href="#project-container">Projects</a>
          </div>
          <div class="col-sm-1 nav-item">
            <a href="#skill-container">Skills</a>
          </div>
          <div class="col-sm-1 nav-item">
            <a href="./pawesome.php#FAQ">Interests</a>
          </div>
          <div class="col-sm-1 nav-item">
            <a href="./contact.php">Contact</a>
          </div>
          <div class="col-sm-2 nav-item"></div>
        </div>
      </div>
    </section>
  </div>
  <div id="mission-container">
    <img id="mission-background-image" src="./img/hand-to-hand.jpg"/>
    <div id="mission-statement">
      <h3 class="theme-font">Mission</h3>
      <p class="theme-font">Give you a hand :)</p>
      <p class="theme-font">Much like giving you an awesome paw! Xd</p>
    </div>
  </div>

  <div class="grid" id="project-container">
    <div class="grid-sizer"></div>
    <div class="grid-item">
      <div class="grid-item-text theme-font">
        </br></br>
        <h1>AI - Neural Networks</h1>
        <p class="theme-font">Trained using 60,000 hand-written digits from MNIST dataset</p>
        <p class="theme-font">Recognize user hand-written digit at 96.85% accuracy</p>
        <p class="theme-font"></br></br>Group of 2</br>1 week</p>
        <a class="theme-font project-link" href="https://github.com/ChingChoi/NeuralNetworks">https://github.com/ChingChoi/NeuralNetworks</a>
      </div>
      <img class="dummy-img" src="./img/dummy.jpeg"/>
    </div>
    <div class="grid-item">
      <video class="video">
        <source type="video/mp4" src="./video/demo-nn.mp4">
      </video>
      <img class="dummy-img" src="./img/dummy.jpeg"/>
    </div>
    <div class="grid-item">
      <video class="video">
        <source type="video/mp4" src="./video/demo-jmpeg.mp4">
      </video>
      <img class="dummy-img" src="./img/dummy.jpeg"/>
    </div>
    <div class="grid-item">
      <div class="grid-item-text theme-font">
        </br>
        <h1>JPEG & MPEG</h1>
        <p class="theme-font">Compression of images and video using jpeg and mpeg</p>
        <p class="theme-font"></br>Compress image up to 33 times smaller</br> video 26 times smaller for 360 frames</p>
        <p class="theme-font"></br>Individual project</br>1 month</p>
        <a class="theme-font project-link" href="https://github.com/ChingChoi/MPEGCompression">https://github.com/ChingChoi/MPEGCompression</a>
      </div>
      <img class="dummy-img" src="./img/dummy2.jpg"/>
    </div>
    <div class="grid-item">
      <div class="grid-item-text theme-font">
        </br></br>
        <h1>Particle Collision</h1>
        <p class="theme-font">Simulate phycis of particle collision</p>
        <p class="theme-font"></br>Complete elastic </br>drag force of air / deep water</p>
        <p class="theme-font"></br>Group of 2</br>1 day</p>
        <a class="theme-font project-link" href="https://github.com/ChingChoi/ParticleCollision">https://github.com/ChingChoi/ParticleCollision</a>
      </div>
      <img class="dummy-img" src="./img/dummy3.jpg"/>
    </div>
    <div class="grid-item">
      <video class="video">
        <source type="video/mp4" src="./video/demo-particle.mp4">
      </video>
      <img class="dummy-img" src="./img/dummy3.jpg"/>
    </div>
    <div class="grid-item">
      <video class="video">
        <source type="video/mp4" src="./video/demo-sound-editor.mp4">
      </video>
      <img class="dummy-img" src="./img/dummy4.jpg"/>
    </div>
    <div class="grid-item">
      <div class="grid-item-text theme-font">
        </br>
        <h1>Sound Editor</h1>
        <p class="theme-font">Analyze & process sound frequencies</p>
        <p class="theme-font"></br>Capable of filtering unwanted frequencies of sound file</br>Can record from microphone and playback</p>
        <p class="theme-font"></br>Individual project</br>4 months</p>
        <a class="theme-font project-link" href="https://github.com/ChingChoi/SoundEditor">https://github.com/ChingChoi/SoundEditor</a>
      </div>
      <img class="dummy-img" src="./img/dummy4.jpg"/>
    </div>
  </div>
  <div id="show-more-less-container">
    <div id="show-more">
      <h3 class="theme-font">+</h3>
    </div>
    <div id="show-less">
      <h3 class="theme-font">-</h3>
    </div>  
  </div>

  <div id="skill-container">
    <h1 class="theme-font">Programming Languages</h1>
  </div>
  <div class="grid" id="skill-container-grid">
    <div class="grid-sizer"></div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">{</span> C#</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">:</span> C++</h3>
    </div>    
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">-></span> C</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">.</span> Java</h3>
    </div>    
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">!</span> Win32</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">&</span> DirectX</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">"</span> OpenCL</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">=</span> Python</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font"><</span> HTML5</h3>
    </div>    
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">()</span> JavaScript</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">?</span> JQuery</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">#</span> CSS</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font"><\?</span> PHP</h3>
    </div>
    <div class="grid-item">
      <h3 class="theme-font"><span style="color:#AAA" class="theme-font">*</span> SQL</h3>
    </div>
  </div>

  <div id="interest-container">
    <h1 class="theme-font">Loves</h1>
  </div>
  <div class="grid" id="interest-container-grid">
  <div class="grid-sizer"></div>
  <div class="grid-item">
      <img src="./img/cat-programming.gif"/>
    </div>
    <!-- <div class="grid-item">
      <img src="./img/cat-training.gif"/>
    </div> -->
    <div class="grid-item">
      <img src="./img/cat-movie.gif"/>
    </div>
  </div>
  
 </body>
</html>