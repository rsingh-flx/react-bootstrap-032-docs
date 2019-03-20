webpackJsonp([74263472514568],{394:function(t,e){"use strict";t.exports="<ButtonGroup>\r\n  <Button>Left</Button>\r\n  <Button>Middle</Button>\r\n  <Button>Right</Button>\r\n</ButtonGroup>;\r\n"},395:function(t,e){"use strict";t.exports="<ButtonGroup vertical block>\r\n  <Button>Full width button</Button>\r\n  <Button>Full width button</Button>\r\n</ButtonGroup>;\r\n"},396:function(t,e){"use strict";t.exports='<ButtonGroup justified>\r\n  <Button href="#">Left</Button>\r\n  <Button href="#">Middle</Button>\r\n  <DropdownButton title="Dropdown" id="bg-justified-dropdown">\r\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\r\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\r\n  </DropdownButton>\r\n</ButtonGroup>;\r\n'},397:function(t,e){"use strict";t.exports='<ButtonGroup>\r\n  <Button>1</Button>\r\n  <Button>2</Button>\r\n  <DropdownButton title="Dropdown" id="bg-nested-dropdown">\r\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\r\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\r\n  </DropdownButton>\r\n</ButtonGroup>;\r\n'},398:function(t,e){"use strict";t.exports='<div>\r\n  <ButtonToolbar>\r\n    <ButtonGroup bsSize="large">\r\n      <Button>Left</Button>\r\n      <Button>Middle</Button>\r\n      <Button>Right</Button>\r\n    </ButtonGroup>\r\n  </ButtonToolbar>\r\n\r\n  <ButtonToolbar>\r\n    <ButtonGroup>\r\n      <Button>Left</Button>\r\n      <Button>Middle</Button>\r\n      <Button>Right</Button>\r\n    </ButtonGroup>\r\n  </ButtonToolbar>\r\n\r\n  <ButtonToolbar>\r\n    <ButtonGroup bsSize="small">\r\n      <Button>Left</Button>\r\n      <Button>Middle</Button>\r\n      <Button>Right</Button>\r\n    </ButtonGroup>\r\n  </ButtonToolbar>\r\n\r\n  <ButtonToolbar>\r\n    <ButtonGroup bsSize="xsmall">\r\n      <Button>Left</Button>\r\n      <Button>Middle</Button>\r\n      <Button>Right</Button>\r\n    </ButtonGroup>\r\n  </ButtonToolbar>\r\n</div>;\r\n'},399:function(t,e){"use strict";t.exports='<ButtonGroup vertical>\r\n  <Button>Button</Button>\r\n  <Button>Button</Button>\r\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">\r\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\r\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\r\n  </DropdownButton>\r\n  <Button>Button</Button>\r\n  <Button>Button</Button>\r\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">\r\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\r\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\r\n  </DropdownButton>\r\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">\r\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\r\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\r\n  </DropdownButton>\r\n</ButtonGroup>;\r\n'},403:function(t,e){"use strict";t.exports="<ButtonToolbar>\r\n  <ButtonGroup>\r\n    <Button>1</Button>\r\n    <Button>2</Button>\r\n    <Button>3</Button>\r\n    <Button>4</Button>\r\n  </ButtonGroup>\r\n\r\n  <ButtonGroup>\r\n    <Button>5</Button>\r\n    <Button>6</Button>\r\n    <Button>7</Button>\r\n  </ButtonGroup>\r\n\r\n  <ButtonGroup>\r\n    <Button>8</Button>\r\n  </ButtonGroup>\r\n</ButtonToolbar>;\r\n"},496:function(t,e){"use strict";t.exports='class ToggleButtonGroupControlled extends React.Component {\r\n  constructor(props, context) {\r\n    super(props, context);\r\n\r\n    this.handleChange = this.handleChange.bind(this);\r\n\r\n    this.state = {\r\n      value: [1, 3]\r\n    };\r\n  }\r\n\r\n  handleChange(e) {\r\n    this.setState({ value: e });\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <ToggleButtonGroup\r\n        type="checkbox"\r\n        value={this.state.value}\r\n        onChange={this.handleChange}\r\n      >\r\n        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\r\n        <ToggleButton value={2}>Checkbox 2</ToggleButton>\r\n        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\r\n        <ToggleButton value={4} disabled>\r\n          Checkbox 4 (disabled)\r\n        </ToggleButton>\r\n      </ToggleButtonGroup>\r\n    );\r\n  }\r\n}\r\n\r\nrender(<ToggleButtonGroupControlled />);\r\n'},497:function(t,e){"use strict";t.exports='<div>\r\n  <ButtonToolbar>\r\n    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>\r\n      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\r\n      <ToggleButton value={2}>Checkbox 2</ToggleButton>\r\n      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\r\n    </ToggleButtonGroup>\r\n  </ButtonToolbar>\r\n\r\n  <ButtonToolbar>\r\n    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\r\n      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>\r\n      <ToggleButton value={2}>Radio 2</ToggleButton>\r\n      <ToggleButton value={3}>Radio 3</ToggleButton>\r\n    </ToggleButtonGroup>\r\n  </ButtonToolbar>\r\n</div>;\r\n'},510:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=t.data;return r.default.createElement("div",{className:"bs-docs-section"},r.default.createElement("h2",{className:"page-header"},r.default.createElement(d.default,{id:"btn-groups"},"Button groups")," ",r.default.createElement("small",null,"ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton")),r.default.createElement("p",{className:"lead"},"Group a series of buttons together on a single line with the button group."),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-single"},"Basic example")),r.default.createElement("p",null,"Wrap a series of ",r.default.createElement("code",null,"<Button />"),"s in a"," ",r.default.createElement("code",null,"<ButtonGroup />"),"."),r.default.createElement(f.default,{codeText:m.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-toolbar"},"Button toolbar")),r.default.createElement("p",null,"Combine sets of ",r.default.createElement("code",null,"<ButtonGroup />"),"s into a"," ",r.default.createElement("code",null,"<ButtonToolbar />")," for more complex components."),r.default.createElement(f.default,{codeText:b.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-sizing"},"Sizing")),r.default.createElement("p",null,"Instead of applying button sizing props to every button in a group, just add ",r.default.createElement("code",null,"bsSize")," prop to the ",r.default.createElement("code",null,"<ButtonGroup />"),"."),r.default.createElement(f.default,{codeText:T.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-nested"},"Nesting")),r.default.createElement("p",null,"You can place other button types within the"," ",r.default.createElement("code",null,"<ButtonGroup />")," like"," ",r.default.createElement("code",null,"<DropdownButton />"),"s."),r.default.createElement(f.default,{codeText:w.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-vertical"},"Vertical variation")),r.default.createElement("p",null,"Make a set of buttons appear vertically stacked rather than horizontally."," ",r.default.createElement("strong",{className:"text-danger"},"Split button dropdowns are not supported here.")),r.default.createElement("p",null,"Just add ",r.default.createElement("code",null,"vertical")," to the ",r.default.createElement("code",null,"<ButtonGroup />"),"."),r.default.createElement(f.default,{codeText:k.default}),r.default.createElement("br",null),r.default.createElement("p",null,"Moreover, you can have buttons be block level elements so they take the full width of their container, just add ",r.default.createElement("code",null,"block")," to the"," ",r.default.createElement("code",null,"<ButtonGroup />"),", in addition to the"," ",r.default.createElement("code",null,"vertical")," you just added."),r.default.createElement(f.default,{codeText:y.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-justified"},"Justified button groups")),r.default.createElement("p",null,"Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group."),r.default.createElement("div",{className:"bs-callout bs-callout-warning"},r.default.createElement("h4",null,"Style issues"),r.default.createElement("p",null,"There are some issues and workarounds required when using this property, please see"," ",r.default.createElement("a",{href:"http://getbootstrap.com/components/#btn-groups-justified"},"bootstrap’s button group docs")," ","for more specifics.")),r.default.createElement("p",null,"Just add ",r.default.createElement("code",null,"justified")," to the ",r.default.createElement("code",null,"<ButtonGroup />"),"."),r.default.createElement(f.default,{codeText:D.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-checkbox-radio"},"Checkbox / Radio")),r.default.createElement("p",null,"For checkboxes or radio buttons styled as Bootstrap buttons, use the",r.default.createElement("code",null,"<ToggleButtonGroup>")," and ",r.default.createElement("code",null,"<ToggleButton>"),"components. The group behaves as a form component, where the value is an array of the selected ",r.default.createElement("code",null,"eventKey"),"s for checkbox groups or the selected ",r.default.createElement("code",null,"eventKey")," for radio groups."),r.default.createElement("div",{className:"bs-callout bs-callout-warning"},r.default.createElement("h4",null,"Bootstrap JS issue"),r.default.createElement("p",null,"There is a known"," ",r.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/issues/2774"},"issue")," ","when including Bootstrap JS while using Toggle Button Groups. Therefore it is advised not use Bootstrap JS in conjunction with"," ",r.default.createElement("code",null,"<ToggleButtonGroup>")," and"," ",r.default.createElement("code",null,"<ToggleButton>"),".")),r.default.createElement("h4",null,"Uncontrolled"),r.default.createElement(f.default,{codeText:N.default}),r.default.createElement("h4",null,"Controlled"),r.default.createElement(f.default,{codeText:C.default}),r.default.createElement("h3",null,r.default.createElement(d.default,{id:"btn-groups-props"},"Props")),r.default.createElement("h4",null,r.default.createElement(d.default,{id:"btn-groups-group-props"},"ButtonGroup"),r.default.createElement(s.default,{component:e.ButtonGroup.displayName})),r.default.createElement(i.default,{metadata:e.ButtonGroup}),r.default.createElement("h4",null,r.default.createElement(d.default,{id:"btn-groups-toolbar-props"},"ButtonToolbar"),r.default.createElement(s.default,{component:e.ButtonToolbar.displayName})),r.default.createElement(i.default,{metadata:e.ButtonToolbar}),r.default.createElement("h4",null,r.default.createElement(d.default,{id:"btn-groups-toggle-group-props"},"ToggleButtonGroup"),r.default.createElement(s.default,{component:e.ToggleButtonGroup.displayName})),r.default.createElement(i.default,{metadata:e.ToggleButtonGroup}),r.default.createElement("h4",null,r.default.createElement(d.default,{id:"btn-groups-toggle-btn-props"},"ToggleButton"),r.default.createElement(s.default,{component:e.ToggleButton.displayName})),r.default.createElement(i.default,{metadata:e.ToggleButton}))}e.__esModule=!0,e.query=void 0,e.default=u;var l=n(1),r=o(l),a=n(12),d=o(a),c=n(17),s=o(c),p=n(14),i=o(p),B=n(13),f=o(B),g=n(394),m=o(g),h=n(403),b=o(h),E=n(398),T=o(E),v=n(397),w=o(v),G=n(399),k=o(G),x=n(395),y=o(x),M=n(396),D=o(M),I=n(496),C=o(I),K=n(497),N=o(K);e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-button-group-js-7fcf102118d5135cf090.js.map