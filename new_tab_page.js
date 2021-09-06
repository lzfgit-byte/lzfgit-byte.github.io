import{d as decodeString16,a as assert,s as skColorToRgba,I as I18nBehavior,h as hasKeyModifiers,m as mojoTimeDelta,b as mojoString16,W as WindowProxy,E as EventTracker,N as NewTabPageProxy,$ as $$,r as recordOccurence,c as recordLoadDuration,e as recordPerdecage,M as ModuleRegistry,f as assertNotReached,g as strictQuery,B as BackgroundSelectionType,F as FocusOutlineManager,i as recordVoiceAction,j as hexColorToSkColor,P as PromoBrowserCommandProxy,C as CustomizeDialogPage,A as Action}from"./shared.rollup.js";export{$ as $$,B as BackgroundSelectionType,l as ChromeCartProxy,C as CustomizeDialogPage,D as DriveProxy,t as InfoDialogElement,u as Module,v as ModuleDescriptor,w as ModuleHeaderElement,M as ModuleRegistry,N as NewTabPageProxy,P as PromoBrowserCommandProxy,T as TaskModuleHandlerProxy,A as VoiceAction,G as VoiceError,W as WindowProxy,n as chromeCartDescriptor,o as chromeCartV2Descriptor,z as createScrollBorders,d as decodeString16,p as driveDescriptor,q as driveV2Descriptor,b as mojoString16,x as recipeTasksDescriptor,k as recordDuration,c as recordLoadDuration,r as recordOccurence,e as recordPerdecage,y as shoppingTasksDescriptor}from"./shared.rollup.js";import{PolymerElement,html,mixinBehaviors,microTask}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import"chrome://new-tab-page/strings.m.js";import{loadTimeData}from"chrome://resources/js/load_time_data.m.js";import"chrome://resources/mojo/skia/public/mojom/skcolor.mojom-webui.js";import"chrome://resources/mojo/mojo/public/js/mojo_bindings_lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/big_buffer.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/time.mojom-lite.js";import"chrome://resources/mojo/skia/public/mojom/skcolor.mojom-lite.js";import"chrome://resources/mojo/url/mojom/url.mojom-lite.js";import"chrome://new-tab-page/realbox/realbox.mojom-lite.js";import"chrome://resources/js/cr.m.js";import"chrome://resources/mojo/mojo/public/mojom/base/text_direction.mojom-lite.js";import"chrome://resources/cr_components/most_visited/most_visited.mojom-lite.js";import"chrome://new-tab-page/new_tab_page.mojom-lite.js";import"chrome://new-tab-page/modules/cart/chrome_cart.mojom-lite.js";import"chrome://new-tab-page/modules/drive/drive.mojom-lite.js";import"chrome://new-tab-page/modules/task_module/task_module.mojom-lite.js";import"chrome://new-tab-page/promo_browser_command.mojom-lite.js";// Copyright 2020 The Chromium Authors. All rights reserved.
const DOCUMENT_MATCH_TYPE="document";class RealboxIconElement extends PolymerElement{static get is(){return"ntp-realbox-icon"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-icon">:host {
  align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 32px;
}

#imageContainer {
  align-items: center;
    border-radius: 8px;
    display: none;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    width: 32px;
}

:host-context(ntp-realbox-match[has-image]) #imageContainer {
  display: flex;
}

#image {
  max-height: 32px;
    max-width: 32px;
}

#icon {
  -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px;
    background-color: var(--search-box-icon, var(--google-grey-refresh-700));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 16px;
    height: 24px;
    width: 24px;
}

:host-context(ntp-realbox-match[has-image]) #icon {
  display: none;
}

:host([in-searchbox][background-image='google_g.png']) #icon {
  background-size: 12px;
}

:host([in-searchbox][mask-image='search.svg']) #icon {
  -webkit-mask-size: 20px;
}

</style>
<div id="imageContainer" style$="[[imageContainerStyle_]]">
    <img id="image" src$="[[imageSrc_]]">
</div>
<div id="icon" style$="[[iconStyle_]]">
</div>
<!--_html_template_end_-->`}static get properties(){return{backgroundImage:{type:String,computed:`computeBackgroundImage_(match.faviconDataUrl, match)`,reflectToAttribute:true},defaultIcon:{type:String,value:""},maskImage:{type:String,computed:`computeMaskImage_(match)`,reflectToAttribute:true},match:{type:Object},iconStyle_:{type:String,computed:`computeIconStyle_(backgroundImage, maskImage)`},imageContainerStyle_:{type:String,computed:`computeImageContainerStyle_(imageSrc_, match)`},imageSrc_:{type:String,computed:`computeImageSrc_(match.imageDataUrl, match)`}}}computeBackgroundImage_(){if(this.match&&!this.match.isSearchType){if(this.match.faviconDataUrl){return this.match.faviconDataUrl}else if(this.match.type===DOCUMENT_MATCH_TYPE){return this.match.iconUrl}else{return""}}else if(this.defaultIcon==="google_g.png"){return this.defaultIcon}else{return""}}computeMaskImage_(){if(this.match){return this.match.iconUrl}else{return this.defaultIcon}}computeIconStyle_(){if(this.backgroundImage){return`background-image: url(${this.backgroundImage});`+`background-color: transparent;`}else{return`-webkit-mask-image: url(${this.maskImage});`}}computeImageContainerStyle_(){return this.match&&this.match.imageDominantColor&&!this.imageSrc_?`background-color: ${this.match.imageDominantColor}40;`:"background-color: transparent;"}computeImageSrc_(){if(!this.match){return""}if(this.match.imageDataUrl){return this.match.imageDataUrl}else if(this.match.imageUrl&&this.match.imageUrl.startsWith("data:image/")){return this.match.imageUrl}else{return""}}}customElements.define(RealboxIconElement.is,RealboxIconElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const ACMatchClassificationStyle={NONE:0,URL:1<<0,MATCH:1<<1,DIM:1<<2};const SEARCH_CALCULATOR_ANSWER_TYPE="search-calculator-answer";class RealboxMatchElement extends PolymerElement{static get is(){return"ntp-realbox-match"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="ntp-realbox-match">:host {
  align-items: center;
    cursor: default;
    display: flex;
    outline: none;
    padding-bottom: 6px;
    padding-inline-end: 16px;
    padding-inline-start: 12px;
    padding-top: 6px;
}

#container {
  align-items: center;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
    white-space: nowrap;
}

#contents, #description {
  overflow: hidden;
    text-overflow: ellipsis;
}

#separator {
  white-space: pre;
}

:host([is-rich-suggestion]) #container {
  align-items: flex-start;
    flex-direction: column;
}

:host([is-rich-suggestion]) #separator {
  display: none;
}

:host([is-rich-suggestion]) #contents {
  width: 100%;
}

:host([is-rich-suggestion]) #description {
  font-size: .875em;
    width: 100%;
}

.match {
  font-weight: 500;
}

:host([is-rich-suggestion]) #description, .dim {
  color: var(--search-box-results-dim, var(--google-grey-refresh-700));
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)):host([is-rich-suggestion]) #description, :host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) .dim {
  color: var(--search-box-results-dim-selected, var(--google-grey-refresh-700));
}

.url {
  color: var(--search-box-results-url, var(--google-blue-refresh-700));
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) .url {
  color: var(--search-box-results-url-selected, var(--google-blue-refresh-700));
}

#remove {
  --cr-icon-button-active-background-color: rgba(var(--google-grey-900-rgb), .16);
    --cr-icon-button-fill-color: var(--search-box-icon, var(--google-grey-refresh-700));
    --cr-icon-button-hover-background-color: rgba(var(--google-grey-900-rgb), .1);
    --cr-icon-button-icon-size: 16px;
    --cr-icon-button-margin-end: 0;
    --cr-icon-button-margin-start: 0;
    --cr-icon-button-size: 24px;
    margin-inline-end: 1px;
    opacity: 0;
}

:host-context(ntp-realbox-match:hover) #remove {
  opacity: 1;
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) #remove {
  --cr-icon-button-fill-color: var(--search-box-icon-selected, var(--google-grey-refresh-700));
    opacity: 1;
}

</style>
<ntp-realbox-icon id="icon" match="[[match]]"></ntp-realbox-icon>
<div id="container">
  <span id="contents" inner-h-t-m-l="[[contentsHtml_]]"></span>
  <span id="separator" class="dim">[[separatorText_]]</span>
  <span id="description" inner-h-t-m-l="[[descriptionHtml_]]"></span>
</div>
<cr-icon-button id="remove" class="icon-clear" aria-label="[[removeButtonAriaLabel_]]" on-click="onRemoveButtonClick_" on-mousedown="onRemoveButtonMouseDown_" title="[[removeButtonTitle_]]" hidden$="[[!removeButtonIsVisible_]]">
</cr-icon-button>
<!--_html_template_end_-->`}static get properties(){return{ariaLabel:{type:String,computed:`computeAriaLabel_(matchText_, removeButtonIsVisible_)`,reflectToAttribute:true},hasImage:{type:Boolean,computed:`computeHasImage_(match)`,reflectToAttribute:true},isRichSuggestion:{type:Boolean,computed:`computeIsRichSuggestion_(match, hasImage)`,reflectToAttribute:true},match:{type:Object},matchIndex:{type:Number,value:-1},contentsHtml_:{type:String,computed:`computeContentsHtml_(match)`},descriptionHtml_:{type:String,computed:`computeDescriptionHtml_(match)`},matchText_:{type:String,computed:`computeMatchText_(match)`},removeButtonAriaLabel_:{type:String,computed:`computeRemoveButtonAriaLabel_(matchText_)`},removeButtonIsVisible_:{type:Boolean,computed:`computeRemoveButtonIsVisible_(match)`},removeButtonTitle_:{type:String,value:()=>loadTimeData.getString("removeSuggestion")},separatorText_:{type:String,computed:`computeSeparatorText_(match)`}}}ready(){super.ready();this.addEventListener("click",this.onMatchClick_.bind(this));this.addEventListener("focusin",this.onMatchFocusin_.bind(this))}onMatchClick_(e){if(e.button>1){return}this.dispatchEvent(new CustomEvent("match-click",{bubbles:true,composed:true,detail:{index:this.matchIndex,event:e}}));e.preventDefault();e.stopPropagation()}onMatchFocusin_(e){this.dispatchEvent(new CustomEvent("match-focusin",{bubbles:true,composed:true,detail:this.matchIndex}))}onRemoveButtonClick_(e){if(e.button!==0){return}this.dispatchEvent(new CustomEvent("match-remove",{bubbles:true,composed:true,detail:this.matchIndex}));e.preventDefault();e.stopPropagation()}onRemoveButtonMouseDown_(e){e.preventDefault()}computeMatchText_(){if(!this.match){return""}const spanContents=document.createElement("span");spanContents.innerHTML=this.match.answer?decodeString16(this.match.answer.firstLine):decodeString16(this.match.contents);const contents=spanContents.textContent||spanContents.innerText;const spanDescription=document.createElement("span");spanDescription.innerHTML=this.match.answer?decodeString16(this.match.answer.secondLine):decodeString16(this.match.description);const description=spanDescription.textContent||spanDescription.innerText;return this.match.swapContentsAndDescription?description+this.separatorText_+contents:contents+this.separatorText_+description}computeAriaLabel_(){return this.removeButtonIsVisible_?loadTimeData.getStringF("removeSuggestionA11ySuffix",this.matchText_):this.matchText_}computeContentsHtml_(){if(!this.match){return""}const match=this.match;if(match.answer){return decodeString16(match.answer.firstLine)}return match.swapContentsAndDescription?this.renderTextWithClassifications_(decodeString16(match.description),match.descriptionClass).innerHTML:this.renderTextWithClassifications_(decodeString16(match.contents),match.contentsClass).innerHTML}computeDescriptionHtml_(){if(!this.match){return""}const match=this.match;if(match.answer){return decodeString16(match.answer.secondLine)}return match.swapContentsAndDescription?this.renderTextWithClassifications_(decodeString16(match.contents),match.contentsClass).innerHTML:this.renderTextWithClassifications_(decodeString16(match.description),match.descriptionClass).innerHTML}computeHasImage_(){return this.match&&!!this.match.imageUrl}computeIsRichSuggestion_(){return this.hasImage||this.match&&(this.match.type===SEARCH_CALCULATOR_ANSWER_TYPE||!!this.match.answer)}computeRemoveButtonIsVisible_(){return this.match&&this.match.supportsDeletion}computeRemoveButtonAriaLabel_(){return loadTimeData.getStringF("removeSuggestionA11yPrefix",this.matchText_)}computeSeparatorText_(){return this.match&&decodeString16(this.match.description)?loadTimeData.getString("realboxSeparator"):""}convertClassificationStyleToCSSClasses_(style){const classes=[];if(style&ACMatchClassificationStyle.DIM){classes.push("dim")}if(style&ACMatchClassificationStyle.MATCH){classes.push("match")}if(style&ACMatchClassificationStyle.URL){classes.push("url")}return classes}createSpanWithClasses_(text,classes){const span=document.createElement("span");if(classes.length){span.classList.add(...classes)}span.textContent=text;return span}renderTextWithClassifications_(text,classifications){return classifications.map((({offset:offset,style:style},index)=>{const next=classifications[index+1]||{offset:text.length};const subText=text.substring(offset,next.offset);const classes=this.convertClassificationStyleToCSSClasses_(style);return this.createSpanWithClasses_(subText,classes)})).reduce(((container,currentElement)=>{container.appendChild(currentElement);return container}),document.createElement("span"))}}customElements.define(RealboxMatchElement.is,RealboxMatchElement);// Copyright 2020 The Chromium Authors. All rights reserved.
let instance=null;class RealboxBrowserProxy{static getInstance(){return instance||(instance=new RealboxBrowserProxy)}static setInstance(newInstance){instance=newInstance}constructor(){this.handler=realbox.mojom.PageHandler.getRemote();this.callbackRouter=new realbox.mojom.PageCallbackRouter;this.handler.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}}// Copyright 2020 The Chromium Authors. All rights reserved.
class RealboxDropdownElement extends PolymerElement{static get is(){return"ntp-realbox-dropdown"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-dropdown">:host {
  user-select: none;
}

#selector {
  background-color: var(--search-box-results-bg, white);
    border-radius: calc(0.25 * var(--ntp-realbox-height));
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    display: block;
    margin-bottom: 8px;
    padding-bottom: 8px;
    padding-top: var(--ntp-realbox-height);
}

@media (forced-colors: active) {
#selector {
  border: 1px solid ActiveBorder;
}

}

ntp-realbox-match {
  color: var(--search-box-results-text);
}

.header {
  align-items: center;
    display: flex;
    margin-top: 8px;
    outline: none;
    padding-bottom: 6px;
    padding-inline-end: 16px;
    padding-inline-start: 12px;
    padding-top: 6px;
}

.header .text {
  color: var(--search-box-results-dim, var(--google-grey-refresh-700));
    cursor: default;
    font-size: .875em;
    font-weight: 500;
    overflow: hidden;
    padding-inline-end: 8px;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
}

.header cr-icon-button {
  --cr-icon-button-fill-color: var(--search-box-icon, var(--google-grey-refresh-700));
    --cr-icon-button-icon-size: 16px;
    --cr-icon-button-margin-start: 0;
    --cr-icon-button-size: 24px;
    --cr-icon-image: url(chrome://resources/images/icon_expand_more.svg);
    --cr-icon-image-transform: rotate(180deg);
}

.header[group-is-hidden] cr-icon-button {
  --cr-icon-image-transform: none;
}

.header:focus-within:not(:focus) cr-icon-button {
  --cr-icon-button-fill-color: var(--search-box-icon-selected, var(--google-grey-refresh-700));
}

ntp-realbox-match:hover, .header:hover {
  background-color: var(--search-box-results-bg-hovered, rgba(var(--google-grey-900-rgb), .1));
}

ntp-realbox-match:-webkit-any(:focus-within, .selected), .header:focus-within:not(:focus) {
  background-color: var(--search-box-results-bg-selected, rgba(var(--google-grey-900-rgb), .16));
    color: var(--search-box-results-text-selected, var(--google-grey-900));
}

@media (forced-colors: active) {
ntp-realbox-match:hover, .header:hover {
  background-color: Highlight;
}

ntp-realbox-match:-webkit-any(:focus-within, .selected), .header:focus-within:not(:focus) {
  background-color: Highlight;
}

}

</style>
<iron-selector id="selector" selectable="ntp-realbox-match" items="{{selectableMatchElements_}}" selected="{{selectedMatchIndex}}" selected-class="selected">
  <template is="dom-repeat" id="groups" items="[[groupIds_]]" as="groupId">
    <template is="dom-if" if="[[groupHasHeader_(groupId)]]">
      <!-- Header cannot be tabbed into but gets focus when clicked. This stops
           the dropdown from losing focus and closing as a result. -->
      <div class="header" data-id$="[[groupId]]" tabindex="-1" on-focusin="onHeaderFocusin_" on-click="onHeaderClick_" aria-hidden="true" group-is-hidden$="[[groupIsHidden_(groupId, hiddenGroupIds_.*)]]">
        <span class="text">[[headerForGroup_(groupId)]]</span>
        <cr-icon-button class="icon-clear" title="[[toggleButtonTitleForGroup_(groupId, hiddenGroupIds_.*)]]" aria-label$="[[toggleButtonA11yLabelForGroup_(groupId, hiddenGroupIds_.*)]]" on-mousedown="onToggleButtonMouseDown_">
        </cr-icon-button>
      </div>
    </template>
    <template is="dom-if" if="[[!groupIsHidden_(groupId, hiddenGroupIds_.*)]]" restamp="">
      <template is="dom-repeat" items="[[result.matches]]" filter="[[computeMatchBelongsToGroup_(groupId)]]" on-dom-change="onResultRepaint_">
        <ntp-realbox-match tabindex="0" role="option" match="[[item]]" match-index="[[matchIndex_(item)]]">
        </ntp-realbox-match>
      </template>
    </template>
  <template>

<!--_html_template_end_--></template></template></iron-selector>`}static get properties(){return{result:{type:Object},selectedMatchIndex:{type:Number,value:-1,notify:true},theme:{type:Object,observer:"onThemeChange_"},groupIds_:{type:Array,computed:`computeGroupIds_(result)`},hiddenGroupIds_:{type:Array,computed:`computeHiddenGroupIds_(result)`},selectableMatchElements_:{type:Array,value:()=>[]}}}constructor(){super();this.callbackRouter_=RealboxBrowserProxy.getInstance().callbackRouter;this.pageHandler_=RealboxBrowserProxy.getInstance().handler;this.autocompleteMatchImageAvailableListenerId_=null}connectedCallback(){super.connectedCallback();this.autocompleteMatchImageAvailableListenerId_=this.callbackRouter_.autocompleteMatchImageAvailable.addListener(this.onAutocompleteMatchImageAvailable_.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.autocompleteMatchImageAvailableListenerId_))}unselect(){this.selectedMatchIndex=-1}focusSelected(){if(this.$.selector.selectedItem){this.$.selector.selectedItem.focus()}}selectFirst(){this.selectedMatchIndex=0}selectIndex(index){this.selectedMatchIndex=index}selectPrevious(){this.selectedMatchIndex=this.selectedMatchIndex-1>=0?this.selectedMatchIndex-1:this.selectableMatchElements_.length-1}selectLast(){this.selectedMatchIndex=this.selectableMatchElements_.length-1}selectNext(){this.selectedMatchIndex=this.selectedMatchIndex+1<this.selectableMatchElements_.length?this.selectedMatchIndex+1:0}onAutocompleteMatchImageAvailable_(matchIndex,url,dataUrl){if(!this.result||!this.result.matches){return}const match=this.result.matches[matchIndex];if(!match){return}if(match.destinationUrl.url===url.url){this.set(`result.matches.${matchIndex}.faviconDataUrl`,dataUrl)}else if(match.imageUrl===url.url){this.set(`result.matches.${matchIndex}.imageDataUrl`,dataUrl)}}onResultRepaint_(){this.dispatchEvent(new CustomEvent("result-repaint",{bubbles:true,composed:true,detail:window.performance.now()}))}onThemeChange_(){if(!loadTimeData.getBoolean("realboxMatchOmniboxTheme")){return}this.updateStyles({"--search-box-icon":skColorToRgba(this.theme.icon),"--search-box-results-bg-hovered":skColorToRgba(assert(this.theme.resultsBgHovered)),"--search-box-results-bg-selected":skColorToRgba(assert(this.theme.resultsBgSelected)),"--search-box-results-bg":skColorToRgba(assert(this.theme.resultsBg)),"--search-box-results-dim-selected":skColorToRgba(assert(this.theme.resultsDimSelected)),"--search-box-results-dim":skColorToRgba(assert(this.theme.resultsDim)),"--search-box-results-text-selected":skColorToRgba(assert(this.theme.resultsTextSelected)),"--search-box-results-text":skColorToRgba(assert(this.theme.resultsText)),"--search-box-results-url-selected":skColorToRgba(assert(this.theme.resultsUrlSelected)),"--search-box-results-url":skColorToRgba(assert(this.theme.resultsUrl))})}onHeaderFocusin_(){this.dispatchEvent(new CustomEvent("header-focusin",{bubbles:true,composed:true}))}onHeaderClick_(e){const groupId=Number(e.currentTarget.dataset.id);this.pageHandler_.toggleSuggestionGroupIdVisibility(groupId);const index=this.hiddenGroupIds_.indexOf(groupId);if(index===-1){this.push("hiddenGroupIds_",groupId)}else{this.splice("hiddenGroupIds_",index,1)}}onToggleButtonMouseDown_(e){e.preventDefault()}matchIndex_(match){if(!this.result||!this.result.matches){return-1}return this.result.matches.indexOf(match)}computeGroupIds_(){if(!this.result||!this.result.matches){return[]}return[...new Set(this.result.matches.map((match=>match.suggestionGroupId)))]}computeHiddenGroupIds_(){if(!this.result){return[]}return Object.keys(this.result.suggestionGroupsMap).map((groupId=>Number(groupId))).filter((groupId=>this.result.suggestionGroupsMap[groupId].hidden).bind(this))}computeMatchBelongsToGroup_(groupId){return match=>match.suggestionGroupId===groupId}groupHasHeader_(groupId){return!!this.headerForGroup_(groupId)}groupIsHidden_(groupId){return this.hiddenGroupIds_.indexOf(groupId)!==-1}headerForGroup_(groupId){return this.result&&this.result.suggestionGroupsMap&&this.result.suggestionGroupsMap[groupId]?decodeString16(this.result.suggestionGroupsMap[groupId].header):""}toggleButtonTitleForGroup_(groupId){if(!this.groupHasHeader_(groupId)){return""}return loadTimeData.getString(this.groupIsHidden_(groupId)?"showSuggestions":"hideSuggestions")}toggleButtonA11yLabelForGroup_(groupId){if(!this.groupHasHeader_(groupId)){return""}return loadTimeData.substituteString(loadTimeData.getString(this.groupIsHidden_(groupId)?"showSection":"hideSection"),this.headerForGroup_(groupId))}}customElements.define(RealboxDropdownElement.is,RealboxDropdownElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class RealboxElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"ntp-realbox"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox">:host {
  --ntp-realbox-height: 44px;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    font-size: 16px;
    height: var(--ntp-realbox-height);
}

@media (forced-colors: active) {
:host {
  border: 1px solid ActiveBorder;
}

}

:host([matches-are-visible]) {
  box-shadow: none;
}

#inputWrapper {
  height: 100%;
    position: relative;
}

input {
  background-color: var(--search-box-bg, white);
    border: none;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-family: inherit;
    font-size: inherit;
    height: 100%;
    outline: none;
    padding-inline-end:  44px;
    padding-inline-start: 52px;
    position: relative;
    width: 100%;
}

input::-webkit-search-decoration, input::-webkit-search-cancel-button, input::-webkit-search-results-button, input::-webkit-search-results-decoration {
  display: none;
}

input::placeholder {
  color: var(--search-box-placeholder, var(--google-grey-refresh-700));
}

input:focus, :host([matches-are-visible]) input {
  background-color: var(--search-box-results-bg, white);
}

ntp-realbox-icon {
  height: 100%;
    left: 12px;
    position: absolute;
    top: 0;
}

:host-context([dir='rtl']) ntp-realbox-icon {
  left: unset;
    right: 12px;
}

#voiceSearchButton {
  background: url(icons/googlemic_clr_24px.svg) no-repeat center;
    background-size: 21px 21px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 100%;
    outline: none;
    padding: 0;
    pointer-events: auto;
    position: absolute;
    right: 16px;
    width: 26px;
}

:host-context([dir='rtl']) #voiceSearchButton {
  left: 16px;
    right: unset;
}

:host-context(.focus-outline-visible) #voiceSearchButton:focus {
  box-shadow: var(--ntp-focus-shadow);
}

:-webkit-any(input, ntp-realbox-icon, #voiceSearchButton) {
  z-index: 2;
}

ntp-realbox-dropdown {
  left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}

</style>
<div id="inputWrapper" on-focusout="onInputWrapperFocusout_" on-keydown="onInputWrapperKeydown_">
  <input id="input" type="search" autocomplete="off" spellcheck="false" aria-live="[[inputAriaLive_]]" role="combobox" placeholder="[[i18n('searchBoxHint')]]" on-copy="onInputCutCopy_" on-cut="onInputCutCopy_" on-focus="onInputFocus_" on-blur="onInputBlur_" on-input="onInputInput_" on-keydown="onInputKeydown_" on-keyup="onInputKeyup_" on-mousedown="onInputMouseDown_" on-paste="onInputPaste_">
  <ntp-realbox-icon id="icon" match="[[selectedMatch_]]" default-icon="[[realboxIcon_]]" in-searchbox="">
  </ntp-realbox-icon>
  <button id="voiceSearchButton" on-click="onVoiceSearchClick_" title="[[i18n('voiceSearchButtonLabel')]]">
  </button>
  <ntp-realbox-dropdown id="matches" role="listbox" theme="[[theme]]" result="[[result_]]" selected-match-index="{{selectedMatchIndex_}}" on-result-repaint="onResultRepaint_" on-match-focusin="onMatchFocusin_" on-match-click="onMatchClick_" on-match-remove="onMatchRemove_" on-header-focusin="onHeaderFocusin_" hidden$="[[!matchesAreVisible]]">
  </ntp-realbox-dropdown>
</div>
<!--_html_template_end_-->`}static get properties(){return{matchesAreVisible:{type:Boolean,value:false,reflectToAttribute:true},theme:{type:Object,observer:"onThemeChange_"},charTypedTime_:{type:Number,value:0},isDeletingInput_:{type:Boolean,value:false},lastIgnoredEnterEvent_:{type:Object,value:null},lastInput_:{type:Object,value:{text:"",inline:""}},lastInputFocusTime_:{type:Number,value:null},lastQueriedInput_:{type:String,value:null},pastedInInput_:{type:Boolean,value:false},realboxIcon_:{type:String,value:()=>loadTimeData.getString("realboxDefaultIcon")},result_:{type:Object},selectedMatch_:{type:Object,computed:`computeSelectedMatch_(result_, selectedMatchIndex_)`},selectedMatchIndex_:{type:Number,value:-1},inputAriaLive_:{type:String,computed:`computeInputAriaLive_(selectedMatch_)`}}}computeInputAriaLive_(){return this.selectedMatch_?"off":"polite"}constructor(){performance.mark("realbox-creation-start");super();this.pageHandler_=RealboxBrowserProxy.getInstance().handler;this.callbackRouter_=RealboxBrowserProxy.getInstance().callbackRouter;this.autocompleteResultChangedListenerId_=null;this.autocompleteMatchImageAvailableListenerId_=null}connectedCallback(){super.connectedCallback();this.autocompleteResultChangedListenerId_=this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged_.bind(this));this.autocompleteMatchImageAvailableListenerId_=this.callbackRouter_.autocompleteMatchImageAvailable.addListener(this.onAutocompleteMatchImageAvailable_.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.autocompleteResultChangedListenerId_));this.callbackRouter_.removeListener(assert(this.autocompleteMatchImageAvailableListenerId_))}ready(){super.ready();performance.measure("realbox-creation","realbox-creation-start")}onAutocompleteMatchImageAvailable_(matchIndex,url,dataUrl){if(!this.result_||!this.result_.matches){return}const match=this.result_.matches[matchIndex];if(!match||this.selectedMatchIndex_!==matchIndex){return}if(match.destinationUrl.url===url.url){match.faviconDataUrl=dataUrl;this.notifyPath("selectedMatch_.faviconDataUrl")}}onAutocompleteResultChanged_(result){if(this.lastQueriedInput_===null||this.lastQueriedInput_.trimLeft()!==decodeString16(result.input)){return}this.result_=result;const hasMatches=result&&result.matches&&result.matches.length>0;this.matchesAreVisible=hasMatches;this.$.input.focus();const firstMatch=hasMatches?this.result_.matches[0]:null;if(firstMatch&&firstMatch.allowedToBeDefaultMatch){this.$.matches.selectFirst();this.updateInput_({text:this.lastQueriedInput_,inline:decodeString16(firstMatch.inlineAutocompletion)||""});if(this.lastIgnoredEnterEvent_){this.navigateToMatch_(0,this.lastIgnoredEnterEvent_);this.lastIgnoredEnterEvent_=null}}else if(hasMatches&&this.selectedMatchIndex_!==-1&&this.selectedMatchIndex_<this.result_.matches.length){this.$.matches.selectIndex(this.selectedMatchIndex_);this.updateInput_({text:decodeString16(this.selectedMatch_.fillIntoEdit),inline:"",moveCursorToEnd:true})}else{this.$.matches.unselect();this.updateInput_({inline:""})}}onThemeChange_(){if(!loadTimeData.getBoolean("realboxMatchOmniboxTheme")){return}this.updateStyles({"--search-box-bg":skColorToRgba(assert(this.theme.bg)),"--search-box-placeholder":skColorToRgba(assert(this.theme.placeholder)),"--search-box-results-bg":skColorToRgba(assert(this.theme.resultsBg)),"--search-box-text":skColorToRgba(assert(this.theme.text)),"--search-box-icon":skColorToRgba(assert(this.theme.icon))})}onHeaderFocusin_(){assert(this.lastQueriedInput_==="");this.$.matches.unselect();this.updateInput_({text:"",inline:""})}onInputCutCopy_(e){if(!this.$.input.value||this.$.input.selectionStart!==0||this.$.input.selectionEnd!==this.$.input.value.length||!this.result_||this.result_.matches.length===0){return}if(this.selectedMatch_&&!this.selectedMatch_.isSearchType){e.clipboardData.setData("text/plain",this.selectedMatch_.destinationUrl.url);e.preventDefault();if(e.type==="cut"){this.updateInput_({text:"",inline:""});this.clearAutocompleteMatches_()}}}onInputFocus_(e){this.lastInputFocusTime_=window.performance.now();e.target.placeholder=""}onInputBlur_(e){e.target.placeholder=loadTimeData.getString("realboxHint")}onInputInput_(e){const inputValue=this.$.input.value;const lastInputValue=this.lastInput_.text+this.lastInput_.inline;if(lastInputValue===inputValue){return}this.updateInput_({text:inputValue,inline:""});const charTyped=!this.isDeletingInput_&&!!inputValue.trim();this.charTypedTime_=charTyped?this.charTypedTime_||window.performance.now():0;if(inputValue.trim()){this.queryAutocomplete_(inputValue,e.isComposing)}else{this.clearAutocompleteMatches_()}this.pastedInInput_=false}onInputKeydown_(e){if(!this.lastInput_.inline){return}const inputValue=this.$.input.value;const inputSelection=inputValue.substring(this.$.input.selectionStart,this.$.input.selectionEnd);const lastInputValue=this.lastInput_.text+this.lastInput_.inline;if(inputSelection===this.lastInput_.inline&&inputValue===lastInputValue&&this.lastInput_.inline[0].toLocaleLowerCase()===e.key.toLocaleLowerCase()){this.updateInput_({text:assert(this.lastInput_.text+e.key),inline:this.lastInput_.inline.substr(1)});this.charTypedTime_=this.charTypedTime_||window.performance.now();this.queryAutocomplete_(this.lastInput_.text);e.preventDefault()}}onInputKeyup_(e){if(e.key!=="Tab"){return}if(!this.$.input.value){this.queryAutocomplete_("")}}onInputMouseDown_(e){if(e.button!==0){return}if(!this.$.input.value){this.queryAutocomplete_("")}}onInputPaste_(e){this.pastedInInput_=true}onInputWrapperFocusout_(e){const relatedTarget=e.relatedTarget;if(!this.$.inputWrapper.contains(relatedTarget)){if(this.lastQueriedInput_===""){this.updateInput_({text:"",inline:""});this.clearAutocompleteMatches_()}else{this.matchesAreVisible=false;this.pageHandler_.stopAutocomplete(false)}}}onInputWrapperKeydown_(e){const KEYDOWN_HANDLED_KEYS=["ArrowDown","ArrowUp","Delete","Enter","Escape","PageDown","PageUp"];if(!KEYDOWN_HANDLED_KEYS.includes(e.key)){return}if(e.defaultPrevented){return}if(!this.matchesAreVisible){if(e.key==="ArrowUp"||e.key==="ArrowDown"){const inputValue=this.$.input.value;if(inputValue.trim()||!inputValue){this.queryAutocomplete_(inputValue)}e.preventDefault();return}}if(!this.result_||this.result_.matches.length===0){return}if(e.key==="Delete"){if(e.shiftKey&&!e.altKey&&!e.ctrlKey&&!e.metaKey){if(this.selectedMatch_&&this.selectedMatch_.supportsDeletion){this.pageHandler_.deleteAutocompleteMatch(this.selectedMatchIndex_);e.preventDefault()}}return}if(e.isComposing){return}if(e.key==="Enter"){if([this.$.matches,this.$.input].includes(e.target)){if(this.lastQueriedInput_!==null&&this.lastQueriedInput_.trimLeft()===decodeString16(this.result_.input)){if(this.selectedMatch_){this.navigateToMatch_(this.selectedMatchIndex_,e)}}else{this.lastIgnoredEnterEvent_=e;e.preventDefault()}}return}if(hasKeyModifiers(e)){return}if(e.key==="Escape"&&this.selectedMatchIndex_<=0){this.updateInput_({text:"",inline:""});this.clearAutocompleteMatches_();e.preventDefault();return}if(e.key==="ArrowDown"){this.$.matches.selectNext()}else if(e.key==="ArrowUp"){this.$.matches.selectPrevious()}else if(e.key==="Escape"||e.key==="PageUp"){this.$.matches.selectFirst()}else if(e.key==="PageDown"){this.$.matches.selectLast()}e.preventDefault();if(this.shadowRoot.activeElement===this.$.matches){this.$.matches.focusSelected()}const newFill=decodeString16(this.selectedMatch_.fillIntoEdit);const newInline=this.selectedMatch_.allowedToBeDefaultMatch?decodeString16(this.selectedMatch_.inlineAutocompletion):"";const newFillEnd=newFill.length-newInline.length;this.updateInput_({text:assert(newFill.substr(0,newFillEnd)),inline:newInline,moveCursorToEnd:newInline.length===0})}onMatchClick_(e){this.navigateToMatch_(e.detail.index,e.detail.event)}onMatchFocusin_(e){this.$.matches.selectIndex(e.detail);this.updateInput_({text:decodeString16(this.selectedMatch_.fillIntoEdit),inline:"",moveCursorToEnd:true})}onMatchRemove_(e){this.pageHandler_.deleteAutocompleteMatch(e.detail)}onResultRepaint_(e){if(this.charTypedTime_){this.pageHandler_.logCharTypedToRepaintLatency(mojoTimeDelta(e.detail-this.charTypedTime_));this.charTypedTime_=0}}onVoiceSearchClick_(){this.dispatchEvent(new Event("open-voice-search"))}computeSelectedMatch_(){if(!this.result_||!this.result_.matches){return null}return this.result_.matches[this.selectedMatchIndex_]||null}clearAutocompleteMatches_(){this.matchesAreVisible=false;this.result_=null;this.$.matches.unselect();this.pageHandler_.stopAutocomplete(true);this.lastQueriedInput_=null}navigateToMatch_(matchIndex,e){assert(matchIndex>=0);const match=assert(this.result_.matches[matchIndex]);assert(this.lastInputFocusTime_);const delta=mojoTimeDelta(window.performance.now()-this.lastInputFocusTime_);this.pageHandler_.openAutocompleteMatch(matchIndex,match.destinationUrl,this.matchesAreVisible,delta,e.button||0,e.altKey,e.ctrlKey,e.metaKey,e.shiftKey);e.preventDefault()}queryAutocomplete_(input,preventInlineAutocomplete=false){this.lastQueriedInput_=input;const caretNotAtEnd=this.$.input.selectionStart!==input.length;preventInlineAutocomplete=preventInlineAutocomplete||this.isDeletingInput_||this.pastedInInput_||caretNotAtEnd;this.pageHandler_.queryAutocomplete(mojoString16(input),preventInlineAutocomplete)}updateInput_(update){const newInput=Object.assign({},this.lastInput_,update);const newInputValue=newInput.text+newInput.inline;const lastInputValue=this.lastInput_.text+this.lastInput_.inline;const inlineDiffers=newInput.inline!==this.lastInput_.inline;const preserveSelection=!inlineDiffers&&!update.moveCursorToEnd;let needsSelectionUpdate=!preserveSelection;const oldSelectionStart=this.$.input.selectionStart;const oldSelectionEnd=this.$.input.selectionEnd;if(newInputValue!==this.$.input.value){this.$.input.value=newInputValue;needsSelectionUpdate=true}if(newInputValue.trim()&&needsSelectionUpdate){this.$.input.selectionStart=preserveSelection?oldSelectionStart:update.moveCursorToEnd?newInputValue.length:newInput.text.length;this.$.input.selectionEnd=preserveSelection?oldSelectionEnd:newInputValue.length}this.isDeletingInput_=lastInputValue.length>newInputValue.length&&lastInputValue.startsWith(newInputValue);this.lastInput_=newInput}}customElements.define(RealboxElement.is,RealboxElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const FACEBOOK_APP_ID=738026486351791;class DoodleShareDialogElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"ntp-doodle-share-dialog"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-doodle-share-dialog">#dialog::part(dialog) {
  max-width: 300px;
}

#buttons {
  display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 28px;
    margin-top: 20px;
}

#buttons cr-button {
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    height: 48px;
    min-width: 48px;
    width: 48px;
}

#buttons cr-button:hover {
  opacity: 0.8;
}

#buttons > :not(:last-child) {
  margin-inline-end: 12px;
}

#facebookButton {
  background-image: url(icons/facebook.svg);
}

#twitterButton {
  background-image: url(icons/twitter.svg);
}

#emailButton {
  background-image: url(icons/mail.svg);
}

#url {
  --cr-input-error-display: none;
}

#copyButton {
  --cr-icon-image: url(icons/copy.svg);
    margin-inline-start: 2px;
}

</style>
<cr-dialog id="dialog" show-on-attach="">
  <div id="title" slot="title">
    [[title]]
  </div>
  <div slot="body">
    <div id="buttons">
      <cr-button id="facebookButton" title="[[i18n('facebook')]]" on-click="onFacebookClick_">
      </cr-button>
      <cr-button id="twitterButton" title="[[i18n('twitter')]]" on-click="onTwitterClick_">
      </cr-button>
      <cr-button id="emailButton" title="[[i18n('email')]]" on-click="onEmailClick_">
      </cr-button>
    </div>
    <cr-input readonly="" label="[[i18n('doodleLink')]]" id="url" value="[[url.url]]">
      <cr-icon-button id="copyButton" slot="suffix" title="[[i18n('copyLink')]]" on-click="onCopyClick_">
      </cr-icon-button>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button id="doneButton" class="action-button" on-click="onCloseClick_">
      [[i18n('doneButton')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}static get properties(){return{title:String,url:Object}}onFacebookClick_(){const url="https://www.facebook.com/dialog/share"+`?app_id=${FACEBOOK_APP_ID}`+`&href=${encodeURIComponent(this.url.url)}`+`&hashtag=${encodeURIComponent("#GoogleDoodle")}`;WindowProxy.getInstance().open(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kFacebook)}onTwitterClick_(){const url="https://twitter.com/intent/tweet"+`?text=${encodeURIComponent(`${this.title}\n${this.url.url}`)}`;WindowProxy.getInstance().open(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kTwitter)}onEmailClick_(){const url=`mailto:?subject=${encodeURIComponent(this.title)}`+`&body=${encodeURIComponent(this.url.url)}`;WindowProxy.getInstance().navigate(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kEmail)}onCopyClick_(){this.$.url.select();navigator.clipboard.writeText(this.url.url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kLinkCopy)}onCloseClick_(){this.$.dialog.close()}notifyShare_(channel){this.dispatchEvent(new CustomEvent("share",{detail:channel}))}}customElements.define(DoodleShareDialogElement.is,DoodleShareDialogElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const SHARE_BUTTON_SIZE_PX=26;class LogoElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"ntp-logo"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="ntp-logo">:host {
  --ntp-logo-height: 200px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-end;
    min-height: var(--ntp-logo-height);
}

:host([doodle-boxed_]) {
  justify-content: flex-end;
}

#logo {
  forced-color-adjust: none;
    height: 92px;
    width: 272px;
}

:host([single-colored]) #logo {
  -webkit-mask-image: url(./icons/google_logo.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-logo-color);
}

:host(:not([single-colored])) #logo {
  background-image: url(./icons/google_logo.svg);
}

#imageDoodle {
  cursor: pointer;
    outline: none;
}

:host([doodle-boxed_]) #imageDoodle {
  background-color: var(--ntp-logo-box-color);
    border-radius: 20px;
    padding: 16px 24px;
}

:host-context(.focus-outline-visible) #imageDoodle:focus {
  box-shadow: 0 0 0 2px rgba(var(--google-blue-600-rgb), .4);
}

#imageContainer {
  display: flex;
    height: fit-content;
    position: relative;
    width: fit-content;
}

#image {
  max-height: var(--ntp-logo-height);
    max-width: 100%;
}

:host([doodle-boxed_]) #image {
  max-height: 160px;
}

#animation {
  height: 100%;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

#shareButton {
  background-color: var(--ntp-logo-share-button-background-color, none);
    border: none;
    height: var(--ntp-logo-share-button-height, 0);
    left: var(--ntp-logo-share-button-x, 0);
    min-width: var(--ntp-logo-share-button-width, 0);
    opacity: 0.8;
    outline: initial;
    padding: 2px;
    position: absolute;
    top: var(--ntp-logo-share-button-y, 0);
    width: var(--ntp-logo-share-button-width, 0);
}

#shareButton:hover {
  opacity: 1;
}

#shareButton img {
  height: 100%;
    width: 100%;
}

#iframe {
  border: none;
    height: var(--height, var(--ntp-logo-height));
    transition-duration: var(--duration, 100ms);
    transition-property: height, width;
    width: var(--width, 100%);
}

#iframe:not([expanded]) {
  max-height: var(--ntp-logo-height);
}

</style>

<template is="dom-if" if="[[showLogo_]]" restamp="">
  <div id="logo"></div>
</template>
<template is="dom-if" if="[[showDoodle_]]" restamp="">
  <div id="doodle" title="[[doodle_.description]]">
    <div id="imageDoodle" hidden="[[!imageDoodle_]]" tabindex="0" on-click="onImageClick_" on-keydown="onImageKeydown_">
      <div id="imageContainer">
        <!-- The static image is always visible and the animated image is
             stacked on top of the static image so that there is no flicker
             when starting the animation. -->
        <img id="image" src="[[imageUrl_]]" on-load="onImageLoad_">
        <ntp-iframe id="animation" src="[[animationUrl_]]" hidden="[[!showAnimation_]]">
        </ntp-iframe>
        <cr-button id="shareButton" title="[[i18n('shareDoodle')]]" on-click="onShareButtonClick_" hidden="[[!imageDoodle_.shareButton]]">
          <img id="shareButtonImage" src="[[imageDoodle_.shareButton.iconUrl.url]]">
          
        </cr-button>
      </div>
    </div>
    <template is="dom-if" if="[[iframeUrl_]]" restamp="">
      <ntp-iframe id="iframe" src="[[iframeUrl_]]" expanded$="[[expanded_]]">
      </ntp-iframe>
    </template>
  </div>
</template>
<template is="dom-if" if="[[showShareDialog_]]" restamp="">
  <ntp-doodle-share-dialog title="[[doodle_.description]]" url="[[doodle_.image.shareUrl]]" on-close="onShareDialogClose_" on-share="onShare_">
  </ntp-doodle-share-dialog>
</template>
<!--_html_template_end_-->`}static get properties(){return{singleColored:{reflectToAttribute:true,type:Boolean,value:false},dark:{observer:"onDarkChange_",type:Boolean},backgroundColor:Object,loaded_:Boolean,doodle_:Object,imageDoodle_:{observer:"onImageDoodleChange_",computed:"computeImageDoodle_(dark, doodle_)",type:Object},showLogo_:{computed:"computeShowLogo_(loaded_, showDoodle_)",type:Boolean},showDoodle_:{computed:"computeShowDoodle_(doodle_, imageDoodle_)",type:Boolean},doodleBoxed_:{reflectToAttribute:true,type:Boolean,computed:"computeDoodleBoxed_(backgroundColor, imageDoodle_)"},imageUrl_:{computed:"computeImageUrl_(imageDoodle_)",type:String},showAnimation_:{type:Boolean,value:false},animationUrl_:{computed:"computeAnimationUrl_(imageDoodle_)",type:String},iframeUrl_:{computed:"computeIframeUrl_(doodle_)",type:String},duration_:{observer:"onDurationHeightWidthChange_",type:String},height_:{observer:"onDurationHeightWidthChange_",type:String},width_:{observer:"onDurationHeightWidthChange_",type:String},expanded_:Boolean,showShareDialog_:Boolean}}constructor(){performance.mark("logo-creation-start");super();this.eventTracker_=new EventTracker;this.pageHandler_=NewTabPageProxy.getInstance().handler;this.pageHandler_.getDoodle().then((({doodle:doodle})=>{this.doodle_=doodle;this.loaded_=true;if(this.doodle_&&this.doodle_.interactive){this.width_=`${this.doodle_.interactive.width}px`;this.height_=`${this.doodle_.interactive.height}px`}}));this.imageClickParams_=null;this.interactionLogUrl_=null;this.shareId_=null}connectedCallback(){super.connectedCallback();this.eventTracker_.add(window,"message",(({data:data})=>{if(data["cmd"]==="resizeDoodle"){this.duration_=assert(data.duration);this.height_=assert(data.height);this.width_=assert(data.width);this.expanded_=true}else if(data["cmd"]==="sendMode"){this.sendMode_()}}));this.sendMode_()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}ready(){super.ready();performance.measure("logo-creation","logo-creation-start")}onImageDoodleChange_(){const shareButton=this.imageDoodle_&&this.imageDoodle_.shareButton;if(shareButton){const height=this.imageDoodle_.height;const width=this.imageDoodle_.width;this.updateStyles({"--ntp-logo-share-button-background-color":skColorToRgba(shareButton.backgroundColor),"--ntp-logo-share-button-height":`${SHARE_BUTTON_SIZE_PX/height*100}%`,"--ntp-logo-share-button-width":`${SHARE_BUTTON_SIZE_PX/width*100}%`,"--ntp-logo-share-button-x":`${shareButton.x/width*100}%`,"--ntp-logo-share-button-y":`${shareButton.y/height*100}%`})}else{this.updateStyles({"--ntp-logo-share-button-background-color":null,"--ntp-logo-share-button-height":null,"--ntp-logo-share-button-width":null,"--ntp-logo-share-button-x":null,"--ntp-logo-share-button-y":null})}if(this.imageDoodle_){this.updateStyles({"--ntp-logo-box-color":skColorToRgba(this.imageDoodle_.backgroundColor)})}else{this.updateStyles({"--ntp-logo-box-color":null})}this.showAnimation_=false;this.imageClickParams_=null;this.interactionLogUrl_=null;this.shareId_=null}computeImageDoodle_(){return this.doodle_&&this.doodle_.image&&(this.dark?this.doodle_.image.dark:this.doodle_.image.light)||null}computeShowLogo_(){return!!this.loaded_&&!this.showDoodle_}computeShowDoodle_(){return!!this.imageDoodle_||!!this.doodle_&&!!this.doodle_.interactive&&window.navigator.onLine}computeDoodleBoxed_(){return!this.backgroundColor||!!this.imageDoodle_&&this.imageDoodle_.backgroundColor.value!==this.backgroundColor.value}onImageClick_(){if(this.isCtaImageShown_()){this.showAnimation_=true;this.pageHandler_.onDoodleImageClicked(newTabPage.mojom.DoodleImageType.kCta,this.interactionLogUrl_);this.logImageRendered_(newTabPage.mojom.DoodleImageType.kAnimation,this.imageDoodle_.animationImpressionLogUrl);return}this.pageHandler_.onDoodleImageClicked(this.showAnimation_?newTabPage.mojom.DoodleImageType.kAnimation:newTabPage.mojom.DoodleImageType.kStatic,null);const onClickUrl=new URL(this.doodle_.image.onClickUrl.url);if(this.imageClickParams_){for(const param of new URLSearchParams(this.imageClickParams_)){onClickUrl.searchParams.append(param[0],param[1])}}WindowProxy.getInstance().open(onClickUrl.toString())}onImageLoad_(){this.logImageRendered_(this.isCtaImageShown_()?newTabPage.mojom.DoodleImageType.kCta:newTabPage.mojom.DoodleImageType.kStatic,this.imageDoodle_.imageImpressionLogUrl)}async logImageRendered_(type,logUrl){const{imageClickParams:imageClickParams,interactionLogUrl:interactionLogUrl,shareId:shareId}=await this.pageHandler_.onDoodleImageRendered(type,WindowProxy.getInstance().now(),logUrl);this.imageClickParams_=imageClickParams;this.interactionLogUrl_=interactionLogUrl;this.shareId_=shareId}onImageKeydown_(e){if([" ","Enter"].includes(e.key)){this.onImageClick_()}}onShare_(e){const doodleId=new URL(this.doodle_.image.onClickUrl.url).searchParams.get("ct");if(!doodleId){return}this.pageHandler_.onDoodleShared(e.detail,doodleId,this.shareId_)}isCtaImageShown_(){return!this.showAnimation_&&!!this.imageDoodle_.animationUrl}sendMode_(){const iframe=$$(this,"#iframe");if(this.dark===undefined||!iframe){return}iframe.postMessage({cmd:"changeMode",dark:this.dark})}onDarkChange_(){this.sendMode_()}computeImageUrl_(){return this.imageDoodle_?this.imageDoodle_.imageUrl.url:""}computeAnimationUrl_(){return this.imageDoodle_&&this.imageDoodle_.animationUrl?`chrome-untrusted://new-tab-page/image?${this.imageDoodle_.animationUrl.url}`:""}computeIframeUrl_(){if(this.doodle_&&this.doodle_.interactive){const url=new URL(this.doodle_.interactive.url.url);url.searchParams.append("theme_messages","0");return url.href}else{return""}}onShareButtonClick_(e){e.stopPropagation();this.showShareDialog_=true}onShareDialogClose_(){this.showShareDialog_=false}onDurationHeightWidthChange_(){this.updateStyles({"--duration":this.duration_,"--height":this.height_,"--width":this.width_})}}customElements.define(LogoElement.is,LogoElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class ModuleWrapperElement extends PolymerElement{static get is(){return"ntp-module-wrapper"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-module-wrapper">:host {
  background-color: var(--ntp-background-override-color);
    border: solid var(--ntp-border-color) 1px;
    border-radius: var(--ntp-module-border-radius);
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    position: relative;
}

#impressionProbe {
  height: 27px;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

#moduleElement {
  align-items: center;
    display: flex;
    justify-content: center;
}

</style>
<div id="impressionProbe"></div>
<div id="moduleElement"></div>
<!--_html_template_end_-->`}static get properties(){return{module:{observer:"onModuleChange_",type:Object}}}onModuleChange_(newValue,oldValue){assert(!oldValue);this.$.moduleElement.appendChild(this.module.element);this.module.element.addEventListener("usage",(()=>{recordOccurence("NewTabPage.Modules.Usage");recordOccurence(`NewTabPage.Modules.Usage.${this.module.descriptor.id}`)}),{once:true});const headerObserver=new IntersectionObserver((([{intersectionRatio:intersectionRatio}])=>{if(intersectionRatio>=1){headerObserver.disconnect();const time=WindowProxy.getInstance().now();recordLoadDuration("NewTabPage.Modules.Impression",time);recordLoadDuration(`NewTabPage.Modules.Impression.${this.module.descriptor.id}`,time);this.dispatchEvent(new Event("detect-impression"))}}),{threshold:1});let intersectionPerdecage=0;const moduleObserver=new IntersectionObserver((([{intersectionRatio:intersectionRatio}])=>{intersectionPerdecage=Math.floor(Math.max(intersectionPerdecage,intersectionRatio*10))}),{threshold:[.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});window.addEventListener("unload",(()=>{recordPerdecage("NewTabPage.Modules.ImpressionRatio",intersectionPerdecage);recordPerdecage(`NewTabPage.Modules.ImpressionRatio.${this.module.descriptor.id}`,intersectionPerdecage)}));microTask.run((()=>{headerObserver.observe(this.$.impressionProbe);moduleObserver.observe(this)}));this.addEventListener("mouseover",(()=>{chrome.metricsPrivate.recordSparseHashable("NewTabPage.Modules.Hover",this.module.descriptor.id)}),{useCapture:true,once:true})}}customElements.define(ModuleWrapperElement.is,ModuleWrapperElement);// Copyright 2021 The Chromium Authors. All rights reserved.
class ModulesElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"ntp-modules"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="ntp-modules">:host {
  display: block;
}

ntp-module-wrapper {
  width: var(--ntp-module-width);
}

.module-container + .module-container {
  padding-top: 16px;
}

#removeModuleToastMessage {
  flex-grow: 1;
}

[draggable] {
  cursor: grab;
}

[dragging] {
  pointer-events: none;
    position: fixed;
    z-index: 2;
}

</style>
<div id="modules"></div>
<cr-toast id="removeModuleToast" duration="10000">
  <div id="removeModuleToastMessage">[[removedModuleData_.message]]</div>
  <cr-button id="undoRemoveModuleButton" aria-label="[[i18n('undoDescription')]]" on-click="onUndoRemoveModuleButtonClick_">
    [[i18n('undo')]]
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}static get properties(){return{dismissedModules_:{type:Array,value:()=>[]},disabledModules_:{type:Object,value:()=>({all:true,ids:[]})},removedModuleData_:{type:Object,value:null},modulesLoaded_:Boolean,modulesVisibilityDetermined_:Boolean,modulesLoadedAndVisibilityDetermined_:{type:Boolean,computed:`computeModulesLoadedAndVisibilityDetermined_(\n          modulesLoaded_,\n          modulesVisibilityDetermined_)`,observer:"onModulesLoadedAndVisibilityDeterminedChange_"},dragEnabled_:{type:Boolean,value:loadTimeData.getBoolean("modulesDragAndDropEnabled")}}}static get observers(){return["onRemovedModulesChange_(dismissedModules_.*, disabledModules_)"]}constructor(){super();this.setDisabledModulesListenerId_=null;this.eventTracker_=new EventTracker}connectedCallback(){super.connectedCallback();this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener(((all,ids)=>{this.disabledModules_={all:all,ids:ids};this.modulesVisibilityDetermined_=true}));NewTabPageProxy.getInstance().handler.updateDisabledModules();this.eventTracker_.add(window,"keydown",(e=>this.onWindowKeydown_(e)))}disconnectedCallback(){super.disconnectedCallback();NewTabPageProxy.getInstance().callbackRouter.removeListener(assert(this.setDisabledModulesListenerId_));this.eventTracker_.removeAll()}ready(){super.ready();this.renderModules_()}async renderModules_(){const modules=await ModuleRegistry.getInstance().initializeModules(loadTimeData.getInteger("modulesLoadTimeout"));if(modules){NewTabPageProxy.getInstance().handler.onModulesLoadedWithData();modules.forEach((module=>{const moduleWrapper=new ModuleWrapperElement;moduleWrapper.module=module;moduleWrapper.setAttribute("draggable",this.dragEnabled_);moduleWrapper.addEventListener("dragstart",(event=>{this.onDragStart_(event)}));moduleWrapper.addEventListener("dismiss-module",(event=>{this.onDismissModule_(event)}));moduleWrapper.addEventListener("disable-module",(event=>{this.onDisableModule_(event)}));moduleWrapper.hidden=this.moduleDisabled_(module.descriptor.id);const moduleContainer=this.ownerDocument.createElement("div");moduleContainer.classList.add("module-container");moduleContainer.appendChild(moduleWrapper);this.$.modules.appendChild(moduleContainer)}));this.onModulesLoaded_()}}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.key==="z"){this.onUndoRemoveModuleButtonClick_()}}onModulesLoaded_(){this.modulesLoaded_=true}computeModulesLoadedAndVisibilityDetermined_(){return this.modulesLoaded_&&this.modulesVisibilityDetermined_}onModulesLoadedAndVisibilityDeterminedChange_(){if(this.modulesLoadedAndVisibilityDetermined_){this.shadowRoot.querySelectorAll("ntp-module-wrapper").forEach((({module:module})=>{chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${module.descriptor.id}`,!this.disabledModules_.all&&!this.disabledModules_.ids.includes(module.descriptor.id))}));chrome.metricsPrivate.recordBoolean("NewTabPage.Modules.VisibleOnNTPLoad",!this.disabledModules_.all);this.dispatchEvent(new Event("modules-loaded"))}}onDismissModule_(e){const id=e.target.module.descriptor.id;const restoreCallback=e.detail.restoreCallback;this.removedModuleData_={message:e.detail.message,undo:()=>{this.splice("dismissedModules_",this.dismissedModules_.indexOf(id),1);restoreCallback();NewTabPageProxy.getInstance().handler.onRestoreModule(id)}};if(!this.dismissedModules_.includes(id)){this.push("dismissedModules_",id)}$$(this,"#removeModuleToast").show();NewTabPageProxy.getInstance().handler.onDismissModule(id)}onDisableModule_(e){const id=e.target.module.descriptor.id;const restoreCallback=e.detail.restoreCallback;this.removedModuleData_={message:e.detail.message,undo:()=>{if(restoreCallback){restoreCallback()}NewTabPageProxy.getInstance().handler.setModuleDisabled(id,false);chrome.metricsPrivate.recordSparseHashable("NewTabPage.Modules.Enabled",id);chrome.metricsPrivate.recordSparseHashable("NewTabPage.Modules.Enabled.Toast",id)}};NewTabPageProxy.getInstance().handler.setModuleDisabled(id,true);$$(this,"#removeModuleToast").show();chrome.metricsPrivate.recordSparseHashable("NewTabPage.Modules.Disabled",id);chrome.metricsPrivate.recordSparseHashable("NewTabPage.Modules.Disabled.ModuleRequest",id)}moduleDisabled_(id){return this.disabledModules_.all||this.dismissedModules_.includes(id)||this.disabledModules_.ids.includes(id)}onUndoRemoveModuleButtonClick_(){if(!this.removedModuleData_){return}this.removedModuleData_.undo();$$(this,"#removeModuleToast").hide();this.removedModuleData_=null}onRemovedModulesChange_(){this.shadowRoot.querySelectorAll("ntp-module-wrapper").forEach((moduleWrapper=>{moduleWrapper.hidden=this.moduleDisabled_(moduleWrapper.module.descriptor.id)}))}onDragStart_(e){assert(loadTimeData.getBoolean("modulesDragAndDropEnabled"));if(e.dataTransfer){e.dataTransfer.setDragImage(new Image,0,0);e.dataTransfer.effectAllowed="move"}const dragElement=e.target;const dragElementRect=dragElement.getBoundingClientRect();const dragOffset={x:e.x-dragElementRect.x,y:e.y-dragElementRect.y};dragElement.parentElement.style.width=`${dragElementRect.width}px`;dragElement.parentElement.style.height=`${dragElementRect.height}px`;const dragOver=e=>{e.preventDefault();if(e.dataTransfer){e.dataTransfer.dropEffect="move"}dragElement.setAttribute("dragging","");dragElement.style.left=`${e.x-dragOffset.x}px`;dragElement.style.top=`${e.y-dragOffset.y}px`};const dragEnter=e=>{const moduleContainers=Array.from(this.$.modules.childNodes);const dragIndex=moduleContainers.indexOf(dragElement.parentElement);const dropIndex=moduleContainers.indexOf(e.target.parentElement);const positionType=dragIndex>dropIndex?"beforebegin":"afterend";const dragContainer=moduleContainers[dragIndex];const previousContainer=moduleContainers[dropIndex];dragContainer.remove();previousContainer.insertAdjacentElement(positionType,dragContainer)};const undraggedModuleWrappers=Array.from(this.shadowRoot.querySelectorAll("ntp-module-wrapper")).filter((moduleWrapper=>moduleWrapper!==dragElement));undraggedModuleWrappers.forEach((moduleWrapper=>{moduleWrapper.addEventListener("dragenter",dragEnter)}));this.ownerDocument.addEventListener("dragover",dragOver);this.ownerDocument.addEventListener("dragend",(()=>{this.ownerDocument.removeEventListener("dragover",dragOver);undraggedModuleWrappers.forEach((moduleWrapper=>{moduleWrapper.removeEventListener("dragenter",dragEnter)}));dragElement.removeAttribute("dragging");dragElement.style.removeProperty("left");dragElement.style.removeProperty("top")}),{once:true})}}customElements.define(ModulesElement.is,ModulesElement);// Copyright 2016 The Chromium Authors. All rights reserved.
var PromiseResolver=class{constructor(){this.resolve_;this.reject_;this.isFulfilled_=false;this.promise_=new Promise(((resolve,reject)=>{this.resolve_=resolution=>{resolve(resolution);this.isFulfilled_=true};this.reject_=reason=>{reject(reason);this.isFulfilled_=true}}))}get isFulfilled(){return this.isFulfilled_}set isFulfilled(i){assertNotReached()}get promise(){return this.promise_}set promise(p){assertNotReached()}get resolve(){return this.resolve_}set resolve(r){assertNotReached()}get reject(){return this.reject_}set reject(s){assertNotReached()}};// Copyright 2020 The Chromium Authors. All rights reserved.
class LoadTimeResolver{constructor(url){this.resolver_=new PromiseResolver;this.eventTracker_=new EventTracker;this.eventTracker_.add(window,"message",(({data:data})=>{if(data.frameType==="background-image"&&data.messageType==="loaded"&&url===data.url){this.resolve_(data.time)}}))}get promise(){return this.resolver_.promise}reject(){this.resolver_.reject();this.eventTracker_.removeAll()}resolve_(loadTime){this.resolver_.resolve(loadTime);this.eventTracker_.removeAll()}}let instance$1=null;class BackgroundManager{static getInstance(){return instance$1||(instance$1=new BackgroundManager)}static setInstance(newInstance){instance$1=newInstance}constructor(){this.backgroundImage_=strictQuery(document.body,"#backgroundImage",HTMLIFrameElement);this.loadTimeResolver_=null;this.url_=this.backgroundImage_.src}setShowBackgroundImage(show){document.body.toggleAttribute("show-background-image",show)}setBackgroundColor(color){document.body.style.backgroundColor=skColorToRgba(color)}setBackgroundImage(image){const url=new URL("chrome-untrusted://new-tab-page/custom_background_image");url.searchParams.append("url",image.url.url);if(image.url2x){url.searchParams.append("url2x",image.url2x.url)}if(image.size){url.searchParams.append("size",image.size)}if(image.repeatX){url.searchParams.append("repeatX",image.repeatX)}if(image.repeatY){url.searchParams.append("repeatY",image.repeatY)}if(image.positionX){url.searchParams.append("positionX",image.positionX)}if(image.positionY){url.searchParams.append("positionY",image.positionY)}if(url.href===this.url_){return}if(this.loadTimeResolver_){this.loadTimeResolver_.reject();this.loadTimeResolver_=null}this.backgroundImage_.contentWindow.location.replace(url.href);this.url_=url.href}getBackgroundImageLoadTime(){if(!this.loadTimeResolver_){this.loadTimeResolver_=new LoadTimeResolver(this.backgroundImage_.src);WindowProxy.getInstance().postMessage(this.backgroundImage_,"sendLoadTime","chrome-untrusted://new-tab-page")}return this.loadTimeResolver_.promise}}// Copyright 2019 The Chromium Authors. All rights reserved.
const NtpElement={kOther:0,kBackground:1,kOneGoogleBar:2,kLogo:3,kRealbox:4,kMostVisited:5,kMiddleSlotPromo:6,kModule:7,kCustomize:8};function recordClick(element){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.Click",element,Object.keys(NtpElement).length)}function ensureLazyLoaded(){const script=document.createElement("script");script.type="module";script.src="./lazy_load.js";document.body.appendChild(script)}class AppElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"ntp-app"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-shared-style" scope="ntp-app">:host {
  --ntp-theme-text-color: var(--google-grey-800);
    --ntp-theme-text-shadow: none;
    --ntp-one-google-bar-height: 56px;
    --ntp-search-box-width: 337px;
    --ntp-module-width: var(--ntp-search-box-width);
    --ntp-module-border-radius: 5px;
}

@media (min-width: 560px) {
:host {
  --ntp-search-box-width: 449px;
}

}

@media (min-width: 672px) {
:host {
  --ntp-search-box-width: 561px;
}

}

@media (prefers-color-scheme: dark) {
:host {
  --ntp-theme-text-color: white;
}

}

:host([modules-redesigned-enabled_]) {
  --ntp-module-border-radius: 24px;
    --ntp-module-width: 361px;
}

:host([show-background-image_]) {
  --ntp-theme-text-shadow: 0 0 16px rgba(0, 0, 0, .3);
}

#oneGoogleBar {
  height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
}

#content {
  align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--ntp-one-google-bar-height));
    min-width: fit-content;  
    padding-top: var(--ntp-one-google-bar-height);
    position: relative;
    z-index: 1;
}

#logo {
  margin-bottom: 38px;
    z-index: 1;
}

ntp-realbox {
  margin-bottom: 16px;
}

ntp-realbox {
  flex-shrink: 0;
    width: var(--ntp-search-box-width);
}

ntp-modules {
  flex-shrink: 0;
    width: var(--ntp-module-width);
}

ntp-middle-slot-promo {
  max-width: var(--ntp-search-box-width);
}

ntp-realbox {
  visibility: hidden;
}

ntp-realbox[shown] {
  visibility: visible;
}

cr-most-visited {
  --most-visited-focus-shadow: var(--ntp-focus-shadow);
    --most-visited-text-color: var(--ntp-theme-text-color);
    --most-visited-text-shadow: var(--ntp-theme-text-shadow);
}

ntp-middle-slot-promo:not([hidden]) ~ ntp-modules {
  margin-top: 16px;
}

#customizeButtonContainer {
  background-color: var(--ntp-background-override-color);
    border-radius: calc(.5 * var(--cr-button-height));
    bottom: 16px;
    position: fixed;
}

:host-context([dir='ltr']) #customizeButtonContainer {
  right: 16px;
}

:host-context([dir='rtl']) #customizeButtonContainer {
  left: 16px;
}

:host([show-background-image_]) #customizeButtonContainer {
  background-color: transparent;
}

:host([show-background-image_]) #customizeButtonContainer:hover {
  background-color: rgba(255, 255, 255, .1);
}

#customizeButton {
  border: none;
    border-radius: calc(.5 * var(--cr-button-height));
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23);
    font-weight: 400;
    min-width: 32px;
}

:host([show-background-image_]) #customizeButton {
  box-shadow: none;
    padding: 0;
}

:host-context(.focus-outline-visible) #customizeButton:focus {
  box-shadow: var(--ntp-focus-shadow);
}

#customizeIcon {
  -webkit-mask-image: url(icons/icon_pencil.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--text-color);
    height: 16px;
    margin-inline-end: 8px;
    width: 16px;
}

:host([show-background-image_]) #customizeIcon {
  background-color: white;
    margin: 0;
}

@media (max-width: 550px) {
#customizeButton {
  padding: 0;
}

#customizeIcon {
  margin: 0;
}

#customizeText {
  display: none;
}

}

#themeAttribution {
  align-self: flex-start;
    bottom: 16px;
    color: var(--cr-secondary-text-color);
    margin-inline-start: 16px;
    position: fixed;
}

#backgroundImageAttribution {
  border-radius: 8px;
    bottom: 16px;
    color: var(--ntp-theme-text-color);
    line-height: 20px;
    max-width: 50vw;
    padding: 8px;
    position: fixed;
    text-shadow: var(--ntp-theme-text-shadow);
    z-index: -1;
}

:host-context([dir='ltr']) #backgroundImageAttribution {
  left: 16px;
}

:host-context([dir='rtl']) #backgroundImageAttribution {
  right: 16px;
}

#backgroundImageAttribution:hover {
  background: rgba(var(--google-grey-900-rgb), .1);
}

#backgroundImageAttribution1Container {
  align-items: center;
    display: flex;
    flex-direction: row;
}

#linkIcon {
  -webkit-mask-image: url(icons/link.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-theme-text-color);
    height: 16px;
    margin-inline-end: 8px;
    width: 16px;
}

#backgroundImageAttribution1, #backgroundImageAttribution2 {
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#backgroundImageAttribution1 {
  font-size: .875rem;
}

#backgroundImageAttribution2 {
  font-size: .75rem;
}

#contentBottomSpacer {
  flex-shrink: 0;
    height: 32px;
    width: 1px;
}

svg {
  position: fixed;
}

</style>
<div id="content" style="
        --ntp-theme-text-color: [[rgbaOrInherit_(theme_.textColor)]];
        --ntp-logo-color: [[rgbaOrInherit_(logoColor_)]];">
  <template is="dom-if" if="[[lazyRender_]]">
    <ntp-iframe id="oneGoogleBar" src="[[oneGoogleBarIframePath_]]" hidden$="[[!oneGoogleBarLoaded_]]">
    </ntp-iframe>
  </template>
  <!-- TODO(crbug.com/1168361): Instead of hidden$="[[!logoEnabled_]]" it would
       be nicer to use a dom-if. However, that breaks
       StartupBrowserCreatorPickerNoParamsTest.ShowPickerWhenAlreadyLaunched on
       the msan builder. See crbug.com/1169070. -->
  <ntp-logo id="logo" single-colored$="[[singleColoredLogo_]]" dark="[[theme_.isDark]]" background-color="[[backgroundColor_]]" hidden$="[[!logoEnabled_]]">
  </ntp-logo>
  <ntp-realbox id="realbox" on-open-voice-search="onOpenVoiceSearch_" theme="[[theme_.searchBox]]" shown$="[[realboxShown_]]">
  </ntp-realbox>
  <dom-if if="[[lazyRender_]]" on-dom-change="onLazyRendered_">
    <template>
      <template is="dom-if" if="[[shortcutsEnabled_]]">
        <cr-most-visited id="mostVisited" theme="[[theme_.mostVisited]]">
        </cr-most-visited>
      </template>
      <template is="dom-if" if="[[middleSlotPromoEnabled_]]">
        <ntp-middle-slot-promo on-ntp-middle-slot-promo-loaded="onMiddleSlotPromoLoaded_" hidden="[[!promoAndModulesLoaded_]]">
        </ntp-middle-slot-promo>
      </template>
      <template is="dom-if" if="[[modulesEnabled_]]">
        <ntp-modules id="modules" on-modules-loaded="onModulesLoaded_" on-customize-module="onCustomizeModule_" hidden="[[!promoAndModulesLoaded_]]">
        </ntp-modules>
      </template>
      <a id="backgroundImageAttribution" href="[[backgroundImageAttributionUrl_]]" hidden="[[!backgroundImageAttribution1_]]">
        <div id="backgroundImageAttribution1Container">
          <div id="linkIcon"></div>
          <div id="backgroundImageAttribution1">
            [[backgroundImageAttribution1_]]
          </div>
        </div>
        <div id="backgroundImageAttribution2" hidden="[[!backgroundImageAttribution2_]]">
          [[backgroundImageAttribution2_]]
        </div>
      </a>
      <!-- cr-button has a transparent background. This leads to incorrect
           results when a custom background is set. Therefore, wrap customize
           button in container to enfore solid background color. -->
      <div id="customizeButtonContainer">
        <cr-button id="customizeButton" on-click="onCustomizeClick_" title="[[i18n('customizeThisPage')]]">
          <div id="customizeIcon"></div>
          <div id="customizeText" hidden$="[[showBackgroundImage_]]">
            [[i18n('customizeButton')]]
          </div>
        </cr-button>
      </div>
      <div id="themeAttribution" hidden$="[[!theme_.backgroundImage.attributionUrl]]">
        <div>[[i18n('themeCreatedBy')]]</div>
        <img src="[[theme_.backgroundImage.attributionUrl.url]]"><img>
      </div>
    </template>
  </dom-if>
  <div id="contentBottomSpacer"></div>
</div>
<dom-if if="[[showVoiceSearchOverlay_]]" restamp="">
  <template>
    <ntp-voice-search-overlay on-close="onVoiceSearchOverlayClose_">
    </ntp-voice-search-overlay>
  </template>
</dom-if>
<template id="customizeDialogIf" is="dom-if" if="[[showCustomizeDialog_]]" restamp="">
  <ntp-customize-dialog on-close="onCustomizeDialogClose_" theme="[[theme_]]" background-selection="{{backgroundSelection_}}" selected-page="[[selectedCustomizeDialogPage_]]">
  </ntp-customize-dialog>
</template>
<svg>
  <defs>
    <clipPath id="oneGoogleBarClipPath">
      <!-- Set an initial non-empty clip-path so the OneGoogleBar resize events
           are processed. When the clip-path is empty, it's possible for the
           OneGoogleBar to get into a state where it does not send  the
           'overlayUpdates' message which is used to populate this
           clip-path. -->
      <rect x="0" y="0" width="1" height="1"></rect>
    </clipPath>
  </defs>
</svg>
<!--_html_template_end_-->`}static get properties(){return{oneGoogleBarIframePath_:{type:String,value:()=>{const params=new URLSearchParams;params.set("paramsencoded",btoa(window.location.search.replace(/^[?]/,"&")));return`chrome-untrusted://new-tab-page/one-google-bar?${params}`}},oneGoogleBarLoaded_:{type:Boolean,observer:"notifyOneGoogleBarDarkThemeEnabledChange_"},oneGoogleBarDarkThemeEnabled_:{type:Boolean,computed:`computeOneGoogleBarDarkThemeEnabled_(oneGoogleBarLoaded_,\n            theme_, backgroundSelection_)`,observer:"notifyOneGoogleBarDarkThemeEnabledChange_"},theme_:{observer:"onThemeChange_",type:Object},showCustomizeDialog_:Boolean,selectedCustomizeDialogPage_:String,showVoiceSearchOverlay_:Boolean,showBackgroundImage_:{computed:"computeShowBackgroundImage_(theme_, backgroundSelection_)",observer:"onShowBackgroundImageChange_",reflectToAttribute:true,type:Boolean},backgroundSelection_:{type:Object,value:()=>({type:BackgroundSelectionType.NO_SELECTION}),observer:"updateBackgroundImagePath_"},backgroundImageAttribution1_:{type:String,computed:`computeBackgroundImageAttribution1_(theme_,\n            backgroundSelection_)`},backgroundImageAttribution2_:{type:String,computed:`computeBackgroundImageAttribution2_(theme_,\n            backgroundSelection_)`},backgroundImageAttributionUrl_:{type:String,computed:`computeBackgroundImageAttributionUrl_(theme_,\n            backgroundSelection_)`},backgroundColor_:{computed:"computeBackgroundColor_(showBackgroundImage_, theme_)",type:Object},logoColor_:{type:String,computed:"computeLogoColor_(theme_, backgroundSelection_)"},singleColoredLogo_:{computed:"computeSingleColoredLogo_(theme_, backgroundSelection_)",type:Boolean},realboxShown_:{type:Boolean,computed:"computeRealboxShown_(theme_)"},logoEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("logoEnabled")},shortcutsEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("shortcutsEnabled")},middleSlotPromoEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("middleSlotPromoEnabled")},modulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesEnabled")},modulesRedesignedEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesRedesignedEnabled"),reflectToAttribute:true},middleSlotPromoLoaded_:{type:Boolean,value:false},modulesLoaded_:{type:Boolean,value:false},promoAndModulesLoaded_:{type:Boolean,computed:`computePromoAndModulesLoaded_(middleSlotPromoLoaded_,\n            modulesLoaded_)`,observer:"onPromoAndModulesLoadedChange_"},lazyRender_:Boolean}}constructor(){performance.mark("app-creation-start");super();this.callbackRouter_=NewTabPageProxy.getInstance().callbackRouter;this.pageHandler_=NewTabPageProxy.getInstance().handler;this.backgroundManager_=BackgroundManager.getInstance();this.setThemeListenerId_=null;this.eventTracker_=new EventTracker;this.shouldPrintPerformance_=new URLSearchParams(location.search).has("print_perf");this.backgroundImageLoadStartEpoch_=performance.timeOrigin;this.backgroundImageLoadStart_=0}connectedCallback(){super.connectedCallback();this.setThemeListenerId_=this.callbackRouter_.setTheme.addListener((theme=>{performance.measure("theme-set");this.theme_=theme}));this.eventTracker_.add(window,"message",(event=>{const data=event.data;if(typeof data!=="object"){return}if("frameType"in data&&data.frameType==="one-google-bar"){this.handleOneGoogleBarMessage_(event)}}));this.eventTracker_.add(window,"keydown",(e=>this.onWindowKeydown_(e)));this.eventTracker_.add(window,"click",(e=>this.onWindowClick_(e)),true);if(this.shouldPrintPerformance_){this.backgroundManager_.getBackgroundImageLoadTime().then((time=>{const duration=time-this.backgroundImageLoadStartEpoch_;this.printPerformanceDatum_("background-image-load",this.backgroundImageLoadStart_,duration);this.printPerformanceDatum_("background-image-loaded",this.backgroundImageLoadStart_+duration)}),(()=>{console.error("Failed to capture background image load time")}))}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.setThemeListenerId_));this.eventTracker_.removeAll()}ready(){super.ready();this.pageHandler_.onAppRendered(WindowProxy.getInstance().now());WindowProxy.getInstance().waitForLazyRender().then((()=>{ensureLazyLoaded();this.lazyRender_=true}));this.printPerformance_();performance.measure("app-creation","app-creation-start")}computeOneGoogleBarDarkThemeEnabled_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:case BackgroundSelectionType.NO_SELECTION:default:return this.theme_&&this.theme_.isDark}}notifyOneGoogleBarDarkThemeEnabledChange_(){if(this.oneGoogleBarLoaded_){$$(this,"#oneGoogleBar").postMessage({type:"enableDarkTheme",enabled:this.oneGoogleBarDarkThemeEnabled_})}}computeBackgroundImageAttribution1_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttribution1||"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attribution1;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeBackgroundImageAttribution2_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttribution2||"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attribution2;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeBackgroundImageAttributionUrl_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttributionUrl?this.theme_.backgroundImageAttributionUrl.url:"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attributionUrl.url;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeRealboxShown_(){return!loadTimeData.getBoolean("realboxMatchOmniboxTheme")||!!this.theme_}computePromoAndModulesLoaded_(){return(!loadTimeData.getBoolean("middleSlotPromoEnabled")||this.middleSlotPromoLoaded_)&&(!loadTimeData.getBoolean("modulesEnabled")||this.modulesLoaded_)}async onLazyRendered_(){if(!loadTimeData.getBoolean("modulesLoadEnabled")||loadTimeData.getBoolean("modulesEnabled")){return}const modules=await ModuleRegistry.getInstance().initializeModules(loadTimeData.getInteger("modulesLoadTimeout"));if(modules){this.pageHandler_.onModulesLoadedWithData()}}onOpenVoiceSearch_(){this.showVoiceSearchOverlay_=true;recordVoiceAction(Action.kActivateSearchBox)}onCustomizeClick_(){this.showCustomizeDialog_=true}onCustomizeDialogClose_(){this.showCustomizeDialog_=false;this.selectedCustomizeDialogPage_=null}onVoiceSearchOverlayClose_(){this.showVoiceSearchOverlay_=false}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.code==="Period"&&e.shiftKey){this.showVoiceSearchOverlay_=true;recordVoiceAction(Action.kActivateKeyboard)}}rgbaOrInherit_(skColor){return skColor?skColorToRgba(skColor):"inherit"}computeShowBackgroundImage_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return!!this.theme_&&!!this.theme_.backgroundImage;case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return false}}onShowBackgroundImageChange_(){this.backgroundManager_.setShowBackgroundImage(this.showBackgroundImage_)}onThemeChange_(){if(this.theme_){this.backgroundManager_.setBackgroundColor(this.theme_.backgroundColor)}this.updateBackgroundImagePath_()}onPromoAndModulesLoadedChange_(){if(this.promoAndModulesLoaded_){recordLoadDuration("NewTabPage.Modules.ShownTime",WindowProxy.getInstance().now())}}updateBackgroundImagePath_(){if(!this.showCustomizeDialog_&&this.backgroundSelection_.type!==BackgroundSelectionType.NO_SELECTION){if(this.backgroundSelection_.type===BackgroundSelectionType.NO_BACKGROUND){setTimeout((()=>{this.backgroundSelection_={type:BackgroundSelectionType.NO_SELECTION}}),100)}else{this.backgroundSelection_={type:BackgroundSelectionType.NO_SELECTION}}}let backgroundImage;switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:backgroundImage=this.theme_&&this.theme_.backgroundImage;break;case BackgroundSelectionType.IMAGE:backgroundImage={url:{url:this.backgroundSelection_.image.imageUrl.url}};break}if(backgroundImage){this.backgroundManager_.setBackgroundImage(backgroundImage)}}computeBackgroundColor_(){if(this.showBackgroundImage_){return null}return this.theme_&&this.theme_.backgroundColor}computeLogoColor_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return hexColorToSkColor("#ffffff");case BackgroundSelectionType.NO_SELECTION:case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return this.theme_&&(this.theme_.logoColor||(this.theme_.isDark?hexColorToSkColor("#ffffff"):null))}}computeSingleColoredLogo_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.DAILY_REFRESH:case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.NO_SELECTION:default:return this.theme_&&(!!this.theme_.logoColor||this.theme_.isDark)}}canShowPromoWithBrowserCommand_(messageData,commandSource,commandOrigin){const commandId=Object.values(promoBrowserCommand.mojom.Command).includes(messageData.commandId)?messageData.commandId:promoBrowserCommand.mojom.Command.kUnknownCommand;PromoBrowserCommandProxy.getInstance().handler.canShowPromoWithCommand(commandId).then((({canShow:canShow})=>{const response={messageType:messageData.messageType};response[messageData.commandId]=canShow;commandSource.postMessage(response,commandOrigin)}))}executePromoBrowserCommand_(commandData,commandSource,commandOrigin){const commandId=Object.values(promoBrowserCommand.mojom.Command).includes(commandData.commandId)?commandData.commandId:promoBrowserCommand.mojom.Command.kUnknownCommand;PromoBrowserCommandProxy.getInstance().handler.executeCommand(commandId,commandData.clickInfo).then((({commandExecuted:commandExecuted})=>{commandSource.postMessage(commandExecuted,commandOrigin)}))}handleOneGoogleBarMessage_(event){const data=event.data;if(data.messageType==="loaded"){const oneGoogleBar=$$(this,"#oneGoogleBar");oneGoogleBar.style.clipPath="url(#oneGoogleBarClipPath)";oneGoogleBar.style.zIndex="1000";this.oneGoogleBarLoaded_=true;this.pageHandler_.onOneGoogleBarRendered(WindowProxy.getInstance().now())}else if(data.messageType==="overlaysUpdated"){this.$.oneGoogleBarClipPath.querySelectorAll("rect").forEach((el=>{el.remove()}));const overlayRects=data.data;overlayRects.forEach((({x:x,y:y,width:width,height:height})=>{const rectElement=document.createElementNS("http://www.w3.org/2000/svg","rect");rectElement.setAttribute("x",x-8);rectElement.setAttribute("y",y-8);rectElement.setAttribute("width",width+16);rectElement.setAttribute("height",height+16);this.$.oneGoogleBarClipPath.appendChild(rectElement)}))}else if(data.messageType==="can-show-promo-with-browser-command"){this.canShowPromoWithBrowserCommand_(data,event.source,event.origin)}else if(data.messageType==="execute-browser-command"){this.executePromoBrowserCommand_(data.data,event.source,event.origin)}else if(data.messageType==="click"){recordClick(NtpElement.kOneGoogleBar)}}onMiddleSlotPromoLoaded_(){this.middleSlotPromoLoaded_=true}onModulesLoaded_(){this.modulesLoaded_=true}onCustomizeModule_(){this.showCustomizeDialog_=true;this.selectedCustomizeDialogPage_=CustomizeDialogPage.MODULES}printPerformanceDatum_(name,time,auxTime=0){if(!this.shouldPrintPerformance_){return}if(!auxTime){console.log(`${name}: ${time}`)}else{console.log(`${name}: ${time} (${auxTime})`)}}printPerformance_(){if(!this.shouldPrintPerformance_){return}const entryTypes=["paint","measure"];const log=entry=>{this.printPerformanceDatum_(entry.name,entry.duration?entry.duration:entry.startTime,entry.duration&&entry.startTime?entry.startTime:0)};const observer=new PerformanceObserver((list=>{list.getEntries().forEach((entry=>{log(entry)}))}));observer.observe({entryTypes:entryTypes});performance.getEntries().forEach((entry=>{if(!entryTypes.includes(entry.entryType)){return}log(entry)}))}onWindowClick_(e){if(e.composedPath()&&e.composedPath()[0]===$$(this,"#content")){recordClick(NtpElement.kBackground);return}for(const target of e.composedPath()){switch(target){case $$(this,"ntp-logo"):recordClick(NtpElement.kLogo);return;case $$(this,"ntp-realbox"):recordClick(NtpElement.kRealbox);return;case $$(this,"cr-most-visited"):recordClick(NtpElement.kMostVisited);return;case $$(this,"ntp-middle-slot-promo"):recordClick(NtpElement.kMiddleSlotPromo);return;case $$(this,"ntp-modules"):recordClick(NtpElement.kModule);return;case $$(this,"#customizeButton"):case $$(this,"ntp-customize-dialog"):recordClick(NtpElement.kCustomize);return}}recordClick(NtpElement.kOther)}}customElements.define(AppElement.is,AppElement);export{BackgroundManager,ModulesElement,NtpElement,RealboxBrowserProxy};
