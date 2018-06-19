
# Strathmore[](#strathmore "Permanent link")

## Application framework. Mobile First, BEM, Utility Class Styling[](#application-framework-mobile-first-bem-utility-class-styling "Permanent link")

### Re-factor of the Bristol framework.[](#re-factor-of-the-bristol-framework "Permanent link")

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
    *   modernize question form look
    *   Removal of states coloring replaced by utility styling.
    *   **Refactoring SCSS to be More BEM and Dry** [**BEM**](https://css-tricks.com/bem-101/) / [**DRY**](https://alistapart.com/article/dry-ing-out-your-sass-mixins)
        *   simplification of required holder in questions.
        *   reduction of nesting specification on styling.
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

## Utility Classes[](#utility-classes "Permanent link")

### Naming Convention[](#naming-convention "Permanent link")

_[style short hand]-[direction]_[value+unit]-[break point]_

### Definition of Style Short Hand[](#definition-of-style-short-hand "Permanent link")

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

## Directions[](#directions "Permanent link")

*   **all:** no direction modifier
*   **top:** t-
*   **bottom:** b-
*   **right:** r-
*   **left:** l-

## Values[](#values "Permanent link")

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

## Reserved Words and Modifier Descriptors[](#reserved-words-and-modifier-descriptors "Permanent link")

These words should be used to describe states and generic elements of the UI and should be used instead of some variation or alternate name.

### States[](#states "Permanent link")

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

### Modifier[](#modifier "Permanent link")

*   UI Name with no modifier or -container (Use instead of holder when items are UI based)
*   UI Name with no modifier or -group (Use instead of list, holder, collection when items or repeatable Content)
*   UI Name with no modifier or -item (generic child of container or -group)
*   -separator (a visual or break between items)

## Colors[](#colors "Permanent link")

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

## Texture Names[](#texture-names "Permanent link")

all textures should be slightly transparent so solid color backgrounds added to the element will also color the texture.

*   -carbonFiber
*   -noise
*   -softPaper
*   -paper
*   -dirtyPaper
*   -inkLines
*   -inkCrossHatched

### Special Textures[](#special-textures "Permanent link")

PNG shadows for the containers

*   -insetShadow-v
*   -insetShadow-h
*   -insetShadow-t
*   -insetShadow-b
*   -insetShadow-l
*   -insetShadow-r
