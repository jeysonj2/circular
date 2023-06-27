import { addPrefixSuffixToElement, appendIconToElement } from './filter.utilities';
import { DEFAULT_MANDATORY_PROPS, FilterAbstractRender } from './filter.abstract.render';
import { DEFAULT_PROPS_TO_IGNORE, type Filter, type FilterType, type SelectFilter } from '../filters.types';
import { html } from 'lit';
import type OFilters from '../filters';
import type OSelect from '../../select/select';

export class SelectFilterRender extends FilterAbstractRender {
  type: FilterType = 'select';

  render(filtersComponent: OFilters, filter: SelectFilter) {
    const el = filtersComponent.createFilterElement('o-select', filter) as OSelect;

    el.clearable = filter.clearable ?? true;
    if (el.clearable && filter.clearIconName) {
      appendIconToElement(el, filter.clearIconName, { slot: 'clear-icon' });
    }

    // Only one option visible by default
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    el.maxOptionsVisible = filter.maxOptionsVisible ?? 1;

    if (filter.expandIconName) {
      appendIconToElement(el, filter.expandIconName, { slot: 'expand-icon' });
    }

    addPrefixSuffixToElement(el, filter, ['prefix']);

    filter.options?.forEach(option => {
      const optionEl = Object.assign(
        document.createElement('o-option'),
        this.removeIgnoredKeysFromFilterConfig(
          ['prefix', 'suffix', 'prefixType', 'suffixType', 'label'],
          option as Filter
        )
      );

      optionEl.innerHTML = option.label ?? '';

      addPrefixSuffixToElement(optionEl, option as Filter);

      el.appendChild(optionEl);
    });

    return html`${el}`;
  }

  getValidPropsFromFilterConfig(filter: SelectFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE, 'prefix', 'prefixType', 'expandIconName', 'clearIconName'];
    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }

  isPropMandatory(prop: string) {
    // name is mandatory for all filters
    return ![...DEFAULT_MANDATORY_PROPS, 'options'].includes(prop);
  }
}
