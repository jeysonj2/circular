import type { Filter, Filters } from './filters.types.js';
import type LibraryBaseElement from '../../internal/library-base-element.js';
import type OIcon from '../icon/icon.js';

export function appendIconToElement(
  element: LibraryBaseElement,
  icon: string,
  extraProps: { [key: string]: unknown } = {}
) {
  const iconElement = Object.assign(document.createElement('o-icon'), {
    ...extraProps,
    name: icon
  });
  iconElement.setAttribute('icon', icon);
  element.appendChild(iconElement);

  return iconElement;
}

export function addPrefixSuffixToElement(
  el: LibraryBaseElement,
  filter: Filter,
  slots: string[] = ['prefix', 'suffix']
) {
  slots.forEach((slot: string) => {
    if (!filter[slot]) {
      return;
    }

    const content = filter[slot] as string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const elType = filter[`${slot}Type`] || 'icon';
    const elTag = elType === 'icon' ? 'o-icon' : 'span';
    const iconEl = Object.assign(document.createElement(elTag), { slot });

    if (elType === 'icon') {
      (iconEl as OIcon).name = content;
    } else {
      iconEl.textContent = content;
    }

    el.appendChild(iconEl);
  });
}

export function filterValueAdapter(value: unknown, filterConfig: Partial<Filter>) {
  if (filterConfig.type === 'select' || filterConfig.type === 'input') {
    const isEmpty =
      value === undefined ||
      value === null ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'string' && value.trim() === '');

    return isEmpty ? undefined : value;
  }

  return value;
}

export function convertFiltersToObject(filters: string | undefined | null) {
  try {
    return JSON.parse(filters ?? '{}') as Filters;
  } catch (error) {
    console.warn('Filters configuration:', filters);
    console.error('Error parsing filters configuration', error);
    return undefined;
  }
}

export function cancelEvent(event: CustomEvent) {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

export default {
  appendIconToElement,
  addPrefixSuffixToElement,
  filterValueAdapter,
  convertFiltersToObject,
  cancelEvent
};
