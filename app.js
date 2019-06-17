const media = [
    {
      title: 'Dom Casmurro', 
      description: "Publicado pela primeira vez em 1899, Dom Casmurro é uma das grandes obras de Machado de Assis e confirma o olhar certeiro e crítico que o autor estendia sobre toda a sociedade brasileira. Também a temática do ciúme, abordada com brilhantismo nesse livro, provoca polêmicas em torno do caráter de uma das principais personagens femininas da literatura brasileira: Capitu.",
      type:'livros',
      contributor: 'Machado de Assis',
      showDetail: false,
    },
    {
      title: "Mellon Collie and the Infinite Sadness", 
      description: "Lançado em 24 de outubro de 1995 pela Virgin Records, o disco foi produzido pelo líder da banda, Billy Corgan, e por Alan Moulder e Flood. O álbum que contém 28 faixas, foi lançado como um disco duplo e como um LP triplo. Aclamado pela crítica, ganhou sete indicações, tendo ganho uma pela música Bullet with Butterfly Wings que a banda recebeu no Grammy de 1997. O álbum foi votado como 29º maior álbum de todos os tempos, em 1998, pelos leitores da Revista Q e a Revista Time elegeu Mellon Collie and the Infinite Sadness o melhor álbum de 1995.",
      type:'albuns',
      contributor: 'The Smashing Pumpkins',
      showDetail: false
    },
    {
      title: 'Hot Fuss', 
      description: "Hot Fuss é o álbum de estreia da banda americana de Las Vegas. O disco foi lançado em 7 de junho de 2004 no Reino Unido e em 15 de junho nos Estados Unidos. Alavancado pelo sucesso dos singles Somebody Told Me e Mr. Brightside, Hot Fuss foi aclamado como um dos melhores álbuns de 2004, sobretudo devido à sua sonoridade dançante, oriunda de influências de grupos dos anos 80, como New Order, Duran Duran e Depeche Mode.",
      type:'albuns',
      contributor:"The Killers",
      showDetail: false
    },
    {
      title: 'Scrubs', 
      description: "A série mostra a vida profissional e pessoal de diversos personagens que trabalham no fictício hospital Sacred Heart, em uma cidade não revelada. Diferentemente de outras sitcoms, Scrubs é filmada em apenas uma câmera, e também não usa os tradicionais sons de risadas. Cada episódio da série é estruturado através de múltiplas histórias, ligadas entre si pela narração do protagonista J.D., que no final de cada episódio conta uma pequena moral filosófica.",
      type:'series',
      contributor: '',
      showDetail: false,
    },
    {
      title: 'Antes do Amanhecer', 
      description: "O filme conta a história de Jesse, um jovem americano, e Celine, uma linda francesa, se conhecem no trem para Paris, e começam uma conversa que os leva a fazer uma escala em Viena e ficar um pouco mais juntos, sem imaginar o que o destino os reserva.",
      type:'filmes',
      contributor:'James Cameron',
      showDetail: false,
    },
    {
      title: 'A Insustentável Leveza do Ser', 
      description: "Publicado em 1984, o romance se passa na cidade de Praga em 1968. O livro, de 1982, tem quatro protagonistas: Tereza e Tomas, Sabina e Franz. Por força de suas escolhas ou por interferência do acaso, cada um deles experimenta, à sua maneira, o peso insustentável que baliza a vida, esse permanente exercício de reconhecer a opressão e de tentar amenizá-la.",
      type:'livros',
      contributor:'Milan Kundera',
      showDetail: false,
    },
    {
      title: 'Hannah e suas irmãs', 
      description: "Três jantares consecutivos de Ação de Graças marcam o passar dos anos para as irmãs Hannah (Mia Farrow), Lee (Barbara Hershey) e Holly (Dianne Wiest) e os homens em sua vidas. Lee está tendo um caso com o marido de Hannah e tentando terminar seu romance com o manipulador Frederick (Max von Sydow). Holly está frustrada com a sua carreira e a crescente dependência da gentileza de Hannah, enquanto é cortejada pelo hipocondríaco Mickey (Woody Allen).",
      type:'filmes',
      contributor:'Woodie Allen',
      showDetail: false,
    },
    {
      title: 'Rick and Morty', 
      description: "Abordando discussões filosóficos com uma comédia bastante sarcástica, o seriado mostra as viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente comum com problemas de autoestima.",
      type:'series',
      contributor: '',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
      title: 'Minhas obras favoritas',
      autor:'Por Ricardo Miguel',
      mediaList: media,
      type:""
    },
    methods: {
      mostrarDetalhes: function(media){
        media.showDetail = !media.showDetail
      },
      filtrarLista: function(){
        this.type = event.target.value       
    }
  },
  computed:{
    itensUnicos: function(){
      const types = []
      this.mediaList.forEach((item)=>{
        if(!types.includes(item.type)){
          types.push(item.type)
        }
      })
      return types
      }
    }
})
