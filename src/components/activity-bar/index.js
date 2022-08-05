import Datepic from "../activity-date";

export default function ActivityBar() {
  return (
    <div class="slds-tabs_default">
      <ul class="slds-tabs_default__nav" role="tablist">
        <li
          class="slds-tabs_default__item"
          title="Item One"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="0"
            aria-selected="true"
            aria-controls="tab-default-1"
            id="tab-default-1__item"
          >
            Log Calls
          </a>
        </li>
        <li
          class="slds-tabs_default__item slds-is-active"
          title="Item Two"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-2"
            id="tab-default-2__item"
          >
            Tasks
          </a>
        </li>
        <li
          class="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Event
          </a>
        </li>
        <li
          class="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Make Note
          </a>
        </li>
        <li
          class="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Add Attachment
          </a>
        </li>
        <li
          class="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Activity Set
          </a>
        </li>
        <li
          class="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            class="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Custom Field
          </a>
        </li>
      </ul>
      <div
        id="tab-default-1"
        class="slds-tabs_default__content slds-show"
        role="tabpanel"
        aria-labelledby="tab-default-1__item"
      >
        New Task
        <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address">
          <div class="slds-form-element__row">
            <div class="slds-size_3-of-6">
              <div class="slds-form-element">
                <label
                  class="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Task Type
                  <abbr class="slds-required" title="required">
                    {" "}
                    *{" "}
                  </abbr>
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    class="slds-input"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="slds-size_3-of-6">
              <div class="slds-form-element">
                <label
                  class="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Subject
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    class="slds-input"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="slds-form-element__row">
            <div class="slds-size_3-of-6">
              <div class="slds-form-element">
                <label
                  class="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Assigend to
                  <abbr class="slds-required" title="required">
                    {" "}
                    *{" "}
                  </abbr>
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    class="slds-input"
                    value="Burlington"
                  />
                </div>
              </div>
            </div>

            <div class="slds-form-element__control">
              <div class="slds-form-element__row">
                <div class="slds-size_1-of-1">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-id-01"
                    >
                      Billing Street
                    </label>
                    <div class="slds-form-element__control">
                      <textarea
                        id="form-element-id-01"
                        required=""
                        placeholder="Placeholder text…"
                        class="slds-textarea"
                      >
                        525 S. Lexington Ave
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Datepic />
        </fieldset>
        <div
          id="tab-default-2"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-default-3"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-3__item"
        >
          Item Three Content
        </div>
      </div>
    </div>
  );
}
