webpackJsonp([0x8d88395193dc],{768:function(e,l){e.exports={data:{Panel:{composes:null,displayName:"Panel",description:null,props:[{name:"expanded",doclets:{type:null,controllable:"onToggle"},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Controls the collapsed/expanded state ofthe Panel. Requires\na <code>Panel.Collapse</code> or <code>&#x3C;Panel.Body collapsible></code> child component\nin order to actually animate out or in.</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"onToggle",doclets:{type:null,controllable:"expanded"},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A callback fired when the collapse state changes.</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"eventKey",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A unique identifier for the Component, the <code>eventKey</code> makes it distinguishable from others in a set. Similar to React's <code>key</code> prop, in that it only needs to be unique amoungst the Components siblings, not globally.</p>"}},required:!1,type:{name:"any",value:null,raw:null}},{name:"id",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>An HTML <code>id</code> attribute uniquely identifying the Panel component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelHeading:{composes:null,displayName:"PanelHeading",description:null,props:[{name:"componentClass",doclets:{type:null,controllable:null},defaultValue:{value:"'div'",computed:!1},description:{childMarkdownRemark:{html:"<p>You can use a custom element type for this component.</p>"}},required:!1,type:{name:"custom",value:null,raw:"elementType"}},{name:"bsClass",doclets:{type:null,controllable:null},defaultValue:{value:"'panel'",computed:null},description:{childMarkdownRemark:{html:"<p>Base CSS class and prefix for the component. Generally one should only change <code>bsClass</code> to provide new, non-Bootstrap, CSS styles for a component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelTitle:{composes:null,displayName:"PanelTitle",description:null,props:[{name:"componentClass",doclets:{type:null,controllable:null},defaultValue:{value:"'div'",computed:!1},description:{childMarkdownRemark:{html:"<p>You can use a custom element type for this component.</p>"}},required:!1,type:{name:"custom",value:null,raw:"elementType"}},{name:"toggle",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A convenience prop that renders the Panel.Title as a panel collapse toggle component\nfor the common use-case.</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"bsClass",doclets:{type:null,controllable:null},defaultValue:{value:"'panel'",computed:null},description:{childMarkdownRemark:{html:"<p>Base CSS class and prefix for the component. Generally one should only change <code>bsClass</code> to provide new, non-Bootstrap, CSS styles for a component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelBody:{composes:null,displayName:"PanelBody",description:null,props:[{name:"collapsible",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:'<p>A convenience prop that renders a Collapse component around the Body for\nsituations when the parent Panel only contains a single Panel.Body child.</p>\n<p>renders:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel.Collapse</span><span class="token punctuation">></span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel.Body</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel.Collapse</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>'}},required:!0,type:{name:"bool",value:null,raw:null}},{name:"bsClass",doclets:{type:null,controllable:null},defaultValue:{value:"'panel'",computed:null},description:{childMarkdownRemark:{html:"<p>Base CSS class and prefix for the component. Generally one should only change <code>bsClass</code> to provide new, non-Bootstrap, CSS styles for a component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelFooter:{composes:null,displayName:"PanelFooter",description:null,props:[{name:"bsClass",doclets:{type:null,controllable:null},defaultValue:{value:"'panel'",computed:null},description:{childMarkdownRemark:{html:"<p>Base CSS class and prefix for the component. Generally one should only change <code>bsClass</code> to provide new, non-Bootstrap, CSS styles for a component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelToggle:{composes:null,displayName:"PanelToggle",description:null,props:[{name:"onClick",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>only here to satisfy linting, just the html onClick handler.</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"componentClass",doclets:{type:null,controllable:null},defaultValue:{value:"SafeAnchor",computed:!0},description:{childMarkdownRemark:{html:"<p>You can use a custom element for this component</p>"}},required:!1,type:{name:"custom",value:null,raw:"elementType"}}]},PanelCollapse:{composes:null,displayName:"PanelCollapse",description:null,props:[{name:"onEnter",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component expands</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntering",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to expand</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntered",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component has expanded</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExit",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component collapses</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExiting",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to collapse</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExited",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component has collapsed</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"bsClass",doclets:{type:null,controllable:null},defaultValue:{value:"'panel'",computed:null},description:{childMarkdownRemark:{html:"<p>Base CSS class and prefix for the component. Generally one should only change <code>bsClass</code> to provide new, non-Bootstrap, CSS styles for a component.</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]},PanelGroup:{composes:null,displayName:"PanelGroup",description:null,props:[{name:"accordion",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:null,required:!1,type:{name:"bool",value:null,raw:null}},{name:"activeKey",doclets:{type:null,controllable:"onSelect"},defaultValue:null,description:{childMarkdownRemark:{html:"<p>When <code>accordion</code> is enabled, <code>activeKey</code> controls the which child <code>Panel</code> is expanded. <code>activeKey</code> should\nmatch a child Panel <code>eventKey</code> prop exactly.</p>"}},required:!1,type:{name:"any",value:null,raw:null}},{name:"onSelect",doclets:{type:null,controllable:"activeKey"},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A callback fired when a child Panel collapse state changes. It's called with the next expanded <code>activeKey</code></p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"role",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>An HTML role attribute</p>"}},required:!1,type:{name:"string",value:null,raw:null}},{name:"generateChildId",doclets:{type:null,controllable:null},defaultValue:{value:"(eventKey, type) => `${this.props.id}-${type}-${key}`",computed:!1},description:{childMarkdownRemark:{html:'<p>A function that takes an eventKey and type and returns a\nunique id for each Panel heading and Panel Collapse. The function <em>must</em> be a pure function,\nmeaning it should always return the <em>same</em> id for the same set of inputs. The default\nvalue requires that an <code>id</code> to be set for the PanelGroup.</p>\n<p>The <code>type</code> argument will either be <code>"body"</code> or <code>"heading"</code>.</p>'}},required:!1,type:{name:"func",value:null,raw:null}},{name:"id",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>HTML id attribute, required if no <code>generateChildId</code> prop\nis specified.</p>"}},required:!1,type:{name:"custom",value:null,raw:"generatedId('PanelGroup')"}}]}},pathContext:{}}}});
//# sourceMappingURL=path---components-panel-9f465d9c1ce44379e522.js.map