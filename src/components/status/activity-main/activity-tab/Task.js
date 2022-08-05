import { MdArrowDropDown, MdDateRange } from "react-icons/md";

export default function Task() {
  return (
    <>
      <div class="slds-box">
        <div class="slds-form" role="list">
          <div class="slds-grid slds-gutters slds-wrap">
            <div class="slds-col">
              <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_stacked slds-is-editing">
                  <label
                    class="slds-form-element__label"
                    for="stacked-combobox-id-02"
                    id="combobox-label-id-19"
                  >
                    Task Type
                    <abbr class="slds-required" title="required">
                      *{" "}
                    </abbr>
                  </label>
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
              <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_stacked slds-is-editing">
                  <label
                    class="slds-form-element__label"
                    for="stacked-combobox-id-02"
                    id="combobox-label-id-19"
                  >
                    Assign to
                    <abbr class="slds-required" title="required">
                      *{" "}
                    </abbr>
                  </label>
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
              <div class="slds-form__item" role="listitem">
                <fieldset class="slds-form-element slds-form-element_compound slds-is-editing slds-form-element_stacked">
                  <div class="slds-form-element__control">
                    <div class="slds-form-element__row">
                      <div class="slds-size_1-of-2">
                        <div class="slds-form-element">
                          <label
                            class="slds-form-element__label"
                            for="stacked-location-longitude-01"
                          >
                            Start Date
                          </label>
                          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                            <input
                              type="text"
                              id="stacked-form-element-id-03"
                              class="slds-input"
                              value="13 Nov 2018"
                            />
                            <button
                              class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
                              title="Select a date"
                            >
                              <MdDateRange />
                              <span class="slds-assistive-text">
                                Select a date
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="slds-size_1-of-2">
                        <div class="slds-form-element">
                          <label
                            class="slds-form-element__label"
                            for="end-date"
                          >
                            End Date
                          </label>
                          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                            <input
                              type="text"
                              id="end-date"
                              class="slds-input"
                              value="14 Nov 2018"
                            />
                            <button
                              class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
                              title="Select a date"
                            >
                              <MdDateRange />
                              <span class="slds-assistive-text">
                                Select a date
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_stacked slds-is-editing">
                  <label
                    class="slds-form-element__label"
                    for="remind-on"
                    id="combobox-label-id-19"
                  >
                    Remind On
                    <abbr class="slds-required" title="required">
                      *{" "}
                    </abbr>
                  </label>
                  <div class="slds-form-element__control">
                    <div class="slds-combobox_container">
                      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                          <input
                            type="text"
                            class="slds-input slds-combobox__input"
                            id="remind-on"
                            placeholder="13 Nov 2018"
                          />
                          <button
                            class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
                            title="Select a date"
                          >
                            <MdDateRange />
                            <span class="slds-assistive-text">
                              Select a date
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-col">
              <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_stacked slds-is-editing">
                  <label class="slds-form-element__label" for="subject">
                    Subject
                  </label>
                  <div class="slds-form-element__control">
                    <input
                      type="text"
                      id="subject"
                      required=""
                      class="slds-input"
                    />
                  </div>
                </div>
              </div>
              <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_stacked slds-is-editing">
                  <label class="slds-form-element__label" for="subject">
                    Details
                  </label>
                  <div class="slds-form-element__control">
                    <textarea
                      id="stacked-form-element-id-04"
                      required=""
                      placeholder="Placeholder text…"
                      class="slds-textarea"
                      rows={8}
                    >
                      525 S. Lexington Ave
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="slds-form__item button-group">
                <button class="slds-button slds-button_neutral">Cancel</button>
                <button class="slds-button slds-button_outline-brand">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="task-list">
          <h3>Task List</h3>
          <table
            class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped slds-m-top_small"
            aria-label="Example table of Opportunities with striped rows"
          >
            <thead>
              <tr class="slds-line-height_reset">
                <th class="" scope="col">
                  <div class="slds-truncate" title="Opportunity Name">
                    #
                  </div>
                </th>
                <th class="" scope="col">
                  <div class="slds-truncate" title="Account Name">
                    Subject
                  </div>
                </th>
                <th class="" scope="col">
                  <div class="slds-truncate" title="Close Date">
                    Type
                  </div>
                </th>
                <th class="" scope="col">
                  <div class="slds-truncate" title="Stage">
                    Assigned to
                  </div>
                </th>
                <th class="" scope="col">
                  <div class="slds-truncate" title="Confidence">
                    Due Date
                  </div>
                </th>
                <th class="" scope="col">
                  <div class="slds-truncate" title="Amount">
                    Status
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num) => (
                <tr class="slds-hint-parent">
                  <th data-label="Opportunity Name" scope="row">
                    <div class="slds-truncate" title="Cloudhub">
                      {num}
                    </div>
                  </th>
                  <td data-label="Account Name">
                    <div class="slds-truncate" title="Cloudhub">
                      <a href="#" tabindex="-1">
                        Sample
                      </a>
                    </div>
                  </td>
                  <td data-label="Close Date">
                    <div class="slds-truncate" title="4/14/2015">
                      To Do
                    </div>
                  </td>
                  <td data-label="Prospecting">
                    <div class="slds-truncate" title="Prospecting">
                      Ravi Kumar
                    </div>
                  </td>
                  <td data-label="Confidence">
                    <div class="slds-truncate" title="20%">
                      13 Nov 2018
                    </div>
                  </td>
                  <td data-label="Amount">
                    <div class="slds-truncate" title="$25k">
                      Not Started
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
