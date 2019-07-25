import { htmlTags, voidHtmlTags } from '../autocomplete/schemas/autocomplete.html';

export function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Check whether text is class, id or placeholder
 */
export function isVar(text: string): boolean {
  return /^ *?.*:/.test(text);
}
/**
 * Check whether text is class, id or placeholder
 */
export function isStar(text: string): boolean {
  return /^ *?\*/.test(text);
}
/**
 * Check whether text is class, id or placeholder
 */
export function isClassOrId(text: string): boolean {
  return /^ *?#/.test(text) || /^ *\./.test(text) || /^ *%/.test(text);
}
/**
 * Check whether text is a property
 */
export function isProperty(text: string): boolean {
  return /^ *.*:/.test(text);
}
/**
 * Check whether text is a property
 */
export function isInclude(text: string): boolean {
  return /^ *@include/.test(text);
}
/**
 * Check whether text is a property
 */
export function isKeyframes(text: string): boolean {
  return /^ *@keyframes/.test(text);
}
/**
 * Check whether text is a mixin
 */
export function isMixin(text: string): boolean {
  return /^ *@mixin/.test(text);
}
/**
 * Check whether text starts with &
 */
export function isAnd(text: string): boolean {
  return /^ *&/.test(text);
}
/**
 * Check whether text is at rule
 */
export function isAtRule(text: string): boolean {
  return /^ *@/.test(text);
}
/**
 * checks if text last char is a number
 * @param {String} text
 * @return {CompletionItem}
 */
export function isNumber(text: string): boolean {
  const reg = /[0-9]$/;
  return reg.test(text) && !text.includes('#');
}
/**
 * Check whether text starts with an html tag.
 */
export function isHtmlTag(text: string) {
  let isTag = false;
  for (let i = 0; i < htmlTags.length; i++) {
    const tag = htmlTags[i];
    if (new RegExp(`^ *${tag}$|^ *${tag}\\[.*\\].*$`).test(text)) {
      isTag = true;
      break;
    }
  }
  return isTag;
}
/**
 * Check whether text starts with a self closing html tag.
 */
export function isVoidHtmlTag(text: string) {
  let isTag = false;
  for (let i = 0; i < voidHtmlTags.length; i++) {
    const tag = voidHtmlTags[i];
    if (new RegExp(`^ *${tag}$|^ *${tag}\\[.*\\].*$`).test(text)) {
      isTag = true;
      break;
    }
  }
  return isTag;
}
/**
 * Check whether text starts with ::.
 */
export function isPseudo(text: string) {
  return /^ *::/.test(text);
}
