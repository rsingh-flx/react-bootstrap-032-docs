webpackJsonp([0x9e23af2816e6],{498:function(t,e){"use strict";t.exports='<div>\r\n  <Tooltip placement="right" className="in" id="tooltip-right">\r\n    Tooltip right\r\n  </Tooltip>\r\n\r\n  <Tooltip placement="top" className="in" id="tooltip-top">\r\n    Tooltip top\r\n  </Tooltip>\r\n\r\n  <Tooltip placement="left" className="in" id="tooltip-left">\r\n    Tooltip left\r\n  </Tooltip>\r\n\r\n  <Tooltip placement="bottom" className="in" id="tooltip-bottom">\r\n    Tooltip bottom\r\n  </Tooltip>\r\n</div>;\r\n'},499:function(t,e){"use strict";t.exports='function LinkWithTooltip({ id, children, href, tooltip }) {\r\n  return (\r\n    <OverlayTrigger\r\n      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}\r\n      placement="top"\r\n      delayShow={300}\r\n      delayHide={150}\r\n    >\r\n      <a href={href}>{children}</a>\r\n    </OverlayTrigger>\r\n  );\r\n}\r\n\r\nrender(\r\n  <p className="muted" style={{ marginBottom: 0 }}>\r\n    Tight pants next level keffiyeh{\' \'}\r\n    <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">\r\n      you probably\r\n    </LinkWithTooltip>{\' \'}\r\n    haven\'t heard of them. Photo booth beard raw denim letterpress vegan\r\n    messenger bag stumptown. Farm-to-table seitan, mcsweeney\'s fixie sustainable\r\n    quinoa 8-bit american apparel{\' \'}\r\n    <LinkWithTooltip\r\n      tooltip={\r\n        <span>\r\n          Another <strong>tooltip</strong>\r\n        </span>\r\n      }\r\n      href="#"\r\n      id="tooltip-2"\r\n    >\r\n      have a\r\n    </LinkWithTooltip>\r\n    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\r\n    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s\r\n    cleanse vegan chambray. A really ironic artisan{\' \'}\r\n    <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">\r\n      whatever keytar\r\n    </LinkWithTooltip>, scenester farm-to-table banksy Austin{\' \'}\r\n    <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">\r\n      twitter handle\r\n    </LinkWithTooltip>{\' \'}\r\n    freegan cred raw denim single-origin coffee viral.\r\n  </p>\r\n);\r\n'},500:function(t,e){"use strict";t.exports='const tooltip = (\r\n  <Tooltip id="tooltip">\r\n    <strong>Holy guacamole!</strong> Check this info.\r\n  </Tooltip>\r\n);\r\n\r\nconst positionerInstance = (\r\n  <ButtonToolbar>\r\n    <OverlayTrigger placement="left" overlay={tooltip}>\r\n      <Button bsStyle="default">Holy guacamole!</Button>\r\n    </OverlayTrigger>\r\n\r\n    <OverlayTrigger placement="top" overlay={tooltip}>\r\n      <Button bsStyle="default">Holy guacamole!</Button>\r\n    </OverlayTrigger>\r\n\r\n    <OverlayTrigger placement="bottom" overlay={tooltip}>\r\n      <Button bsStyle="default">Holy guacamole!</Button>\r\n    </OverlayTrigger>\r\n\r\n    <OverlayTrigger placement="right" overlay={tooltip}>\r\n      <Button bsStyle="default">Holy guacamole!</Button>\r\n    </OverlayTrigger>\r\n  </ButtonToolbar>\r\n);\r\n\r\nrender(positionerInstance);\r\n'},531:function(t,e,r){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.data;return a.default.createElement("div",{className:"bs-docs-section"},a.default.createElement("h2",{className:"page-header"},a.default.createElement(p.default,{id:"tooltips"},"Tooltips")," ",a.default.createElement("small",null,"Tooltip")),a.default.createElement("p",null,"Tooltip component for a more stylish alternative to that anchor tag"," ",a.default.createElement("code",null,"title")," attribute."),a.default.createElement(f.default,{codeText:h.default,exampleClassName:"tooltip-static"}),a.default.createElement("h4",null,a.default.createElement(p.default,{id:"tooltips-overlay-trigger"},"With OverlayTrigger")),a.default.createElement("p",null,"Attach and position tooltips with ",a.default.createElement("code",null,"OverlayTrigger"),"."),a.default.createElement(f.default,{codeText:y.default}),a.default.createElement("h4",null,a.default.createElement(p.default,{id:"tooltips-in-text"},"In text copy")),a.default.createElement("p",null,"Positioned tooltip in text copy."),a.default.createElement(f.default,{codeText:b.default}),a.default.createElement("h3",null,a.default.createElement(p.default,{id:"tooltips-props"},"Props")),a.default.createElement("h4",null,a.default.createElement(p.default,{id:"overlays-trigger-props"},"OverlayTrigger"),a.default.createElement(u.default,{component:e.OverlayTrigger.displayName})),a.default.createElement(c.default,{metadata:e.OverlayTrigger}),a.default.createElement("h4",null,a.default.createElement(p.default,{id:"tooltips-props-tooltip"},"Tooltip"),a.default.createElement(u.default,{component:e.Tooltip.displayName})),a.default.createElement(c.default,{metadata:e.Tooltip}))}e.__esModule=!0,e.query=void 0,e.default=o;var n=r(1),a=l(n),i=r(12),p=l(i),d=r(17),u=l(d),s=r(14),c=l(s),m=r(13),f=l(m),g=r(498),h=l(g),T=r(500),y=l(T),v=r(499),b=l(v);e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-tooltips-js-015e21c6d9799e70a282.js.map