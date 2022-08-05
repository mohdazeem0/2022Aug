import { useState } from "react";
import Task from "./Task";

export default function ActivityTab() {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div class="slds-tabs_default">
      <ul class="slds-tabs_default__nav" role="tablist">
        <li
          class={`slds-tabs_default__item ${
            activeTab === 1 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(1)}
          >
            Log Calls
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 2 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(2)}
          >
            Task
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 3 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(3)}
          >
            Event
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 4 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(4)}
          >
            Make Notes
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 5 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(5)}
          >
            Add Atachment
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 6 && "slds-is-active"
          }`}
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
            onClick={() => setActiveTab(6)}
          >
            Activity Set
          </a>
        </li>
        <li
          class={`slds-tabs_default__item ${
            activeTab === 7 && "slds-is-active"
          }`}
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
            Coustom Field
          </a>
        </li>
      </ul>
      <div
        id="tab-default-1"
        class={`slds-tabs_default__content ${
          activeTab === 1 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-1__item"
      >
        Log Calls
      </div>
      <div
        id="tab-default-2"
        class={`slds-tabs_default__content ${
          activeTab === 2 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-2__item"
      >
        <Task />
      </div>
      <div
        id="tab-default-3"
        class={`slds-tabs_default__content ${
          activeTab === 3 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-3__item"
      >
        Event
      </div>
      <div
        id="tab-default-4"
        class={`slds-tabs_default__content ${
          activeTab === 4 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-4__item"
      >
        Make Notes
      </div>
      <div
        id="tab-default-5"
        class={`slds-tabs_default__content ${
          activeTab === 5 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-5__item"
      >
        Add Atachment
      </div>
      <div
        id="tab-default-6"
        class={`slds-tabs_default__content ${
          activeTab === 6 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-6__item"
      >
        Activity Set
      </div>
      <div
        id="tab-default-7"
        class={`slds-tabs_default__content ${
          activeTab === 7 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-7__item"
      >
        Coustom Field
      </div>
    </div>
  );
}
