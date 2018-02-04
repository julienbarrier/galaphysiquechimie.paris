## Usage

| Type       | Purpose                                                                            |
|-----------------|------------------------------------------------------------------------------------|
| Text Input | When the input anticipated by the user is a single line of text as opposed to a paragraph.  |
| Text Area   | When you anticipate the user to input more than one sentence.   |

## General guidelines

### Labels

Effective form labeling helps users understand what information to enter into a Text Input. Using a placeholder text as a label is often applied as a space-saving method. However, this is not recommended because it hides context and presents accessibility issues.

**Accessibility best practices for labels:**

* Labels must be visible when an input gets focus.
* Labels must be announced to the screen reader on focus.
* Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.
* Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized).

### Placeholder text

Placeholder text provides hints or examples of what to enter. Placeholder text should disappear after the user has entered data into the Text Input. Use sentence-style capitalization, and in most cases, write the text as full sentences with punctuation.

---
***
> 
![Placeholder text](images/text-input-usage-1.png)

### Default values

Where possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. When the software can't determine the value that belongs in an input, use type-ahead to make suggestions. Use sentence-case for default values, detected values, and auto-completion text.

### Validation and errors

Real time validation helps to streamline the process and keep data clean when the user is filling out forms. For full guidelines, refer to the [Forms](/components/form/usage) usage page.

---
***
> 
![validation on text field](images/text-input-usage-2.png)
_Text Input validation_
