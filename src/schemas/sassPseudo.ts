import { CompletionItem, SnippetString, CompletionItemKind, workspace } from 'vscode';

const pseudoRaw = {
  pseudoclasses: [
    {
      name: ':active',
      desc:
        'Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.'
    },
    {
      name: ':any-link',
      desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.',
      browsers: 'S9'
    },
    {
      name: ':checked',
      desc:
        "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies.",
      browsers: 'E,C,FF1,IE9,O9,S3.13'
    },
    {
      name: ':corner-present',
      desc: 'Non-standard. Indicates whether or not a scrollbar corner is present.',
      browsers: 'C,S5'
    },
    {
      name: ':decrement',
      desc:
        'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.',
      browsers: 'C,S5'
    },
    {
      name: ':default',
      desc:
        'Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.',
      browsers: 'C,FF3,O10,S5'
    },
    {
      name: ':disabled',
      desc: 'Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.',
      browsers: 'E,C,FF1.5,IE9,O9,S3.1'
    },
    {
      name: ':double-button',
      desc:
        'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.',
      browsers: 'C,S5'
    },
    {
      name: ':empty',
      desc: 'Represents an element that has no children at all.',
      browsers: 'E,C,FF1.5,IE9,O9,S3.1'
    },
    {
      name: ':enabled',
      desc: 'Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.',
      browsers: 'E,C,FF1.5,IE9,O9,S3.1'
    },
    {
      name: ':end',
      desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.',
      browsers: 'C,S5'
    },
    {
      name: ':first',
      desc:
        'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
      name: ':first-child',
      desc: 'Same as :nth-child(1). Represents an element that is the first child of some other element.',
      browsers: 'E,C,FF3,IE7,O9.5,S3.1'
    },
    {
      name: ':first-of-type',
      desc:
        'Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.2'
    },
    {
      name: ':focus',
      desc: 'Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).'
    },
    {
      name: ':fullscreen',
      desc: 'Matches any element that has its fullscreen flag set.',
      browsers: 'E'
    },
    {
      name: ':future',
      desc: 'Represents any element that is defined to occur entirely after a :current element.',
      browsers: 'C,O16,S6'
    },
    {
      name: ':horizontal',
      desc: 'Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.',
      browsers: 'C,S5'
    },
    {
      name: ':host',
      desc: 'When evaluated in the context of a shadow tree, matches the shadow tree’s host element.',
      browsers: 'C35,O22'
    },
    {
      name: ':host()',
      desc:
        'When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.',
      browsers: 'C35,O22'
    },
    {
      name: ':host-context()',
      desc: 'Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.',
      browsers: 'C35,O22'
    },
    {
      name: ':hover',
      desc:
        'Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element.'
    },
    {
      name: ':increment',
      desc:
        'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.',
      browsers: 'C,S5'
    },
    {
      name: ':indeterminate',
      desc: 'Applies to UI elements whose value is in an indeterminate state.',
      browsers: 'E,C,FF3.6,IE9,O10.6,S3'
    },
    {
      name: ':in-range',
      desc:
        'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.',
      browsers: 'E13,C,FF10,O9.6,S5.1'
    },
    {
      name: ':invalid',
      desc:
        'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.',
      browsers: 'E,C,FF4,IE10,O10,S5'
    },
    {
      name: ':lang()',
      desc: 'Represents an element that is in language specified.',
      browsers: 'E,C,FF1,IE8,O8,S3'
    },
    {
      name: ':last-child',
      desc: 'Same as :nth-last-child(1). Represents an element that is the last child of some other element.',
      browsers: 'E,C,FF1,IE9,O9.5,S3.1'
    },
    {
      name: ':last-of-type',
      desc:
        'Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
    },
    {
      name: ':left',
      desc:
        'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
      name: ':link',
      desc: 'Applies to links that have not yet been visited.'
    },
    {
      name: ':matches()',
      desc: 'Takes a selector list as its argument. It represents an element that is represented by its argument.',
      browsers: 'S9'
    },
    {
      name: ':-moz-any()',
      desc: 'Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().',
      browsers: 'FF4'
    },
    {
      name: ':-moz-any-link',
      desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.',
      browsers: 'FF1'
    },
    {
      name: ':-moz-broken',
      desc: 'Non-standard. Matches elements representing broken images.',
      browsers: 'FF3'
    },
    {
      name: ':-moz-drag-over',
      desc: 'Non-standard. Matches elements when a drag-over event applies to it.',
      browsers: 'FF1'
    },
    {
      name: ':-moz-first-node',
      desc: 'Non-standard. Represents an element that is the first child node of some other element.',
      browsers: 'FF1'
    },
    {
      name: ':-moz-focusring',
      desc: 'Non-standard. Matches an element that has focus and focus ring drawing is enabled in the browser.',
      browsers: 'FF4'
    },
    {
      name: ':-moz-full-screen',
      desc: 'Matches any element that has its fullscreen flag set. Standardized as :fullscreen.',
      browsers: 'FF9'
    },
    {
      name: ':-moz-last-node',
      desc: 'Non-standard. Represents an element that is the last child node of some other element.',
      browsers: 'FF1'
    },
    {
      name: ':-moz-loading',
      desc: 'Non-standard. Matches elements, such as images, that haven’t started loading yet.',
      browsers: 'FF3'
    },
    {
      name: ':-moz-only-whitespace',
      desc:
        'The same as :empty, except that it additionally matches elements that only contain code points affected by whitespace processing. Standardized as :blank.',
      browsers: 'FF1.5'
    },
    {
      name: ':-moz-placeholder',
      desc: 'Deprecated. Represents placeholder text in an input field. Use ::-moz-placeholder for Firefox 19+.',
      browsers: 'FF4'
    },
    {
      name: ':-moz-submit-invalid',
      desc: 'Non-standard. Represents any submit button when the contents of the associated form are not valid.',
      browsers: 'FF4'
    },
    {
      name: ':-moz-suppressed',
      desc: 'Non-standard. Matches elements representing images that have been blocked from loading.',
      browsers: 'FF3'
    },
    {
      name: ':-moz-ui-invalid',
      desc: "Non-standard. Represents any validated form element whose value isn't valid ",
      browsers: 'FF4'
    },
    {
      name: ':-moz-ui-valid',
      desc: 'Non-standard. Represents any validated form element whose value is valid ',
      browsers: 'FF4'
    },
    {
      name: ':-moz-user-disabled',
      desc: 'Non-standard. Matches elements representing images that have been disabled due to the user’s preferences.',
      browsers: 'FF3'
    },
    {
      name: ':-moz-window-inactive',
      desc: 'Non-standard. Matches elements in an inactive window.',
      browsers: 'FF4'
    },
    {
      name: ':-ms-fullscreen',
      desc: 'Matches any element that has its fullscreen flag set.',
      browsers: 'IE11'
    },
    {
      name: ':-ms-input-placeholder',
      desc:
        'Represents placeholder text in an input field. Note: for Edge use the pseudo-element ::-ms-input-placeholder. Standardized as ::placeholder.',
      browsers: 'IE10'
    },
    {
      name: ':-ms-keyboard-active',
      desc: 'Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar.',
      browsers: 'IE10'
    },
    {
      name: ':-ms-lang()',
      desc: 'Represents an element that is in the language specified. Accepts a comma separated list of language tokens.',
      browsers: 'E,IE10'
    },
    {
      name: ':no-button',
      desc: 'Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.',
      browsers: 'C,S5'
    },
    {
      name: ':not()',
      desc:
        'The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.',
      browsers: 'E,C,FF1,IE9,O9.5,S2'
    },
    {
      name: ':nth-child()',
      desc:
        'Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
    },
    {
      name: ':nth-last-child()',
      desc:
        'Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
    },
    {
      name: ':nth-last-of-type()',
      desc:
        'Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
    },
    {
      name: ':nth-of-type()',
      desc:
        'Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
    },
    {
      name: ':only-child',
      desc:
        'Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.',
      browsers: 'E,C,FF1.5,IE9,O9.5,S3.1'
    },
    {
      name: ':only-of-type',
      desc:
        'Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.',
      browsers: 'E,C,FF3.5,IE9,O9.5,S3.2'
    },
    {
      name: ':optional',
      desc:
        'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.',
      browsers: 'E,C,FF4,IE10,O10,S5'
    },
    {
      name: ':out-of-range',
      desc:
        'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.',
      browsers: 'E13,C,FF10,O9.6,S5.1'
    },
    {
      name: ':past',
      desc: 'Represents any element that is defined to occur entirely prior to a :current element.',
      browsers: 'C,O16,S6'
    },
    {
      name: ':read-only',
      desc:
        'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.',
      browsers: 'E13,C,FF10,O9,S4'
    },
    {
      name: ':read-write',
      desc:
        'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.',
      browsers: 'E13,C,FF10,O9,S4'
    },
    {
      name: ':required',
      desc:
        'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.',
      browsers: 'E,C,FF4,IE10,O10,S5'
    },
    {
      name: ':right',
      desc:
        'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
      name: ':root',
      desc: 'Represents an element that is the root of the document. In HTML 4, this is always the HTML element.',
      browsers: 'E,C,FF1,IE9,O9.5,S1'
    },
    {
      name: ':scope',
      desc: 'Represents any element that is in the contextual reference element set.',
      browsers: 'FF32,S6'
    },
    {
      name: ':single-button',
      desc:
        'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.',
      browsers: 'C,S5'
    },
    {
      name: ':start',
      desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.',
      browsers: 'C,S5'
    },
    {
      name: ':target',
      desc:
        "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier).",
      browsers: 'E,C,FF1,IE9,O9.5,S1'
    },
    {
      name: ':valid',
      desc:
        'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.',
      browsers: 'E,C,FF4,IE10,O10,S5'
    },
    {
      name: ':vertical',
      desc: 'Non-standard. Applies to any scrollbar pieces that have a vertical orientation.',
      browsers: 'C,S5'
    },
    {
      name: ':visited',
      desc: 'Applies once the link has been visited by the user.'
    },
    {
      name: ':-webkit-any()',
      desc: 'Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().',
      browsers: 'C,S5'
    },
    {
      name: ':-webkit-full-screen',
      desc: 'Matches any element that has its fullscreen flag set. Standardized as :fullscreen.',
      browsers: 'C,S6'
    },
    {
      name: ':window-inactive',
      desc:
        'Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active.',
      browsers: 'C,S3'
    }
  ],
  pseudoelements: [
    {
      name: '::after',
      desc: 'Represents a styleable child pseudo-element immediately after the originating element’s actual content.',
      browsers: 'E,C,FF1.5,IE9,O9,S4'
    },
    {
      name: '::backdrop',
      desc:
        'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).',
      browsers: 'E'
    },
    {
      name: '::before',
      desc: 'Represents a styleable child pseudo-element immediately before the originating element’s actual content.',
      browsers: 'E,C,FF1.5,IE9,O9,S4'
    },
    {
      name: '::content',
      desc: 'Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility.',
      browsers: 'C35,O22'
    },
    {
      name: '::cue',
      browsers: 'C,O16,S6'
    },
    {
      name: '::cue()',
      browsers: 'C,O16,S6'
    },
    {
      name: '::cue-region',
      browsers: 'C,O16,S6'
    },
    {
      name: '::cue-region()',
      browsers: 'C,O16,S6'
    },
    {
      name: '::first-letter',
      desc:
        'Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.',
      browsers: 'E,C,FF1.5,IE9,O7,S1'
    },
    {
      name: '::first-line',
      desc: 'Describes the contents of the first formatted line of its originating element.',
      browsers: 'E,C,FF1.5,IE9,O7,S1'
    },
    {
      name: '::-moz-focus-inner',
      browsers: 'FF4'
    },
    {
      name: '::-moz-focus-outer',
      browsers: 'FF4'
    },
    {
      name: '::-moz-list-bullet',
      desc: 'Used to style the bullet of a list element. Similar to the standardized ::marker.',
      browsers: 'FF1'
    },
    {
      name: '::-moz-list-number',
      desc: 'Used to style the numbers of a list element. Similar to the standardized ::marker.',
      browsers: 'FF1'
    },
    {
      name: '::-moz-placeholder',
      desc: 'Represents placeholder text in an input field',
      browsers: 'FF19'
    },
    {
      name: '::-moz-progress-bar',
      desc: 'Represents the bar portion of a progress bar.',
      browsers: 'FF9'
    },
    {
      name: '::-moz-selection',
      desc: 'Represents the portion of a document that has been highlighted by the user.',
      browsers: 'FF1'
    },
    {
      name: '::-ms-backdrop',
      desc:
        'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).',
      browsers: 'IE11'
    },
    {
      name: '::-ms-browse',
      desc: 'Represents the browse button of an input type=file control.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-check',
      desc: 'Represents the check of a checkbox or radio button input control.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-clear',
      desc: 'Represents the clear button of a text input control',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-expand',
      desc: 'Represents the drop-down button of a select control.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-fill',
      desc: 'Represents the bar portion of a progress bar.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-fill-lower',
      desc:
        'Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-fill-upper',
      desc:
        "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb.",
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-reveal',
      desc: 'Represents the password reveal button of an input type=password control.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-thumb',
      desc: 'Represents the portion of range input control (also known as a slider control) that the user drags.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-ticks-after',
      desc:
        "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb.",
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-ticks-before',
      desc:
        'Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-tooltip',
      desc: 'Represents the tooltip of a slider (input type=range).',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-track',
      desc: 'Represents the track of a slider.',
      browsers: 'E,IE10'
    },
    {
      name: '::-ms-value',
      desc: 'Represents the content of a text or password input control, or a select control.',
      browsers: 'E,IE10'
    },
    {
      name: '::selection',
      desc: 'Represents the portion of a document that has been highlighted by the user.',
      browsers: 'E,C,IE9,O9.5,S1.1'
    },
    {
      name: '::shadow',
      desc: 'Matches the shadow root if an element has a shadow tree.',
      browsers: 'C35,O22'
    },
    {
      name: '::-webkit-file-upload-button',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-inner-spin-button',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-input-placeholder',
      browsers: 'C,S4'
    },
    {
      name: '::-webkit-keygen-select',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-meter-bar',
      browsers: 'E13,C,O15,S6'
    },
    {
      name: '::-webkit-meter-even-less-good-value',
      browsers: 'E13,C,O15,S6'
    },
    {
      name: '::-webkit-meter-optimum-value',
      browsers: 'E13,C,O15,S6'
    },
    {
      name: '::-webkit-meter-suboptimal-value',
      browsers: 'E13,C,O15,S6'
    },
    {
      name: '::-webkit-outer-spin-button',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-progress-bar',
      browsers: 'C,S3'
    },
    {
      name: '::-webkit-progress-inner-element',
      browsers: 'C,S3'
    },
    {
      name: '::-webkit-progress-value',
      browsers: 'C,S3'
    },
    {
      name: '::-webkit-resizer',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar-button',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar-corner',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar-thumb',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar-track',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-scrollbar-track-piece',
      browsers: 'C,S5'
    },
    {
      name: '::-webkit-search-cancel-button',
      browsers: 'C,S4'
    },
    {
      name: '::-webkit-search-decoration',
      browsers: 'C,S4'
    },
    {
      name: '::-webkit-search-results-button',
      browsers: 'C,S4'
    },
    {
      name: '::-webkit-search-results-decoration',
      browsers: 'C,S4'
    },
    {
      name: '::-webkit-slider-runnable-track',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-slider-thumb',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-textfield-decoration-container',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble-arrow',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble-arrow-clipper',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble-heading',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble-message',
      browsers: 'C,O,S6'
    },
    {
      name: '::-webkit-validation-bubble-text-block',
      browsers: 'C,O,S6'
    }
  ]
};

export const Pseudo = [
  {
    name: ':active',
    body: ':active',
    desc:
      'Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.'
  },
  {
    name: ':any-link',
    body: ':any-link',
    desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.',
    browsers: 'S9'
  },
  {
    name: ':checked',
    body: ':checked',
    desc:
      "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies.",
    browsers: 'E,C,FF1,IE9,O9,S3.13'
  },
  {
    name: ':corner-present',
    body: ':corner-present',
    desc: 'Non-standard. Indicates whether or not a scrollbar corner is present.',
    browsers: 'C,S5'
  },
  {
    name: ':decrement',
    body: ':decrement',
    desc:
      'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.',
    browsers: 'C,S5'
  },
  {
    name: ':default',
    body: ':default',
    desc:
      'Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.',
    browsers: 'C,FF3,O10,S5'
  },
  {
    name: ':disabled',
    body: ':disabled',
    desc: 'Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.',
    browsers: 'E,C,FF1.5,IE9,O9,S3.1'
  },
  {
    name: ':double-button',
    body: ':double-button',
    desc:
      'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.',
    browsers: 'C,S5'
  },
  {
    name: ':empty',
    body: ':empty',
    desc: 'Represents an element that has no children at all.',
    browsers: 'E,C,FF1.5,IE9,O9,S3.1'
  },
  {
    name: ':enabled',
    body: ':enabled',
    desc: 'Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.',
    browsers: 'E,C,FF1.5,IE9,O9,S3.1'
  },
  {
    name: ':end',
    body: ':end',
    desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.',
    browsers: 'C,S5'
  },
  {
    name: ':first',
    body: ':first',
    desc:
      'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
  },
  {
    name: ':first-child',
    body: ':first-child',
    desc: 'Same as :nth-child(1). Represents an element that is the first child of some other element.',
    browsers: 'E,C,FF3,IE7,O9.5,S3.1'
  },
  {
    name: ':first-of-type',
    body: ':first-of-type',
    desc:
      'Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.2'
  },
  {
    name: ':focus',
    body: ':focus',
    desc: 'Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).'
  },
  {
    name: ':fullscreen',
    body: ':fullscreen',
    desc: 'Matches any element that has its fullscreen flag set.',
    browsers: 'E'
  },
  {
    name: ':future',
    body: ':future',
    desc: 'Represents any element that is defined to occur entirely after a :current element.',
    browsers: 'C,O16,S6'
  },
  {
    name: ':horizontal',
    body: ':horizontal',
    desc: 'Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.',
    browsers: 'C,S5'
  },
  {
    name: ':host',
    body: ':host',
    desc: 'When evaluated in the context of a shadow tree, matches the shadow tree’s host element.',
    browsers: 'C35,O22'
  },
  {
    name: ':host()',
    body: ':host($1)',
    desc:
      'When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.',
    browsers: 'C35,O22'
  },
  {
    name: ':host-context()',
    body: ':host-context($1)',
    desc: 'Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.',
    browsers: 'C35,O22'
  },
  {
    name: ':hover',
    body: ':hover',
    desc:
      'Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element.'
  },
  {
    name: ':increment',
    body: ':increment',
    desc:
      'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.',
    browsers: 'C,S5'
  },
  {
    name: ':indeterminate',
    body: ':indeterminate',
    desc: 'Applies to UI elements whose value is in an indeterminate state.',
    browsers: 'E,C,FF3.6,IE9,O10.6,S3'
  },
  {
    name: ':in-range',
    body: ':in-range',
    desc:
      'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.',
    browsers: 'E13,C,FF10,O9.6,S5.1'
  },
  {
    name: ':invalid',
    body: ':invalid',
    desc:
      'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.',
    browsers: 'E,C,FF4,IE10,O10,S5'
  },
  {
    name: ':lang()',
    body: ':lang($1)',
    desc: 'Represents an element that is in language specified.',
    browsers: 'E,C,FF1,IE8,O8,S3'
  },
  {
    name: ':last-child',
    body: ':last-child',
    desc: 'Same as :nth-last-child(1). Represents an element that is the last child of some other element.',
    browsers: 'E,C,FF1,IE9,O9.5,S3.1'
  },
  {
    name: ':last-of-type',
    body: ':last-of-type',
    desc:
      'Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
  },
  {
    name: ':left',
    body: ':left',
    desc:
      'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
  },
  {
    name: ':link',
    body: ':link',
    desc: 'Applies to links that have not yet been visited.'
  },
  {
    name: ':no-button',
    body: ':no-button',
    desc: 'Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.',
    browsers: 'C,S5'
  },
  {
    name: ':not()',
    body: ':not($1)',
    desc:
      'The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.',
    browsers: 'E,C,FF1,IE9,O9.5,S2'
  },
  {
    name: ':nth-child()',
    body: ':nth-child($1)',
    desc:
      'Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
  },
  {
    name: ':nth-last-child()',
    body: ':nth-last-child($1)',
    desc:
      'Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
  },
  {
    name: ':nth-last-of-type()',
    body: ':nth-last-of-type($1)',
    desc:
      'Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
  },
  {
    name: ':nth-of-type()',
    body: ':nth-of-type($1)',
    desc:
      'Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.1'
  },
  {
    name: ':only-child',
    body: ':only-child',
    desc:
      'Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.',
    browsers: 'E,C,FF1.5,IE9,O9.5,S3.1'
  },
  {
    name: ':only-of-type',
    body: ':only-of-type',
    desc:
      'Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.',
    browsers: 'E,C,FF3.5,IE9,O9.5,S3.2'
  },
  {
    name: ':optional',
    body: ':optional',
    desc:
      'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.',
    browsers: 'E,C,FF4,IE10,O10,S5'
  },
  {
    name: ':out-of-range',
    body: ':out-of-range',
    desc:
      'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.',
    browsers: 'E13,C,FF10,O9.6,S5.1'
  },
  {
    name: ':past',
    body: ':past',
    desc: 'Represents any element that is defined to occur entirely prior to a :current element.',
    browsers: 'C,O16,S6'
  },
  {
    name: ':read-only',
    body: ':read-only',
    desc:
      'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.',
    browsers: 'E13,C,FF10,O9,S4'
  },
  {
    name: ':read-write',
    body: ':read-write',
    desc:
      'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.',
    browsers: 'E13,C,FF10,O9,S4'
  },
  {
    name: ':required',
    body: ':required',
    desc:
      'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.',
    browsers: 'E,C,FF4,IE10,O10,S5'
  },
  {
    name: ':right',
    body: ':right',
    desc:
      'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
  },
  {
    name: ':root',
    body: ':root',
    desc: 'Represents an element that is the root of the document. In HTML 4, this is always the HTML element.',
    browsers: 'E,C,FF1,IE9,O9.5,S1'
  },
  {
    name: ':scope',
    body: ':scope',
    desc: 'Represents any element that is in the contextual reference element set.',
    browsers: 'FF32,S6'
  },
  {
    name: ':single-button',
    body: ':single-button',
    desc:
      'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.',
    browsers: 'C,S5'
  },
  {
    name: ':start',
    body: ':start',
    desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.',
    browsers: 'C,S5'
  },
  {
    name: ':target',
    body: ':target',
    desc:
      "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier).",
    browsers: 'E,C,FF1,IE9,O9.5,S1'
  },
  {
    name: ':valid',
    body: ':valid',
    desc:
      'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.',
    browsers: 'E,C,FF4,IE10,O10,S5'
  },
  {
    name: ':vertical',
    body: ':vertical',
    desc: 'Non-standard. Applies to any scrollbar pieces that have a vertical orientation.',
    browsers: 'C,S5'
  },
  {
    name: ':visited',
    body: ':visited',
    desc: 'Applies once the link has been visited by the user.'
  },
  {
    name: '::after',
    body: '::after',
    desc: 'Represents a styleable child pseudo-element immediately after the originating element’s actual content.',
    browsers: 'E,C,FF1.5,IE9,O9,S4'
  },
  {
    name: '::backdrop',
    body: '::backdrop',
    desc:
      'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).',
    browsers: 'E'
  },
  {
    name: '::before',
    body: '::before',
    desc: 'Represents a styleable child pseudo-element immediately before the originating element’s actual content.',
    browsers: 'E,C,FF1.5,IE9,O9,S4'
  },
  {
    name: '::selection',
    body: '::selection',
    desc: 'Represents the portion of a document that has been highlighted by the user.',
    browsers: 'E,C,IE9,O9.5,S1.1'
  },
  {
    name: '::shadow',
    body: '::shadow',
    desc: 'Matches the shadow root if an element has a shadow tree.',
    browsers: 'C35,O22'
  },
  {
    name: '::first-letter',
    body: '::first-letter',
    desc:
      'Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.',
    browsers: 'E,C,FF1.5,IE9,O7,S1'
  },
  {
    name: '::first-line',
    body: '::first-line',
    desc: 'Describes the contents of the first formatted line of its originating element.',
    browsers: 'E,C,FF1.5,IE9,O7,S1'
  }
];

export const sassPseudo = (andStared: string[]) => {
  if (!andStared) {
    andStared = [];
  }
  const pseudo: CompletionItem[] = Pseudo.map(item => {
    const completionItem = new CompletionItem(`${andStared.indexOf(item.name.replace(/:*\(*\)*/g, '')) !== -1 ? '*' : ''}${item.name}`);
    completionItem.insertText = new SnippetString(`${item.body}\n\t$0`);
    completionItem.detail = `${item.desc}\n ${item.browsers ? 'Browser Support: ' + item.browsers : ''}`;
    completionItem.kind = CompletionItemKind.Class;

    return completionItem;
  });
  return pseudo;
};