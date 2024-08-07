window.onload = function(){
      
      //pegar o elemento canvas pelo ID  
			let area = document.getElementById('area')
      
      //capturar o quadro de pontuação
      let pontos = document.getElementById('pontos')
      let pontoi = 0
      // define o contexto do elemento area para 2d
			let ctx = area.getContext("2d")
  
			document.addEventListener("keydown", keyPush)
      
      const easy = document.getElementById('js-easy')
      const middle = document.getElementById('js-middle')
      const hard = document.getElementById('js-hard')

			setInterval(game, 70)
  document.getElementById('btn-w').addEventListener('click', function() {
    console.log('w');
    // Adicione sua função H aqui
});

document.getElementById('btn-a').addEventListener('click', function() {
    console.log('A');
    // Adicione sua função A aqui
});

document.getElementById('btn-s').addEventListener('click', function() {
    console.log('S');
    // Adicione sua função S aqui
});

document.getElementById('btn-d').addEventListener('click', function() {
    console.log('D');
    // Adicione sua função D aqui
});
 
      //Quantidade de casas que a cobra irá andar em cada atualização de quadro
			const vel = 1

      //Velocidade inicial
			let vx = 0
      let vy = 0 
      
      //ponto inicial
			let px = 10
			let py = 15
      
      // Tamanho do ponto
			const tp = 20
      
      // quantidade de pontos
			const qp = 20
      
      // Eixo inicial da Maçã
			let applex = 15
      let appley = 15

      // Array para o rastro da cobra
			let trail = []
      
			function game(){
        
				px += vx
				py += vy
        
        //controle da cobra dentro do quadro para repetição nas bordas
				if (px < 0) {
					px = qp-1
				}
				if (px > qp-1) {
					px = 0
				}
				if (py < 0) {
					py = qp-1
				}
				if (py > qp-1) {
					py = 0
				}

				ctx.fillStyle = "#111D4A"
        //sintaxe JavaScript:	contexto.fillRect ( x, y, largura, altura );
				ctx.fillRect(0,0, area.width, area.height)

				ctx.fillStyle = "#EA2B1F"
				ctx.fillRect(applex*tp, appley*tp, tp,tp,2,2)

        //for ([expressaoInicial]; [condicao]; [incremento]) declaracao
				for (let i = 0; i < trail.length; i++) {
				  ctx.fillStyle = "#09BC8A"
          ctx.strokeStyle = "#004346"
					ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp,tp)
          ctx.strokeRect(trail[i].x*tp, trail[i].y*tp, tp,tp)
					 if (trail[i].x == px && trail[i].y == py)
					{
						vx = vy = 0
						tail = 2
            pontoi = 0
					}
				}

				trail.push({x:px,y:py})
        
				while (trail.length > tail) {
					trail.shift()
				}
        
        
				if (applex==px && appley==py){
					tail++
					applex = Math.floor(Math.random()*qp)
					appley = Math.floor(Math.random()*qp)
          
          pontos.innerHTML = ++pontoi
				}
        
      
			}

      window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
  
      let lastKeyPressed = ""
  
			function keyPush(e){
				switch (e.keyCode) {
					case 37: // Left
            if(lastKeyPressed != "right"){
						vx = -vel
						vy = 0
            lastKeyPressed = "left"
              }
						break
					case 38: // up
            if(lastKeyPressed != "down"){
						vx = 0
						vy = -vel
            lastKeyPressed = "up"
            }
						break
					case 39: // right
            if(lastKeyPressed != "left"){
						vx = vel
						vy = 0
            lastKeyPressed = "right"
            }
						break
					case 40: // down
            if(lastKeyPressed != "up"){
						vx = 0
						vy = vel
            lastKeyPressed = "down"
            }
						break
				}
			}

		}
