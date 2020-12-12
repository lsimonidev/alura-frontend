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
@include mixin-name;
```
- Parameters: 
```sass
@mixin mixin-name(parameter){ 
  //code 
}

@include mixin-name(parameter);
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
adjust-hue(#6b717f, 60deg);
desaturate($color, 10%);
saturate($color, 10%);
complement($color) //Returns the RGB complement of $color.

```

## Class 6 - Extend and Placeholder

- Placeholders avoid code repetition just like mixins but in the final CSS it puts all the selectors where it was used together while mixins just copy it's code into all the selectors where it was used.
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
