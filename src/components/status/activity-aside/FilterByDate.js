import { MdArrowDropDown } from "react-icons/md";

export default function FilterByDate() {
  return (
    <div class="slds-form__row filter-by-date">
      <div class="slds-form__item" role="listitem">
        <div class="slds-form-element slds-form-element_stacked slds-is-editing">
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                <div
                  class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                  role="none"
                >
                  <input
                    type="text"
                    class="slds-input slds-combobox__input"
                    id="stacked-combobox-id-02"
                    aria-controls="stacked-listbox-id-02"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    autoComplete="off"
                    role="combobox"
                    placeholder="Filter by date"
                  />
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <MdArrowDropDown />
                  </span>
                </div>
                <div
                  id="stacked-listbox-id-02"
                  class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid"
                  role="listbox"
                >
                  <ul
                    class="slds-listbox slds-listbox_vertical"
                    role="presentation"
                  ></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
