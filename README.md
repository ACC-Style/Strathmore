<div class="mw-readable m-l_5">

# Strathmore

#### Version 1.5.0 | Built on Foundation 6.4.3 & Font Awesome Pro

## Table of Contents

-   [ACC Application Framework](#acc-application-framework)
-   [Intent of the Upgrade](#intent-of-the-upgrade)
-   [Utility Classes](#utility-classes)
-   [Reserved Names](#reserved-names)
-   [Folder Structure](#folder-structure)
-   [Expansion](#expansion)
-   [Product Color and Branding](#product-color-and-branding)
-   [Shame File](#shame-file)
-   [JavaScript Template](#javascript-templating)
-   [ ** Project Origami ** ](ORIGAMI.md)

## ACC Application Framework

### Enterprise UI for Mobile and Desktop Applications

Strathmore is a library of utility styles extending the framework of Zurb Foundation. This code base is in products that are both Cordova web hybrid applications and desktop applications. It is fully responsive with breakpoints at small medium and large screen formats. The framework is extendable and reductive to match the needs of the project. The utility classes do give enough flexibility that building a product from the basic index.css is possible, this library uses Sass and to enjoy it's fullest power and flexibility.

**Compile with Sass and push the brand as far as it needs.**

## Utility Classes

Utility classes are a distinct departure from many previous learned CSS theories, but what utility classes allow for is an excellent separation of concerns between the HTML and CSS. The singular focus for utility classes is a single class controls a single style in CSS. Utility Class has significant benefits of reducing scope expansion in the CSS and also gives greater flexibility of crafting user interface components that are currently undefined. Html should continually be written using the best standards for semantics, but it is no longer a concern to follow a components design pattern because it is applicable at the HTML level.

### Naming Convention

Strathmore does have a learning curve, but to reduce the curve the names follow a strict pattern. State of the elements which then effects a single style at a defined value which only effects at a specific breakpoint. <a href="./Strathmore/#!/section/100"> read more</a>

#### [pseudo state]:[style name]\_[value+unit]-[modifier]:[break point]

An example of wanting the text color of an object when hovered to become the primary the color only when the screen is large would be h:c_primary:lg.

### Definition of Style Short Hand

Strathmore utilizes an abbreviated naming convention for utility classes to save typing for developers and to also reduce overall files size.

</div>

| Style                      | Short Name  | CSS                          | Long Nmae                     |
| -------------------------- | ----------- | ---------------------------- | ----------------------------- |
| margin                     | '.m'        | 'margin'                     | '.margin'                     |
| margin-top                 | '.m-t'      | 'margin-top'                 | '.margin-top'                 |
| margin-bottom              | '.m-b'      | 'margin-bottom'              | '.margin-bottom'              |
| margin-left                | '.m-l'      | 'margin-left'                | '.margin-left'                |
| margin-right               | '.m-r'      | 'margin-right'               | '.margin-right'               |
| overflow                   | '.overflow' | 'overflow'                   | '.overflow'                   |
| padding                    | '.p'        | 'padding'                    | '.padding'                    |
| padding-top                | '.p-t'      | 'padding-top'                | '.padding-top'                |
| padding-bottom             | '.p-b'      | 'padding-bottom'             | '.padding-bottom'             |
| padding-left               | '.p-l'      | 'padding-left'               | '.padding-left'               |
| padding-right              | '.p-r'      | 'padding-right'              | '.padding-right'              |
| line-height                | '.lh'       | 'line-height'                | '.line-height'                |
| font-size                  | '.font'     | 'font-size'                  | '.font-size'                  |
| font-family                | '.font'     | 'font-family'                | '.font-family'                |
| font-weight                | '.font'     | 'font-weight'                | '.font-weight'                |
| font-style                 | '.font'     | 'font-style'                 | '.font-style'                 |
| color                      | '.c'        | 'color'                      | '.color'                      |
| background-color           | '.bg'       | 'background-color'           | '.back'                       |
| border-color               | '.br'       | 'border-color'               | '.border'                     |
| border-radius              | '.br'       | 'border-radius'              | '.border-radius'              |
| border-top-right-radius    | '.br-tr'    | 'border-top-right-radius'    | '.border-top-right-radius'    |
| border-top-left-radius     | '.br-tl'    | 'border-top-left-radius'     | '.border-top-left-radius'     |
| border-bottom-right-radius | '.br-br'    | 'border-bottom-right-radius' | '.border-bottom-right-radius' |
| border-bottom-left-radius  | '.br-bl'    | 'border-bottom-left-radius'  | '.border-bottom-left-radius'  |
| border-width               | '.br'       | 'border-width'               | '.border-width'               |
| border-top-width           | '.br-t'     | 'border-top-width'           | '.border-top-width'           |
| border-right-width         | '.br-r'     | 'border-right-width'         | '.border-right-width'         |
| border-left-width          | '.br-l'     | 'border-left-width'          | '.border-left-width'          |
| border-bottom-width        | '.br-b'     | 'border-bottom-width'        | '.border-bottom-width'        |
| width                      | '.w'        | 'width'                      | '.width'                      |
| display                    | '.d'        | 'display'                    | '.display'                    |
| max-width                  | '.max-w'    | 'max-width'                  | '.max-width'                  |

### pseudo states

| states      | Short Name | CSS        | Long Name | Currently Used                  |
| ----------- | ---------- | ---------- | --------- | ------------------------------- |
| hover       | 'h:'       | ':hover'   | 'hover'   | Yes                             |
| ~~active~~  | ~~'a:'~~   | ':active'  | 'active'  | <span class="c_alert">No</span> |
| ~~visited~~ | ~~'v:'~~   | ':visited' | 'hover'   | <span class="c_alert">No</span> |

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

### Break Points

| break point | Short Name | css             | dimension | Currently Used                  |
| ----------- | ---------- | --------------- | --------- | ------------------------------- |
| all sizes   | ''         | min-width: 0em  | 0px       | default                         |
| ~~small~~   | ':sm'      | min-width: 30em | 480px     | <span class="c_alert">No</span> |
| medium      | ':md'      | min-width: 40em | 640px     | Yes                             |
| large       | ':lg'      | min-width: 40em | 1024px    | Yes                             |

### Alternate Values

#### Border Radius

| Value Postfix | Border Radius Values |
| ------------- | -------------------- |
| square        | 0                    |
| radius        | 5px or Global Radius |
| round         | 25px                 |
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

#### Overflow

| Value Postfix | Overflow |
| ------------- | -------- |
| auto          | auto     |
| clip          | clip     |
| scroll        | scroll   |
| hidden        | hidden   |
| ellipsis      | ellipsis |
| visible       | visible  |
| unset         | unset    |

<div class="mw-readable m-r_5">

## Reserved Names

### Reserved Words and Modifier Descriptors

These words should be used to describe states and generic elements of the UI and should be used instead of some variation or alternate name.

### Component Name Modifier

Components styling is most are

-   ** -container ** or UI Name with no modifier (Use instead of holder when items are UI based)
-   ** -group ** or UI Name with no modifier (Use instead of list, holder, collection when items or repeatable Content)
-   ** -item ** or UI Name with no modifier (generic child of container or group)
-   ** -separator ** (a visual treatment or break between items within a container or group )

### States

-   show
-   hide
-   is-active
-   is-complete
-   is-disabled
-   is-current
-   is-selected
-   focus
-   success
-   hover
-   warning
-   alert (Depreciate the use of ‘error’ for the native descriptor from foundation)
-   primary
-   secondary
-   reverse

## Colors

-   Scrub Colors
    -   -ACC Blue
    -   -teal
    -   -blue
    -   -purple
    -   -magenta
-   State Colors
    -   -success, -green
    -   -warning, -orange
    -   -alert, -red
    -   -primary, -productColor
    -   -secondary
    -   -highlight
-   Black
-   White
-   Black and White have transparencies
    -   -10 alpha,
    -   -20 alpha,
    -   -30 alpha,
    -   -40 alpha,
    -   -50 alpha,
    -   -60 alpha,
    -   -70 alpha,
    -   -80 alpha,
    -   -90 alpha

### Modifiers (Not Recommended)

-   **-soft:** Color made pale and almost white.
-   **-light:** Color mixed with white
-   **-dark:** Color mixed with black
-   **-alpha30:** Color with alpha set to 30
-   **-alpha50:** Color with alpha set to 50
-   **-alpha70:** Color with alpha set to 70

## Texture Names

All textures should be slightly transparent so solid color backgrounds added to the element will also color the texture.

-   -carbonFiber
-   -offWhite
-   -softPaper
-   -paper
-   -dirtyPaper
-   -inkLines
-   -inkCrossHatched

### Special Textures

PNG shadows for the containers

-   -insetShadow-v
-   -insetShadow-h
-   -insetShadow-t
-   -insetShadow-b
-   -insetShadow-l
-   -insetShadow-r

## Intent of the Upgrade

### Re-factor of the Bristol framework.

-   **Foundation 6.4.3**
-   removal of redundant UI that is native in foundation.
    -   Nav
    -   list item
    -   Card
    -   Typography Overrides
    -   Most of Table Override
-   **Component Simplification, Design Changes, Depreciation**
    -   Clean up of fonts to multi and maverick
    -   remove layout SCCS and components
    -   Removal of states coloring replaced by utility styling.
    -   **Refactoring SCSS to be More BEM and Dry** [**BEM**](https://css-tricks.com/bem-101/) / [**DRY**](https://alistapart.com/article/dry-ing-out-your-sass-mixins)
    -   simplification of required holder in questions.
    -   reduction of nesting specification on styling.
-   ** UX Definition **
    -   Best Practices and JavaScript Template for
    -   Mobile Header
    -   Pagination
    -   Switches
    -   Section Toggles
    -   Search and Results
-   ** Design Changes **
    -   question look and feel
    -   mobile header
    -   desktop to mobile navigation
-   **Style-guide Documentation**
-   In-Style Documentation using [KSS Documentation](https://github.com/kneath/kss)
-   Style guide built on [**sc5-styleguide**](https://github.com/SC5/sc5-styleguide#with-grunt)
-   Upgrade Styles to Use [**Font Awesome Pro**](https://fontawesome.com/)
    -   Re factor how the fa-holder works
    -   Reduction of fa-holder to reduce style duplication
-   **Utility Classes**
-   including utilities single class constructors [**See Utility Classes**](#utility-classes)
    -   Based on Tachyon CSS for short human styling [[https://tachyons.io/](https://tachyons.io/)]
    -   addition of texture-x utilities
    -   font sizing and font family utility.
-   Use of BEM for UI components
-   base class name is used through all sub components.
-   aiming to reduce code size to under a MB.

## Folder Structure

### Structure and File Naming

To reduce improper cascades in CSS the Sass includes and folder structure has been broken into these sections. Labels like ".required" and ".override" are included in the file naming to help with readability and transparency of the code.

1. **base** - any file that deals with variables, fonts and basic typography (raw tags).
2. **helpers** - Mostly mixins but some files that have "required" in the name are needed for other files to functions. any file that have been named with "trump" will
3. **components** - any combination of DOM elements that make up a widget, nav, or collection of tags. Most of these have been off loaded to utility classes.
4. **utlity classes** - A majority of the css is broken down into single class declarations of a single style.
5. **vendor** - Any included style from a JavaScript or Framework that needs an override to visually match with ACC standards. All files in the vendor area should be postfixed with .override. IE to override foundation's button.scss you would place a 'vendor/foundation/button.override.scss' and make your changes in the new file.
6. **structure** - currently the project has one structure and that is questions
7. **trumps** or '.trump.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.
8. **shame** or 'shame.scss' - utility classes that have either high specificity or should override other uses of the same style in earlier style-sheets.
9. **non-core** Overrides see [Expansion](#expansion)
10. **views** - Overrides of components when in specific cases of the page, or theme for a needed project. IE. a sidebar box on the home page for project "heart" would have a file path of `non-core/heart/_sidebarbox.override.home.scss`

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

-   Components will be tag based.
-   Names will be `<acc-uiName></acc-uiName>`
-   Default functionality will be built in
-   Event handling will be built in
-   Better standards for UX

### Boiler Plate Mobile Project

-   encompass best practices and JavaScripts libraries
-   notification lock
-   dynamic nav construction
-   email receipt

## Potential Projects

</div>
