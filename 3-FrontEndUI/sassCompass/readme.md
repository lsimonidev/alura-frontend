# Sass

## Aula 1 - First Contact

### Set up
1. [Install Ruby](http://rubyinstaller.org/downloads "Ruby download link") 
2. Check "add Ruby to your PATH" option
3. Check the instalation:
```
$ ruby -v
```
4. Install sass and Compass
```
$ gem install sass
gem install compass
```
6. Check the instalation:
```
$ sass -v 
$ compass -v
```

### Variáveis
- mudar a extensão do arquivo para .scss em vez de .css
- sintaxe: `$variavel: valor;`
- compilar o sass: `sass --watch style.scss:style.css` no terminal

## Aula 2 - Mixins
- utilizado para evitar repetição de código.
- sintaxe: `@mixin nome-do-mixin{ //css code }`
- como chamar o mixin: `@include nome-do-mixin;`
- quando tem parametro: `@mixin nome-do-mixin(parametro){ //css code }`
- como chamar o mixin: `@include nome-do-mixin(parametro);`
- o parâmetro pode ser uma variável, declarada antes ou até no próprio mixin.
- quando tem parametro: `@mixin nome-do-mixin($variavel: valor){ //css code usando $variavel }`
- comentários do Sass `//feitos assim` não aparecem no css final
- os comentários feitos no Sass `/* assim */` vão para o css final

## Aula 3 - Aninhamento
- as tags podem ser aninhadas 
- `&:hover` quando for para chamar o proprio seletor pai
- cuidado para não abusar: não fazer muitos níveis encadeados, gera problemas de performance.

## Aula 4 - Imports
- o ideal é o sass ficar dividido em arquivos por assunto / área da página
- como importar estes arquivos no sass principal: `@import 'pasta/arquivo'`
- se for um arquivo sass não precisa colocar a extensão do arquivo (.scss)
- caso o arquivo seja `.css` é melhor modificar para `.scss` antes de importar


