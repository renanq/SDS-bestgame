# BEST GAME SURVEY

Desenvolvido por [Renan Queiroz](https://www.rqweb.com.br) | [renan@rqweb.com.br](mailto:renan@rqweb.com.br)

Aplicação para Pesquisa de Preferência de Jogos, criada no evento Semana Dev Superior 1.0 (de 14 a 20 de setembro de 2020), da [Dev Superior](https://devsuperior.com.br/). 

![](/assets/img-intro.png)


## Back-End

As APIs (REST / JSON) do Back-End foram desenvolvidas em [Java](https://www.oracle.com/java/) + [Spring Boot](https://spring.io/), e o Banco de Dados utilizado foi o [Postgre](https://www.postgresql.org). APIs foram testadas no [Insomnia](https://insomnia.rest/). Tanto o Banco de Dados quanto a aplicação foram hospedadas no [Heroku](https://sds1-renanq.herokuapp.com/). Os serviços criados são consumidos pelas aplicações de Front-End (WEB e Mobile) para consulta e gravação de informações no Banco de Dados.

![](/assets/img-be-01.png)

![](/assets/img-be-02.png)

![](/assets/img-be-03.png)


## Front-End

O Front-End é dividido em uma Aplicação WEB e um aplicativo Mobile:

### WEB

A parte WEB é uma SPA(Single Page Application) desenvolvida em [ReactJS](https://reactjs.org/), utilizando [TypeScript](https://www.typescriptlang.org/). A aplicação tem por objetivo coletar e mostrar informações sobre quais jogos os "gamers" mais gostam. Os dados dessas preferências ficam armazenadas no Banco de Dados. 

Na página de resultados, as informações são listadas de forma paginada, ainda podem ser filtradas por data, além de ter uma opção de exibição de gráficos (dashboard) exibindo os jogos, plataformas e gêneros mais votados.

Na página para votação os gamers preenchem seus dados e selecionam o seu jogo preferido a partir da respectiva plataforma. As informações de plataforma e jogos também estão armazenadas no Banco de Dados.

Acesse a aplicação WEB que está publicada no endereço [https://bestgamesurvey.netlify.app/] (https://bestgamesurvey.netlify.app/).

![](/assets/img-web-01.png)

![](/assets/img-web-02.png)

![](/assets/img-web-03.png)

![](/assets/img-web-04.png)

### Mobile 

No Aplicativo Mobile, os "gamers" podem votar nos jogos que mais gostam. O "gamer" cadastra seu nome e idade, seleciona a plataforma que mais gosta, seu jogo preferido e a aplicação armazena essas informações em Banco de Dados.

![](/assets/img-mobile-01.png)