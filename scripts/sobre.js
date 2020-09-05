 //Package
 var packagenome = "Hubin Net";
 var creatorPackage = "Jefferson Silva";
 function suporte(){
     document.getElementById("suporte").innerHTML='<a target="_blank" class="suporte" href="https://api.whatsapp.com/send?phone=5574999227670"><img class="iconsup" src="res/whatsappicon.png"/> +55 (074) 9922-7670</a> <a target="_blank" class="suporte" href="https://www.instagram.com/jdstudios197/"><img class="iconsup" src="res/instaicon.png"/>@jdstudios197</a><br><br><img class="iconsup" class="email" src="res/emailicon.png"/ nome="email"><p class="email" class="suporte"> jdstudiosuporte@gmail.com</p>';
     document.getElementById("botão").innerHTML ='<button class="suportbuton" onclick="ocultar()">Ocultar</button>';
 }
 function ocultar(){
     document.getElementById("suporte").innerHTML='';
     document.getElementById("botão").innerHTML='<button onclick="suporte()" class="suportbuton">Mostrar suporte</button>'

 }
 document.getElementById("sobre").innerHTML='<b style="padding-left: 20px"></b> A página ' + packagenome + " foi criada por um garoto chamado " + creatorPackage + ', ele tem apenas 15 anos. Com o proposito de auxiliar você usuário navegar rápido entre os seus sites favoritos, e os sites mais usados, a página é uma "<b>HOME</b>" do seu browser/navegador, para configurar isso, basta arrastar a URL da página, até a casinha do lado esquerdo do seu navegador, caso ela esteja desabilitada, basta ir nas configurações do seu navegador e procurar por "Página Ínicial" e ativar.<br> <h2>O que é OALA?</h2><br><b style="padding-left: 20px"></b> OALA é como nomeei a CPU dentro do jogo da velha, ou outros jogos interativos dentro desta página. Ela contém alguns bugs.<br> Você pode entrar em contato através do botão abaixo, e pedir a adição de um novo site, e/ou função, como também poderá relatar erros, e sugerir futuros layouts. <br> <b style="padding-left: 10px"></b> <u> A página não tem <b>BANCO DE DADOS</b>, sendo assim não se preocupe com os prompts do <b>JavaScrip</b>(linguagem de programação), que são aquelas <b>caixa de pergunta</b>, elas foram colocadas apenas por interação entre o usuário e a página, para não ficar algo <b>chato.</b></u>';
 document.getElementById("botão").innerHTML='<button onclick="suporte()" class="suportbuton">Mostrar suporte</button>';