
# Strathmore
#### Ver 0.1 | Built on Foundation 6.4.3 & Font Awesome Pro
## Table of Contents
* [ACC Application Framework](#acc-application-framework)
* [Intent of the Upgrade](#intent-of-the-upgrade)
* [Utility Classes](#utility-classes)
* [Reserved Names](#reserved-names)
* [Folder Structure](#folder-structure)
* [Expansion](#expansion)
* [Product Color and Branding](#product-color-and-branding)
* [Shame File](#shame-file)
* [JavaScript Templating](#javascript-templating)
    * [__ Project Origami --> __ ](ORIGAMI.html)

## ACC Application Framework
### Mobile First, BEM, Utility Class Styling
This is a library of modular styles extending the popular framework of Zurb Foundation. This code base is used for both Cordova wrapped phone applications and desktop applications. It is responsive and the UI can be extended or reduced to match the needs of the project. 
**Things to note this library is built with Sass and to enjoy it's fullest power and flexibility it must be compiled.**

## Intent of the Upgrade
### Re-factor of the Bristol framework.
*   **Foundation 6.4.3**
*   removal of redundant UI that is native in foundation.
    *   Nav
    *   list item
    *   Card
    *   Typography Overrides
    *   Most of Table Override
*   **Component Simplification, Design Changes, Depreciation**
    *   Clean up of fonts to multi and maverick
    *   remove layout SCCS and components
    *   Removal of states coloring replaced by utility styling.
    *   **Refactoring SCSS to be More BEM and Dry** [**BEM**](https://css-tricks.com/bem-101/) / [**DRY**](https://alistapart.com/article/dry-ing-out-your-sass-mixins)
        *   simplification of required holder in questions.
        *   reduction of nesting specification on styling.
*   ** UX Definition **
    * Best Practices and Javascript Templating for
        * Mobile Header
        * Pagination
        * Switches
        * Section Toggles
        * Search and Results
*   ** Design Changes **
    * question look and feel
    * moblie header
    * desktop to mobile Navs
*   **Style-guide Documentation**
*   In-Style Documentation using [KSS Documentation](https://github.com/kneath/kss)
*   Style guide built on [**sc5-styleguide**](https://github.com/SC5/sc5-styleguide#with-grunt)
*   Upgrade Styles to Use [**Font Awesome Pro**](https://fontawesome.com/)
    *   Re factor how the fa-holder works
    *   Reduction of fa-holder to reduce style duplication
*   **Utility Classes**
*   including utilities single class constructors [**See Utility Classes**](#utility-classes)
    *   Based on Tachyon CSS for short human styling [[https://tachyons.io/](https://tachyons.io/)]
    *   addition of texture-x utilities
    *   font sizing and font family utility.
*   Use of BEM for UI components
*   base class name is used through all sub components.
*   aiming to reduce code size to under a MB.

## Utility Classes
### Naming Convention

_[style short hand]-[direction]_[value+unit]-[break point]_

### Definition of Style Short Hand

*   **Padding:** P-
*   **Border:** B-
*   **Margin:** M-
*   **Border-radius:** Br-
*   **Border-width:** Bw-
*   **Border-color:** Bc-
*   **Background-image:** Texture-, BACKi-
*   **Background-color:** BACKc-
*   **Font-weight:** Fw-
*   **Color:** Fc-
*   **Font-family:** F-
*   **Line-height:** Lh-
*   **Flex:** Flex-
*   **Display:** Display-
*   **Float:** use foundation pull-right, pull-left
*   **Drop-Shadow:** LayerUp-, LayerDown-

### Directions

*   **all:** no direction modifier
*   **top:** t-
*   **bottom:** b-
*   **right:** r-
*   **left:** l-

### Values

*   **n4:** font: -4 on modular scale, margin: -2x, padding: Not Used, line-height: Not Used
*   **n4:** font: -4 on modular scale, margin: -1x, padding: Not Used, line-height: Not Used
*   **n3:** font: -3 on modular scale, margin: -.5x, padding: Not Used, line-height: Not Used
*   **n2:** font: -2 on modular scale, margin: -.25x, padding: Not Used, line-height: Not Used
*   **n1:** font: -1 on modular scale, margin: -1px, padding: Not Used, line-height: Not Used
*   **0:** font: 0 on modular scale, margin:1px, padding: 1px, line-height: 0
*   **1:** font: 1 on modular scale, margin:.25x, padding: .25x, line-height: 1
*   **2:** font: 2 on modular scale, margin:.5x, padding: .5x, line-height: 1.2
*   **3:** font: 3 on modular scale, margin:1x, padding: 1x, line-height: 1.4
*   **4:** font: 4 on modular scale, margin:2x, padding: 2x, line-height: 1.7

## Reserved Names
### Reserved Words and Modifier Descriptors

These words should be used to describe states and generic elements of the UI and should be used instead of some variation or alternate name.

### States

*   show
*   hide
*   active
*   selected
*   focus
*   success
*   warning
*   alert (Depreciate the use of ‘error’ for the native descriptor from foundation)
*   primary
*   secondary
*   reverse

### Name Modifier

*   __ -container __ or UI Name with no modifier  (Use instead of holder when items are UI based)
*   __ -group __ or UI Name with no modifier (Use instead of list, holder, collection when items or repeatable Content)
*   __ -item __ or UI Name with no modifier  (generic child of container or group)
*   __ -separator __ (a visual treatment or break between items within a container or group )

## Colors
*   Scrub Colors
    *   -accBlue
    *   -productColor, -teal
    *   -teal
    *   -blue
    *   -softGreen
    *   -leafGreen
    *   -purple
    *   -magenta
*   State Colors
    *   -success, -green
    *   -warning, -orange
    *   -alert, -red
    *   -primary, -productColor
*   Grey
    *   -10,
    *   -20,
    *   -30,
    *   -40,
    *   -50,
    *   -60,
    *   -70,
    *   -80,
    *   -90
*   Black
*   White

### Modifiers 
* __-soft:__ Color made pale and almost white. 
* __-light:__ Color mixed with white
* __-dark:__ Color mixed with black 
* __-alpha30:__ Color with alpha set to 30
* __-alpha50:__ Color with alpha set to 50
* __-alpha70:__ Color with alpha set to 70


## Texture Names

All textures should be slightly transparent so solid color backgrounds added to the element will also color the texture.

*   -carbonFiber
*   -offWhite 
*   -softPaper
*   -paper
*   -dirtyPaper
*   -inkLines
*   -inkCrossHatched

### Special Textures

PNG shadows for the containers

*   -insetShadow-v
*   -insetShadow-h
*   -insetShadow-t
*   -insetShadow-b
*   -insetShadow-l
*   -insetShadow-r


## Folder Structure
### Structure and File Naming
To reduce improper cascades in CSS the Sass includes and folder structure has been broken into these sections.  Labels like ".required" and ".override" are included in the file naming to help with readability and transparency of the code. 

1. __base__ - any file that deals with variables, fonts and basic typography (raw tags).
2. __helpers__ or 'required.scss ' - Mostly mixins but some files that have "required" in the name are needed for other files to functions. any file that have been named with "trump" will
3. __components__ - any combination of DOM elements that make up a widget, nav, or collection of tags.
4. __vendor__ - Any included style from a JavaScript or Framework that needs an override to visually match with ACC standards. All files in the vendor area should be postfixed with .override. IE to override foundation's button.scss you would place a 'vendor/foundation/button.override.scss' and make your changes in the new file. 
5. __structure__ - Non-Styling pure page layout code.  Balanced Columns, Sidebars, Page Spacing etc...
6. __trumps__ or '.trump.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.  
7. __shame__ or 'shame.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.
8. __non-core__ Overrides see [Expansion](#expansion)
9. __views__ - Overrides of components when in specific cases of the page, or theme for a needed project. IE. a sidebar box on the home page for project "heart" would have a file path of `non-core/heart/_sidebarbox.override.home.scss`

### Cascade 
As you travel down the structure of the main document the included SCSS files and their classes should increase their specificity. 

## Expansion
## Overriding Styles for your Project Needs
All alteration to the code are to be done through "non-core" inclusion of styles. Please use the below folder structure to allow for review and check-ins of project code. 

### Path and File Naming:
#### New UI
'\_non-core/__Project Code__/__New UI__.scss'

#### Override from framework
'\_non-core/__Project Code__/__element name__.override.scss' 
#### Override from framework while in  a specific view
'\_non-core/__Project Code__/__element name__.override.__views name__.scss'

## Product Color and Branding
In the main style sheet there are some exposed variables to alter the skin of the style.  One of th most cosmetic is product color and branding. The variable "$product-brand-color" takes a hex color and will change elements of the ui to this color away from the ACC blues. "$brand-level" throttles the amount of color.   0 min-value  will not include and product color and 3 the max will bring in the most. 

## Shame File
There is always work that has be done with some corners cut or you work that because it's cross nature between two UI elements there is no good home for it in the current structure or files.  All of this code is collected in the shame.scss file.  There is a shame file for the main branch of the framework and a second shame file that can be found in the corresponding non-core folder for the project. 


## JavaScript Templating [__ Project Origami __ ](ORIGAMI.html)
### Changing of Mobile Stack.  [Vue.js](https://vuejs.org/)
### Component Library
The intent is to have two ways you can use the style-guide. You build your own DOM and alter as you need, or you can Build your product on Vue and use component rendering instead.  
* Coponents will be tag based.
* Names will be `<acc-uiName></acc-uiName>`
* Default functionality will be built in
* Event handling will be built in
* Better standards for UX

### Boiler Plate Mobile Project
* encompass best practices and javascript libraries
* notification lock
* dynamic nav construction
* email reciept

