import "./breadcrumb.scss";

export default function Breadcrumb() {
  return (
    <div class="slds-box breadcrumb">
      <nav role="navigation" aria-label="Breadcrumbs">
        <ol class="slds-breadcrumb slds-list_horizontal slds-wrap">
          <li class="slds-breadcrumb__item slds-breadcrumb__item--active">
            <a href="#">Status 1</a>
          </li>
          <li class="slds-breadcrumb__item">
            <a href="#">New</a>
          </li>
          <li class="slds-breadcrumb__item">
            <a href="#">Working</a>
          </li>
          <li class="slds-breadcrumb__item">
            <a href="#">Nurturing</a>
          </li>
          <li class="slds-breadcrumb__item">
            <a href="#">Converted</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
