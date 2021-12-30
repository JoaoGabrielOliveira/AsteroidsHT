function main() {
  const canvas = document.querySelector("#glCanvas");
  // Inicializa o contexto GL
  const gl = canvas.getContext("webgl");

  // Só continua se o WebGL estiver disponível e funcionando
  if (!gl) {
    alert("Incapaz de inicializar o WebGL.Seu navegador ou sua máquina não suporta.");
    return;
  }

  // Define a cor para preto totalmente opaca (sem transparência)
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Limpa o buffer de cores com uma cor específica
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function initShaders() {
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");
  
    // Cria o progrma shader
  
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
  
    // Se falhar ao criar o progrma shader, alerta
  
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Não foi possível inicializar o programa shader.");
    }
  
    gl.useProgram(shaderProgram);
  
    vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
  }

  function getShader(gl, id) {
    var shaderScript, theSource, currentChild, shader;
  
    shaderScript = document.getElementById(id);
  
    if (!shaderScript) {
      return null;
    }
  
    theSource = "";
    currentChild = shaderScript.firstChild;
  
    while(currentChild) {
      if (currentChild.nodeType == currentChild.TEXT_NODE) {
        theSource += currentChild.textContent;
      }
  
      currentChild = currentChild.nextSibling;
    }

    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
      } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
      } else {
         // Tipo de shader desconhecido
         return null;
      }

      gl.shaderSource(shader, theSource);

      // Compile o programa shader
      gl.compileShader(shader);
    
      // Veja se ele compila com sucesso
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert("Um erro ocorreu ao compilar os shaders: " + gl.getShaderInfoLog(shader));
          return null;
      }
    
      return shader;
    }

    var horizAspect = 480.0/640.0;

function initBuffers() {
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  var vertices = [
    1.0,  1.0,  0.0,
    -1.0, 1.0,  0.0,
    1.0,  -1.0, 0.0,
    -1.0, -1.0, 0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}

function drawScene() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
    perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0);
  
    loadIdentity();
    mvTranslate([-0.0, 0.0, -6.0]);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  