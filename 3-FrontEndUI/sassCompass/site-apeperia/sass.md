# Sass

## Aula 1 - primeiro contato

### Preparando o Ambiente
1. Instalar o Ruby -> http://rubyinstaller.org/downloads
2. marcar "add Ruby to your PATH"
3. `ruby -v` no terminal, para verificar que ficou instalado
4. `gem install sass` no terminal para instalar o Sass
5. `gem install compass` no terminal para instalar o Compass
6. `sass -v` e `compass -v` no terminal para verificar a versão da instalação.

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

