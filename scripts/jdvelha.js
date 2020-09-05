
            var jogo = [];
            var tabuleiro = [];
            var quemjoga = 0; //0= Player 1=CPU
            var verificar;
            var jogando = true;
            var nivel = 1;
            var jogadaCPU = 1;
            var quemcomeca = 0;

            function OALAgame(){
                if(jogando){
                    var l,c;
                    if(nivel==1){
                        do{
                            l=Math.round(Math.random()*2);
                            c=Math.round(Math.random()*2);
                        }
                        while(jogo[l][c]!="");
                        jogo[l][c]="O";
                        
                    }
                    else if(nivel==2){
                        //Nivel 2
                        
                    }
                    attab();

                    verificar = verywiner();
                    if(verificar!=""){
                        alert(verificar + " venceu.");
                        jogando = false;
                    }
                    
                    quemjoga = 0;


                }
            }

            function verywiner(){
                var l;
                var c;
                
                //Linhas
                for(l=0;l<3;l++){
                    if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){
                        return jogo[l][0];
                    };
                };
                //Colunas
                for(c=0;c<3;c++){
                    if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
                        return jogo[0][c];
                    };
                };
                //Diagonais
                if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
                        return jogo[0][0];
                };
                if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){
                        return jogo[0][2];
                };
                return "";
            };

            function jogar(p){
                if((jogando)&&(quemjoga==0)){
                    switch(p){
                        case 1:
                            if(jogo[0][0]==""){
                                jogo[0][0] = "X";
                                quemjoga = 1;
                             }
                            break;
                        case 2:
                            if(jogo[0][1]==""){
                                jogo[0][1] = "X";
                                quemjoga = 1;
                           }
                          break;
                       
                        case 3:
                            if(jogo[0][2]==""){
                                jogo[0][2] = "X";
                                quemjoga = 1;
                            }
                            break;
                        case 4:
                            if(jogo[1][0]==""){
                                jogo[1][0] = "X";
                                quemjoga = 1;
                             }
                            break;
                        case 5:
                            if(jogo[1][1]==""){
                                jogo[1][1] = "X";
                                quemjoga = 1;
                             }
                            break;
                        case 6:
                            if(jogo[1][2]==""){
                                jogo[1][2] = "X";
                                quemjoga = 1;
                             }
                            break;
                        case 7:
                            if(jogo[2][0]==""){
                                jogo[2][0] = "X";
                                quemjoga = 1;
                             }
                            break;
                        case 8:
                            if(jogo[2][1]==""){
                                jogo[2][1] = "X";
                                quemjoga = 1;
                             }
                            break;
                        default://Caso nove
                            if(jogo[2][2]==""){
                                jogo[2][2] = "X";
                                quemjoga = 1;
                             }
                            break;
                    };
                    attab();


                    if(quemjoga==1){
                        verificar = verywiner();
                        if(verificar!=""){
                            alert(verificar + " venceu.");
                            jogando = false;
                        };
                        
                        OALAgame();

                    };
                };
            };

            function attab(){
                for(var l=0; l<3; l++){
                    for(var c=0; c<3; c++) {
                        if(jogo[l][c]=="X"){
                            tabuleiro[l][c].innerHTML="X";
                            tabuleiro[l][c].style.cursor="default";
                        }
                        else if(jogo[l][c]=="O"){
                            tabuleiro[l][c].innerHTML="O";
                            tabuleiro[l][c].style.cursor="not-allowed";
                        }
                        else {
                            tabuleiro[l][c].innerHTML="";
                            tabuleiro[l][c].style.cursor="pointer";
                        };
                    };
                };
            };

            function inicia(){
                jogando = true;
                jogadaCPU = 1;
                jogo = [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""]
                ];
                tabuleiro = [
                    [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
                    [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
                    [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
                ];
                attab();
                if(quemcomeca ==1){
                    quemcomeca = 0;
                    quemjoga = quemcomeca;
                    document.getElementById("playeri").innerHTML="Quem começa é o Jogador."
                }
                else{
                    quemcomeca = 1;
                    quemjoga = quemcomeca;
                    document.getElementById("playeri").innerHTML="Quem começa é a Oala."
                    OALAgame();
                };
            };
         