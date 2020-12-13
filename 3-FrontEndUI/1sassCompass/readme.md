# Sass

## Class 1 - First Contact

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
$ gem install compass
```
6. Check the instalation:
```
$ sass -v 
$ compass -v
```

### Variables
- Change the file's extention to .scss instead of .css
- how to declare a variable:
```sass
$variable: value
```
- compile 
```
$ sass --watch style.scss:style.css
```
- if a variable is declared inside a selector, it will be visible only inside the selector.

## Class 2 - Mixins
- it is used to avoid code repetition.
- how it's done: 
``` sass
@mixin mixin-name{ 
  //code 
}
```
- how to call it: 
```sass
@include mixin-name
```
- Parameters: 
```sass
@mixin mixin-name(parameter){ 
  //code 
}

@include mixin-name(parameter)
```
- The parameter can be a variable, declared before or even on the mixin itself:
```sass
@mixin mixin-name($variable: value){ 
  //code using $variavel 
}
```
- comments on Sass are `//made like this` and they do not show up on the final css code.
- but you can comment `/* like this */` and then they'll show up on the final css code.

## Class 3 - nesting
- tags can be nested on sass 
- `&:hover` when you want to call the parent in itself.
- Attention: too many levels can lead to performance problems

## Class 4 - Imports
- The code should be spred in files by subject / section
- how to import these files: 
```
@import 'folder/file'
```
- if it's a sass file there is no need to put the extention (.scss)
- if it's a `.css` file, change it to `.scss` before importing.

## Class 5 - Color functions

- `darken($color, 50)` makes the color 50% darker
- `lighten($color, 50)` makes the color 50% lighter
- other color fuctions:
```sass
adjust-hue(#6b717f, 60deg)
desaturate($color, 10%)
saturate($color, 10%)
complement($color) //Returns the RGB complement of $color.

```

## Class 6 - Extend and Placeholder

- Placeholders avoid code repetition just like mixins but in the final CSS it puts all the selectors where it was used together while mixins just copy it's code into all the selectors where it was used.
- placeholders do not accept variables or parameters
- how to declare it:
```sass
%placeholder-name {
  //code
}
```
- how to use it:
```sass
@extend %placeholder-name
```

## Class 7 - Media queries inside the selector
- sass allows us to put the media query inside the selector so we can see all the rules for that element in one place.
- how to do it:
```sass
.container {
  width: 940px;
  margin: 0 auto;

   @media (max-width: $mobile-breakpoint) {
      .container {
          width: 90%;
      margin: 10px;
    }
  }
}
```
or, if you want your media query to be a variable:

```sass
.container {
  width: 940px;
  margin: 0 auto;

   @media #{$mq-mobile} {
      .container {
          width: 90%;
      margin: 10px;
    }
  }
}
```

## class 8 - Compass
- Compass is an open source sass based css framework.

### Setup
- [Install compass](http://compass-style.org/install/ "compass website"):
```
$ gem install compass
$ cd "project path"
$ compass create
```
- edit config.rb
css_dir = "path to your css folder"
sass_dir = "path yo tour sass folder"
- watch for updates on sass file:
```
$ compass watch path/styles.scss
```
- compass automatically comments your css file, to change that, uncoment `line_comments = false` on config.rb
- run compass watch again.

### Hands on
- import compass' css - [check documentation](http://compass-style.org/examples/).
```sass
@import "compass/css3";
```
- use it in your code:
```
@include compass-property-you-chose
```

### Automatic sprites
1. put the images for the sprite inside a folder
2. import the folder like this:
```sass
@import "sprite/*.png";
```
3. Compass will generate a new file with the sprite.
4. make this include on the scss file you need the images to be:
```sass
@include all-folder-sprites;
```
where "folder" is the folder where your images to sprite are.
This will generate new classes with each image of the folder.
- [sprites tutorial](https://www.youtube.com/watch?v=Tl6bceyTjFw&ab_channel=LevelUpTuts)

## Class 9 - math operations
- Compass allows us to use math operations
```compass
font-size: 3 * $default-font-size; 
```
### Functions
```compass
@function($param){
  @return result;
}
```
- you can round values using `round()`

## class 10 - Best Practices
- always look the compiled css
- %placeholders > @mixin