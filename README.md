# Projeto Rio Toledo — site da exposição

## Estrutura
- `index.html` — página inicial
- `projeto.html` — apresentação do projeto
- `agua.html` — importância da água, ciclo, reservatórios e doenças
- `metodologia.html` — metodologia
- `resultados.html` — área de resultados
- `quiz.html` — quiz de 10 perguntas + ranking
- `feedback.html` — avaliação e comentários
- `equipe.html` — equipe
- `css/` — estilos
- `js/` — JavaScript e configuração do Supabase
- `supabase.sql` — tabelas e políticas RLS

## 1. Logo
Coloque sua logo em:
`img/logo.png`

## 2. Imagem do Rio
Coloque a foto principal em:
`img/rio-toledo.jpg`

## 3. Supabase
1. Crie um projeto no Supabase.
2. Abra o SQL Editor.
3. Cole e execute o arquivo `supabase.sql`.
4. Em Project Settings > API, copie a URL do projeto e a chave pública/anon.
5. Edite `js/config.js`.

IMPORTANTE: nunca coloque a `service_role` key no JavaScript do site.

## 4. Testar
Para testes locais, prefira abrir o projeto com um servidor local (por exemplo, Live Server no VS Code), em vez de abrir o HTML diretamente como `file://`.

## 5. Personalizar
Os textos de metodologia, resultados, equipe e estatísticas ainda são placeholders. Substitua pelos dados finais do PFC.
