/* =====================================================================
   ESTILINGUE DO SABER - Banco de perguntas
   Projeto Sesc Ler Bodocó - Professor Márcio Brito
   ---------------------------------------------------------------------
   COMO EDITAR (jeito mais fácil): abra o arquivo editor.html no
   navegador, faça as mudanças e clique em "Baixar perguntas.js".
   Depois troque este arquivo pelo novo.

   COMO EDITAR À MÃO (neste arquivo):
   - Cada MATÉRIA tem um nome e seus grupos (anos).
   - Cada PERGUNTA tem:
       "pergunta": o texto que aparece no quadro
       "certa":    a resposta certa
       "erradas":  de 1 a 3 respostas erradas
   - Respostas curtas (até uns 20 letras) ficam melhores nas placas.
   - Cuidado com as vírgulas e aspas: copie um bloco existente e
     troque só os textos.
   - Para criar uma matéria nova (ex.: Ciências), copie um bloco de
     matéria inteiro, troque o nome e as perguntas.
   - Os nomes dos grupos são livres: "1º ano", "EJA - Módulo 1" etc.
   ===================================================================== */

window.BANCO_DE_PERGUNTAS = [
  {
    "materia": "Matemática",
    "perguntas": {
      "1º ano": [
        { "pergunta": "Quanto é 2 + 3?", "certa": "5", "erradas": ["4", "6"] },
        { "pergunta": "Quanto é 4 + 4?", "certa": "8", "erradas": ["7", "9"] },
        { "pergunta": "Quanto é 7 - 2?", "certa": "5", "erradas": ["4", "6"] },
        { "pergunta": "Qual número vem depois do 9?", "certa": "10", "erradas": ["8", "11"] },
        { "pergunta": "Qual número vem antes do 6?", "certa": "5", "erradas": ["7", "4"] },
        { "pergunta": "Quantos dedos temos em uma mão?", "certa": "5", "erradas": ["4", "10"] },
        { "pergunta": "Qual é o maior número?", "certa": "8", "erradas": ["3", "5"] },
        { "pergunta": "Quanto é 10 - 1?", "certa": "9", "erradas": ["8", "11"] },
        { "pergunta": "Maria tem 3 bolas e ganhou mais 2. Quantas bolas ela tem agora?", "certa": "5", "erradas": ["4", "6"] },
        { "pergunta": "Quanto é 6 + 0?", "certa": "6", "erradas": ["0", "7"] }
      ],
      "2º ano": [
        { "pergunta": "Quanto é 12 + 5?", "certa": "17", "erradas": ["16", "18"] },
        { "pergunta": "Quanto é 20 - 8?", "certa": "12", "erradas": ["13", "11"] },
        { "pergunta": "Quanto é o dobro de 4?", "certa": "8", "erradas": ["6", "16"] },
        { "pergunta": "Quanto é a metade de 10?", "certa": "5", "erradas": ["2", "20"] },
        { "pergunta": "Quantos dias tem uma semana?", "certa": "7", "erradas": ["5", "10"] },
        { "pergunta": "Quanto é 3 + 3 + 3?", "certa": "9", "erradas": ["6", "12"] },
        { "pergunta": "Qual destes números é par?", "certa": "14", "erradas": ["13", "15"] },
        { "pergunta": "Uma dezena tem quantas unidades?", "certa": "10", "erradas": ["100", "12"] },
        { "pergunta": "Quanto é 25 + 10?", "certa": "35", "erradas": ["30", "45"] },
        { "pergunta": "Qual forma tem 3 lados?", "certa": "Triângulo", "erradas": ["Quadrado", "Círculo"] }
      ],
      "3º ano": [
        { "pergunta": "Quanto é 3 x 4?", "certa": "12", "erradas": ["7", "10", "14"] },
        { "pergunta": "Quanto é 5 x 6?", "certa": "30", "erradas": ["25", "35", "11"] },
        { "pergunta": "Quanto é 18 ÷ 2?", "certa": "9", "erradas": ["8", "16", "6"] },
        { "pergunta": "Quanto é 125 + 34?", "certa": "159", "erradas": ["149", "169", "158"] },
        { "pergunta": "Quanto é 100 - 45?", "certa": "55", "erradas": ["65", "45", "50"] },
        { "pergunta": "Quantos minutos tem 1 hora?", "certa": "60", "erradas": ["30", "100", "24"] },
        { "pergunta": "Qual número tem 3 centenas, 2 dezenas e 5 unidades?", "certa": "325", "erradas": ["235", "352", "532"] },
        { "pergunta": "Um quadrado tem quantos lados?", "certa": "4", "erradas": ["3", "5", "6"] },
        { "pergunta": "Quanto é 7 x 2?", "certa": "14", "erradas": ["9", "12", "16"] },
        { "pergunta": "Quantos centavos tem 1 real?", "certa": "100", "erradas": ["10", "50", "1000"] }
      ],
      "4º ano": [
        { "pergunta": "Quanto é 8 x 7?", "certa": "56", "erradas": ["54", "48", "63"] },
        { "pergunta": "Quanto é 72 ÷ 8?", "certa": "9", "erradas": ["8", "7", "6"] },
        { "pergunta": "Quanto é 1.250 + 750?", "certa": "2.000", "erradas": ["1.900", "2.100", "1.000"] },
        { "pergunta": "Quanto é a metade de 30?", "certa": "15", "erradas": ["10", "20", "60"] },
        { "pergunta": "Quanto é 9 x 6?", "certa": "54", "erradas": ["56", "45", "63"] },
        { "pergunta": "Quantos metros tem 1 quilômetro?", "certa": "1.000", "erradas": ["100", "10", "10.000"] },
        { "pergunta": "Qual é o perímetro de um quadrado com lado de 5 cm?", "certa": "20 cm", "erradas": ["25 cm", "10 cm", "15 cm"] },
        { "pergunta": "Qual fração representa a metade?", "certa": "1/2", "erradas": ["1/3", "1/4", "2/3"] },
        { "pergunta": "Quanto é 300 x 3?", "certa": "900", "erradas": ["600", "330", "9.000"] },
        { "pergunta": "Quanto é 48 ÷ 6?", "certa": "8", "erradas": ["6", "7", "9"] }
      ],
      "5º ano": [
        { "pergunta": "Quanto é 0,5 + 0,5?", "certa": "1", "erradas": ["0,10", "1,5", "0,55"] },
        { "pergunta": "Quanto é 25% de 100?", "certa": "25", "erradas": ["50", "75", "20"] },
        { "pergunta": "Quanto é 12 x 12?", "certa": "144", "erradas": ["124", "122", "132"] },
        { "pergunta": "Quanto é 1/4 de 20?", "certa": "5", "erradas": ["4", "10", "80"] },
        { "pergunta": "Qual é a área de um retângulo de 4 m por 3 m?", "certa": "12 m²", "erradas": ["7 m²", "14 m²", "24 m²"] },
        { "pergunta": "Quanto é 2,5 x 2?", "certa": "5", "erradas": ["4,5", "2,10", "5,5"] },
        { "pergunta": "Qual destes números é primo?", "certa": "7", "erradas": ["9", "15", "21"] },
        { "pergunta": "Quantos graus tem um ângulo reto?", "certa": "90°", "erradas": ["180°", "45°", "360°"] },
        { "pergunta": "Quanto é 1.000 ÷ 10?", "certa": "100", "erradas": ["10", "1.000", "110"] },
        { "pergunta": "Qual destas frações é a maior?", "certa": "3/4", "erradas": ["1/4", "2/4", "1/8"] }
      ]
    }
  },
  {
    "materia": "Português",
    "perguntas": {
      "1º ano": [
        { "pergunta": "Qual é a primeira letra de BOLA?", "certa": "B", "erradas": ["D", "P"] },
        { "pergunta": "Qual destas letras é uma vogal?", "certa": "A", "erradas": ["B", "M"] },
        { "pergunta": "Complete: GA_O (o animal que mia)", "certa": "T", "erradas": ["L", "D"] },
        { "pergunta": "Quantas letras tem a palavra SOL?", "certa": "3", "erradas": ["2", "4"] },
        { "pergunta": "Qual palavra começa com M?", "certa": "MACACO", "erradas": ["PATO", "VACA"] },
        { "pergunta": "Qual palavra rima com PÃO?", "certa": "MÃO", "erradas": ["PÉ", "BOLA"] },
        { "pergunta": "Qual é a última letra de CASA?", "certa": "A", "erradas": ["S", "C"] },
        { "pergunta": "Qual letra vem depois do A?", "certa": "B", "erradas": ["C", "E"] },
        { "pergunta": "Quantas sílabas tem BO-NE-CA?", "certa": "3", "erradas": ["2", "4"] },
        { "pergunta": "Qual destas palavras é o nome de uma fruta?", "certa": "CAJU", "erradas": ["MESA", "SAPO"] }
      ],
      "2º ano": [
        { "pergunta": "Qual palavra está escrita certo?", "certa": "CASA", "erradas": ["KAZA", "CAZA"] },
        { "pergunta": "Qual é o plural de FLOR?", "certa": "FLORES", "erradas": ["FLORS", "FLORIS"] },
        { "pergunta": "Qual palavra começa com a sílaba BO?", "certa": "BONECA", "erradas": ["CABELO", "LOBO"] },
        { "pergunta": "Qual palavra tem 2 sílabas?", "certa": "GATO", "erradas": ["BORBOLETA", "SAPATO"] },
        { "pergunta": "Qual é o feminino de MENINO?", "certa": "MENINA", "erradas": ["MENINOS", "MENINÃO"] },
        { "pergunta": "Qual destas palavras é o nome de um animal?", "certa": "JUMENTO", "erradas": ["CADEIRA", "PANELA"] },
        { "pergunta": "Qual palavra rima com JANELA?", "certa": "PANELA", "erradas": ["JARRO", "PORTA"] },
        { "pergunta": "Qual palavra está escrita certo?", "certa": "FOLHA", "erradas": ["FOIA", "FOLA"] },
        { "pergunta": "O contrário de GRANDE é:", "certa": "PEQUENO", "erradas": ["ALTO", "GORDO"] },
        { "pergunta": "Que sinal usamos no fim de uma pergunta?", "certa": "?", "erradas": ["!", "."] }
      ],
      "3º ano": [
        { "pergunta": "Qual destas palavras é um nome próprio?", "certa": "Bodocó", "erradas": ["cidade", "rua", "casa"] },
        { "pergunta": "Qual é o aumentativo de CASA?", "certa": "CASARÃO", "erradas": ["CASINHA", "CASAS", "CASEIRO"] },
        { "pergunta": "Qual é o diminutivo de PÉ?", "certa": "PEZINHO", "erradas": ["PEZÃO", "PÉS", "PEZADO"] },
        { "pergunta": "Qual palavra está escrita certo?", "certa": "CACHORRO", "erradas": ["CAXORRO", "CACHORO", "CAXORO"] },
        { "pergunta": "Qual palavra tem acento agudo?", "certa": "CAFÉ", "erradas": ["VOVÔ", "LIMÃO", "MESA"] },
        { "pergunta": "Qual palavra quer dizer o mesmo que ALEGRE?", "certa": "FELIZ", "erradas": ["TRISTE", "BRAVO", "CANSADO"] },
        { "pergunta": "Qual é o contrário de FRIO?", "certa": "QUENTE", "erradas": ["GELADO", "MOLHADO", "ESCURO"] },
        { "pergunta": "Na frase 'O menino correu', quem fez a ação?", "certa": "O menino", "erradas": ["Correu", "Ninguém", "A rua"] },
        { "pergunta": "Qual é o plural de PÃO?", "certa": "PÃES", "erradas": ["PÃOS", "PÕES", "PÃONS"] },
        { "pergunta": "Qual palavra vem primeiro na ordem alfabética?", "certa": "ABELHA", "erradas": ["BOLA", "CASA", "DADO"] }
      ],
      "4º ano": [
        { "pergunta": "Qual destas palavras é um verbo?", "certa": "CORRER", "erradas": ["BONITO", "MESA", "AZUL"] },
        { "pergunta": "Qual destas palavras é um adjetivo?", "certa": "BONITO", "erradas": ["CORRER", "MESA", "ONTEM"] },
        { "pergunta": "Qual palavra é proparoxítona?", "certa": "LÂMPADA", "erradas": ["CADEIRA", "CAFÉ", "JANELA"] },
        { "pergunta": "Qual é o coletivo de abelhas?", "certa": "ENXAME", "erradas": ["CARDUME", "MATILHA", "REBANHO"] },
        { "pergunta": "Qual é o coletivo de peixes?", "certa": "CARDUME", "erradas": ["ENXAME", "BANDO", "ALCATEIA"] },
        { "pergunta": "Qual palavra está escrita certo?", "certa": "PASSARINHO", "erradas": ["PAÇARINHO", "PASARINHO", "PASSARINIO"] },
        { "pergunta": "Qual palavra tem dígrafo (duas letras, um som)?", "certa": "CHUVA", "erradas": ["PRATO", "BLUSA", "PLANTA"] },
        { "pergunta": "Qual é o sujeito em 'A chuva molhou a rua'?", "certa": "A chuva", "erradas": ["molhou", "a rua", "rua"] },
        { "pergunta": "Que sinal mostra a fala de um personagem?", "certa": "Travessão", "erradas": ["Vírgula", "Ponto final", "Interrogação"] },
        { "pergunta": "Qual palavra é oxítona?", "certa": "CAJU", "erradas": ["CASA", "PEDRA", "ÁRVORE"] }
      ],
      "5º ano": [
        { "pergunta": "Qual é o sujeito de 'Os alunos estudaram'?", "certa": "Os alunos", "erradas": ["estudaram", "alunos estudaram", "não há sujeito"] },
        { "pergunta": "Qual destas palavras é um pronome?", "certa": "ELES", "erradas": ["CASA", "CORRER", "FELIZ"] },
        { "pergunta": "Qual verbo está no passado?", "certa": "CANTEI", "erradas": ["CANTO", "CANTAREI", "CANTANDO"] },
        { "pergunta": "Qual verbo está no futuro?", "certa": "VIAJAREI", "erradas": ["VIAJEI", "VIAJO", "VIAJAVA"] },
        { "pergunta": "Qual palavra tem encontro consonantal?", "certa": "PRATO", "erradas": ["CARRO", "CHAVE", "MESA"] },
        { "pergunta": "Qual é o antônimo de CORAJOSO?", "certa": "MEDROSO", "erradas": ["VALENTE", "FORTE", "OUSADO"] },
        { "pergunta": "Qual frase é exclamativa?", "certa": "Que calor!", "erradas": ["Que horas são?", "Está calor.", "Faz calor?"] },
        { "pergunta": "Qual palavra é paroxítona?", "certa": "CADERNO", "erradas": ["CAFÉ", "MÉDICO", "ÚLTIMO"] },
        { "pergunta": "Qual é o superlativo de BELO?", "certa": "BELÍSSIMO", "erradas": ["BELINHO", "BELOS", "BELEZA"] },
        { "pergunta": "Qual palavra indica oposição na frase?", "certa": "MAS", "erradas": ["E", "PORQUE", "QUANDO"] }
      ]
    }
  }
];
