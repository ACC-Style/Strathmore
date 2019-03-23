# Strathmore

#### Version 0.1 | Built on Foundation 6.4.3 & Font Awesome Pro

## Table of Contents

- [ACC Application Framework](#acc-application-framework)
- [Intent of the Upgrade](#intent-of-the-upgrade)
- [Utility Classes](#utility-classes)
- [Reserved Names](#reserved-names)
- [Folder Structure](#folder-structure)
- [Expansion](#expansion)
- [Product Color and Branding](#product-color-and-branding)
- [Shame File](#shame-file)
- [JavaScript Template](#javascript-templating)
- [ ** Project Origami ** ](ORIGAMI.md)

## ACC Application Framework

### Enterprise UI for Mobile and Desktop Applications

This is a library of modular styles extending the popular framework of Zurb Foundation. This code base is used for both Cordova wrapped phone applications and desktop applications. It is responsive and the UI can be extended or reduced to match the needs of the project.
**Things to note this library is built with Sass and to enjoy it's fullest power and flexibility it must be compiled.**

## Intent of the Upgrade

### Re-factor of the Bristol framework.

- **Foundation 6.4.3**
- removal of redundant UI that is native in foundation.
  - Nav
  - list item
  - Card
  - Typography Overrides
  - Most of Table Override
- **Component Simplification, Design Changes, Depreciation**
  - Clean up of fonts to multi and maverick
  - remove layout SCCS and components
  - Removal of states coloring replaced by utility styling.
  - **Refactoring SCSS to be More BEM and Dry** [**BEM**](https://css-tricks.com/bem-101/) / [**DRY**](https://alistapart.com/article/dry-ing-out-your-sass-mixins)
  - simplification of required holder in questions.
  - reduction of nesting specification on styling.
- ** UX Definition **
  - Best Practices and JavaScript Template for
  - Mobile Header
  - Pagination
  - Switches
  - Section Toggles
  - Search and Results
- ** Design Changes **
  - question look and feel
  - mobile header
  - desktop to mobile navigation
- **Style-guide Documentation**
- In-Style Documentation using [KSS Documentation](https://github.com/kneath/kss)
- Style guide built on [**sc5-styleguide**](https://github.com/SC5/sc5-styleguide#with-grunt)
- Upgrade Styles to Use [**Font Awesome Pro**](https://fontawesome.com/)
  - Re factor how the fa-holder works
  - Reduction of fa-holder to reduce style duplication
- **Utility Classes**
- including utilities single class constructors [**See Utility Classes**](#utility-classes)
  - Based on Tachyon CSS for short human styling [[https://tachyons.io/](https://tachyons.io/)]
  - addition of texture-x utilities
  - font sizing and font family utility.
- Use of BEM for UI components
- base class name is used through all sub components.
- aiming to reduce code size to under a MB.

## Utility Classes

### Naming Convention

_[style name]_[value+unit]-[modifier]_[break point]_

### Definition of Style Short Hand

| Style                      | Short Name | CSS                          | Long Nmae                     |
| -------------------------- | ---------- | ---------------------------- | ----------------------------- |
| margin                     | '.m'       | 'margin'                     | '.margin'                     |
| margin-top                 | '.m-t'     | 'margin-top'                 | '.margin-top'                 |
| margin-bottom              | '.m-b'     | 'margin-bottom'              | '.margin-bottom'              |
| margin-left                | '.m-l'     | 'margin-left'                | '.margin-left'                |
| margin-right               | '.m-r'     | 'margin-right'               | '.margin-right'               |
| padding                    | '.p'       | 'padding'                    | '.padding'                    |
| padding-top                | '.p-t'     | 'padding-top'                | '.padding-top'                |
| padding-bottom             | '.p-b'     | 'padding-bottom'             | '.padding-bottom'             |
| padding-left               | '.p-l'     | 'padding-left'               | '.padding-left'               |
| padding-right              | '.p-r'     | 'padding-right'              | '.padding-right'              |
| line-height                | '.lh'      | 'line-height'                | '.line-height'                |
| font-size                  | '.font'    | 'font-size'                  | '.font-size'                  |
| font-family                | '.font'    | 'font-family'                | '.font-family'                |
| font-weight                | '.font'    | 'font-weight'                | '.font-weight'                |
| font-style                 | '.font'    | 'font-style'                 | '.font-style'                 |
| color                      | '.c'       | 'color'                      | '.color'                      |
| background-color           | '.bg'      | 'background-color'           | '.back'                       |
| border-color               | '.br'      | 'border-color'               | '.border'                     |
| border-radius              | '.br'      | 'border-radius'              | '.border-radius'              |
| border-top-right-radius    | '.br-tr'   | 'border-top-right-radius'    | '.border-top-right-radius'    |
| border-top-left-radius     | '.br-tl'   | 'border-top-left-radius'     | '.border-top-left-radius'     |
| border-bottom-right-radius | '.br-br'   | 'border-bottom-right-radius' | '.border-bottom-right-radius' |
| border-bottom-left-radius  | '.br-bl'   | 'border-bottom-left-radius'  | '.border-bottom-left-radius'  |
| border-width               | '.br'      | 'border-width'               | '.border-width'               |
| border-top-width           | '.br-t'    | 'border-top-width'           | '.border-top-width'           |
| border-right-width         | '.br-r'    | 'border-right-width'         | '.border-right-width'         |
| border-left-width          | '.br-l'    | 'border-left-width'          | '.border-left-width'          |
| border-bottom-width        | '.br-b'    | 'border-bottom-width'        | '.border-bottom-width'        |
| width                      | '.w'       | 'width'                      | '.width'                      |
| display                    | '.d'       | 'display'                    | '.display'                    |

### Values

| Value Postfix | Font Size | Margin                | Padding              | Line Height | border-width | Color                  |
| ------------- | --------- | --------------------- | -------------------- | ----------- | ------------ | ---------------------- |
| n5            | ms(-5)    | -2 \* X<sup>†</sup>   | Not Used             | Not Used    | Not Used     | mix(color, black, 90%) |
| n4            | ms(-4)    | -1 \* X<sup>†</sup>   | Not Used             | Not Used    | Not Used     | mix(color, black, 70%) |
| n3            | ms(-3)    | -.5 \* X<sup>†</sup>  | Not Used             | Not Used    | Not Used     | mix(color, black, 50%) |
| n2            | ms(-2)    | -.25 \* X<sup>†</sup> | Not Used             | Not Used    | Not Used     | mix(color, black, 30%) |
| n1            | ms(-1)    | -.1 \* X<sup>†</sup>  | Not Used             | Not Used    | Not Used     | mix(color, black, 10%) |
| 0             | ms(0)     | 0                     | 0                    | 0           | 0            | color @ 100%           |
| 1             | ms(1)     | .1 \* X<sup>†</sup>   | .1 \* X<sup>†</sup>  | 1           | 1px          | mix(color, white, 10%) |
| 2             | ms(2)     | .25 \* X<sup>†</sup>  | .25 \* X<sup>†</sup> | 1.45        | 3px          | mix(color, white, 30%) |
| 3             | ms(3)     | .5 \* X<sup>†</sup>   | 5 \* X<sup>†</sup>   | 1.65        | 5px          | mix(color, white, 50%) |
| 4             | ms(4)     | 1 \* X<sup>†</sup>    | 1 \* X<sup>†</sup>   | 1.75        | .5rem        | mix(color, white, 70%) |
| 5             | ms(5)     | 2 \* X<sup>†</sup>    | 2 \* X<sup>†</sup>   | 2           | 1rem         | mix(color, white, 90%) |

<sup>†</sup> x = global spacing 1 rem

### Alternate Values

#### Border Radius

| Value Postfix | Border Radius Values |
| ------------- | -------------------- |
| square        | 0                    |
| radius        | 5px or Global Radius |
| round         | 999px                |
| circle        | 100%                 |

#### Border Style

| Value Postfix | Border Style Values |
| ------------- | ------------------- |
| none          | none                |
| dashed        | dashed              |
| solid         | solid               |

#### Display

| Value Postfix | Display      |
| ------------- | ------------ |
| none          | none         |
| block         | block        |
| inline        | inline       |
| inline-block  | inline-block |
| flex          | flex         |

## Reserved Names

### Reserved Words and Modifier Descriptors

These words should be used to describe states and generic elements of the UI and should be used instead of some variation or alternate name.

### States

- show
- hide
- is-active
- selected
- focus
- success
- hover
- warning
- alert (Depreciate the use of ‘error’ for the native descriptor from foundation)
- primary
- secondary
- reverse
- disabled

### Name Modifier

- ** -container ** or UI Name with no modifier (Use instead of holder when items are UI based)
- ** -group ** or UI Name with no modifier (Use instead of list, holder, collection when items or repeatable Content)
- ** -item ** or UI Name with no modifier (generic child of container or group)
- ** -separator ** (a visual treatment or break between items within a container or group )

## Colors

- Scrub Colors
  - -accBlue
  - -teal
  - -blue
  - -purple
  - -magenta
- State Colors
  - -success, -green
  - -warning, -orange
  - -alert, -red
  - -primary, -productColor
  - -secondary
  - -highlight
- Black
- White
- Black and White have transparencies
  - -10 alpha,
  - -20 alpha,
  - -30 alpha,
  - -40 alpha,
  - -50 alpha,
  - -60 alpha,
  - -70 alpha,
  - -80 alpha,
  - -90 alpha

### Modifiers (Not Recommended)

- **-soft:** Color made pale and almost white.
- **-light:** Color mixed with white
- **-dark:** Color mixed with black
- **-alpha30:** Color with alpha set to 30
- **-alpha50:** Color with alpha set to 50
- **-alpha70:** Color with alpha set to 70

## Texture Names

All textures should be slightly transparent so solid color backgrounds added to the element will also color the texture.

- -carbonFiber
- -offWhite
- -softPaper
- -paper
- -dirtyPaper
- -inkLines
- -inkCrossHatched

### Special Textures

PNG shadows for the containers

- -insetShadow-v
- -insetShadow-h
- -insetShadow-t
- -insetShadow-b
- -insetShadow-l
- -insetShadow-r

## Folder Structure

### Structure and File Naming

To reduce improper cascades in CSS the Sass includes and folder structure has been broken into these sections. Labels like ".required" and ".override" are included in the file naming to help with readability and transparency of the code.

1. **base** - any file that deals with variables, fonts and basic typography (raw tags).
2. **helpers** or 'required.scss ' - Mostly mixins but some files that have "required" in the name are needed for other files to functions. any file that have been named with "trump" will
3. **components** - any combination of DOM elements that make up a widget, nav, or collection of tags.
4. **vendor** - Any included style from a JavaScript or Framework that needs an override to visually match with ACC standards. All files in the vendor area should be postfixed with .override. IE to override foundation's button.scss you would place a 'vendor/foundation/button.override.scss' and make your changes in the new file.
5. **structure** - Non-Styling pure page layout code. Balanced Columns, Sidebars, Page Spacing etc...
6. **trumps** or '.trump.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.
7. **shame** or 'shame.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.
8. **non-core** Overrides see [Expansion](#expansion)
9. **views** - Overrides of components when in specific cases of the page, or theme for a needed project. IE. a sidebar box on the home page for project "heart" would have a file path of `non-core/heart/_sidebarbox.override.home.scss`

### Cascade

As you travel down the structure of the main document the included SCSS files and their classes should increase their specificity.

## Expansion

## Overriding Styles for your Project Needs

All alteration to the code are to be done through "non-core" inclusion of styles. Please use the below folder structure to allow for review and check-ins of project code.

### Path and File Naming:

#### New UI

'\_non-core/**Project Code**/**New UI**.scss'

#### Override from framework

'\_non-core/**Project Code**/**element name**.override.scss'

#### Override from framework while in a specific view

'\_non-core/**Project Code**/**element name**.override.**views name**.scss'

## Product Color and Branding

In the main style sheet there are some exposed variables to alter the skin of the style. One of th most cosmetic is product color and branding. The variable "$product-brand-color" takes a hex color and will change elements of the UI to this color away from the ACC blues. "$brand-level" throttles the amount of color. 0 min-value will not include and product color and 3 the max will bring in the most.

## Shame File

There is always work that has be done with some corners cut or you work that because it's cross nature between two UI elements there is no good home for it in the current structure or files. All of this code is collected in the shame.scss file. There is a shame file for the main branch of the framework and a second shame file that can be found in the corresponding non-core folder for the project.

## JavaScript Templates [ ** Project Origami ** ](ORIGAMI.md)

### Changing of Mobile Stack. [Vue.js](https://vuejs.org/)

### Component Library

The intent is to have two ways you can use the style-guide. You build your own DOM and alter as you need, or you can Build your product on Vue and use component rendering instead.

- Components will be tag based.
- Names will be `<acc-uiName></acc-uiName>`
- Default functionality will be built in
- Event handling will be built in
- Better standards for UX

### Boiler Plate Mobile Project

- encompass best practices and JavaScripts libraries
- notification lock
- dynamic nav construction
- email receipt

## Potential Projects
