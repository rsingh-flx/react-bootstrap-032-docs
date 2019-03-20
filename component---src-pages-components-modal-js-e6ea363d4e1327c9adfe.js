webpackJsonp([0xd9bfe23c3813],{442:function(e,t){"use strict";e.exports='class Example extends React.Component {\r\n  constructor(props, context) {\r\n    super(props, context);\r\n\r\n    this.handleShow = this.handleShow.bind(this);\r\n    this.handleClose = this.handleClose.bind(this);\r\n\r\n    this.state = {\r\n      show: false\r\n    };\r\n  }\r\n\r\n  handleClose() {\r\n    this.setState({ show: false });\r\n  }\r\n\r\n  handleShow() {\r\n    this.setState({ show: true });\r\n  }\r\n\r\n  render() {\r\n    const popover = (\r\n      <Popover id="modal-popover" title="popover">\r\n        very popover. such engagement\r\n      </Popover>\r\n    );\r\n    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;\r\n\r\n    return (\r\n      <div>\r\n        <p>Click to get the full Modal experience!</p>\r\n\r\n        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>\r\n          Launch demo modal\r\n        </Button>\r\n\r\n        <Modal show={this.state.show} onHide={this.handleClose}>\r\n          <Modal.Header closeButton>\r\n            <Modal.Title>Modal heading</Modal.Title>\r\n          </Modal.Header>\r\n          <Modal.Body>\r\n            <h4>Text in a modal</h4>\r\n            <p>\r\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\r\n            </p>\r\n\r\n            <h4>Popover in a modal</h4>\r\n            <p>\r\n              there is a{\' \'}\r\n              <OverlayTrigger overlay={popover}>\r\n                <a href="#popover">popover</a>\r\n              </OverlayTrigger>{\' \'}\r\n              here\r\n            </p>\r\n\r\n            <h4>Tooltips in a modal</h4>\r\n            <p>\r\n              there is a{\' \'}\r\n              <OverlayTrigger overlay={tooltip}>\r\n                <a href="#tooltip">tooltip</a>\r\n              </OverlayTrigger>{\' \'}\r\n              here\r\n            </p>\r\n\r\n            <hr />\r\n\r\n            <h4>Overflowing text to show scroll behavior</h4>\r\n            <p>\r\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n              ac consectetur ac, vestibulum at eros.\r\n            </p>\r\n            <p>\r\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\r\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n              auctor.\r\n            </p>\r\n            <p>\r\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n            </p>\r\n            <p>\r\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n              ac consectetur ac, vestibulum at eros.\r\n            </p>\r\n            <p>\r\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\r\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n              auctor.\r\n            </p>\r\n            <p>\r\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n            </p>\r\n            <p>\r\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n              ac consectetur ac, vestibulum at eros.\r\n            </p>\r\n            <p>\r\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\r\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n              auctor.\r\n            </p>\r\n            <p>\r\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n            </p>\r\n          </Modal.Body>\r\n          <Modal.Footer>\r\n            <Button onClick={this.handleClose}>Close</Button>\r\n          </Modal.Footer>\r\n        </Modal>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nrender(<Example />);\r\n'},443:function(e,t){"use strict";e.exports='/**\r\n * You will want to include this bit of css\r\n *\r\n * .modal-container {\r\n *   position: relative;\r\n * }\r\n * .modal-container .modal, .modal-container .modal-backdrop {\r\n *   position: absolute;\r\n * }\r\n */\r\n\r\nclass Trigger extends React.Component {\r\n  constructor(props, context) {\r\n    super(props, context);\r\n\r\n    this.handleHide = this.handleHide.bind(this);\r\n\r\n    this.state = {\r\n      show: false\r\n    };\r\n  }\r\n\r\n  handleHide() {\r\n    this.setState({ show: false });\r\n  }\r\n  render() {\r\n    return (\r\n      <div className="modal-container" style={{ height: 200 }}>\r\n        <Button\r\n          bsStyle="primary"\r\n          bsSize="large"\r\n          onClick={() => this.setState({ show: true })}\r\n        >\r\n          Launch contained modal\r\n        </Button>\r\n\r\n        <Modal\r\n          show={this.state.show}\r\n          onHide={this.handleHide}\r\n          container={this}\r\n          aria-labelledby="contained-modal-title"\r\n        >\r\n          <Modal.Header closeButton>\r\n            <Modal.Title id="contained-modal-title">\r\n              Contained Modal\r\n            </Modal.Title>\r\n          </Modal.Header>\r\n          <Modal.Body>\r\n            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id\r\n            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.\r\n          </Modal.Body>\r\n          <Modal.Footer>\r\n            <Button onClick={this.handleHide}>Close</Button>\r\n          </Modal.Footer>\r\n        </Modal>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nrender(<Trigger />);\r\n'},444:function(e,t){"use strict";e.exports='class Example extends React.Component {\r\n  constructor(props, context) {\r\n    super(props, context);\r\n\r\n    this.handleShow = this.handleShow.bind(this);\r\n    this.handleHide = this.handleHide.bind(this);\r\n\r\n    this.state = {\r\n      show: false\r\n    };\r\n  }\r\n\r\n  handleShow() {\r\n    this.setState({ show: true });\r\n  }\r\n\r\n  handleHide() {\r\n    this.setState({ show: false });\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <ButtonToolbar>\r\n        <Button bsStyle="primary" onClick={this.handleShow}>\r\n          Launch demo modal\r\n        </Button>\r\n\r\n        <Modal\r\n          {...this.props}\r\n          show={this.state.show}\r\n          onHide={this.handleHide}\r\n          dialogClassName="custom-modal"\r\n        >\r\n          <Modal.Header closeButton>\r\n            <Modal.Title id="contained-modal-title-lg">\r\n              Modal heading\r\n            </Modal.Title>\r\n          </Modal.Header>\r\n          <Modal.Body>\r\n            <h4>Wrapped Text</h4>\r\n            <p>\r\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\r\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\r\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\r\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\r\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\r\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\r\n              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum\r\n              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis\r\n              laudantium quibusdam quidem corporis architecto veritatis. Ex\r\n              facilis minima beatae sunt perspiciatis placeat. Quasi corporis\r\n              odio eaque voluptatibus ratione magnam nulla? Amet cum maiores\r\n              consequuntur totam dicta! Inventore adipisicing vel vero odio modi\r\n              doloremque? Vitae porro impedit ea minima laboriosam quisquam\r\n              neque. Perspiciatis omnis obcaecati consequatur sunt deleniti\r\n              similique facilis sequi. Ipsum harum vitae modi reiciendis\r\n              officiis. Quas laudantium laudantium modi corporis nihil provident\r\n              consectetur omnis, natus nulla distinctio illum corporis. Sit ex\r\n              earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum\r\n              illum architecto aspernatur perspiciatis error fuga illum, tempora\r\n              harum earum, a dolores. Animi facilis inventore harum dolore\r\n              accusamus fuga provident molestiae eum! Odit dicta error dolorem\r\n              sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum\r\n              saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat\r\n              officia culpa sint! Beatae voluptates voluptatem excepturi\r\n              molestiae alias in tenetur beatae placeat architecto. Sit possimus\r\n              rerum fugiat sapiente aspernatur. Necessitatibus tempora animi\r\n              dicta perspiciatis tempora a velit in! Doloribus perspiciatis\r\n              doloribus suscipit nam earum. Deleniti veritatis eaque totam\r\n              assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus\r\n              eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur\r\n              alias ipsum repudiandae! Quia omnis quisquam dignissimos a\r\n              mollitia. Suscipit aspernatur eum maiores repellendus ipsum\r\n              doloribus alias voluptatum consequatur. Consectetur quibusdam\r\n              veniam quas tenetur necessitatibus repudiandae? Rem optio vel\r\n              alias neque optio sapiente quidem similique reiciendis tempore.\r\n              Illum accusamus officia cum enim minima eligendi consectetur nemo\r\n              veritatis nam nisi! Adipisicing nobis perspiciatis dolorum\r\n              adipisci soluta architecto doloremque voluptatibus omnis debitis\r\n              quas repellendus. Consequuntur assumenda illum commodi mollitia\r\n              asperiores? Quis aspernatur consequatur modi veritatis aliquid at?\r\n              Atque vel iure quos. Amet provident voluptatem amet aliquam\r\n              deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis\r\n              neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum\r\n              sed atque molestias debitis omnis! Sit sint repellendus deleniti\r\n              officiis distinctio. Impedit vel quos harum doloribus corporis.\r\n              Laborum ullam nemo quaerat reiciendis recusandae minima dicta\r\n              molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.\r\n              Amet exercitationem quasi velit inventore neque doloremque!\r\n              Consequatur neque dolorem vel impedit sunt voluptate. Amet quo\r\n              amet magni exercitationem libero recusandae possimus pariatur.\r\n              Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur\r\n              sit eligendi neque sunt soluta laudantium natus qui aperiam\r\n              quisquam consectetur consequatur sit sint a unde et. At voluptas\r\n              ut officiis esse totam quasi dolorem! Hic deserunt doloribus\r\n              repudiandae! Lorem quod ab nostrum asperiores aliquam ab id\r\n              consequatur, expedita? Tempora quaerat ex ea temporibus in tempore\r\n              voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda\r\n              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!\r\n              Accusantium atque elit voluptate asperiores corrupti temporibus\r\n              mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis\r\n              id quos dolorum eaque suscipit magni delectus maxime. Sit odit\r\n              provident vel magnam quod. Possimus eligendi non corrupti tenetur\r\n              culpa accusantium quod quis. Voluptatum quaerat animi dolore\r\n              maiores molestias voluptate? Necessitatibus illo omnis laborum hic\r\n              enim minima! Similique. Dolor voluptatum reprehenderit nihil\r\n              adipisci aperiam voluptatem soluta magnam accusamus iste incidunt\r\n              tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo\r\n              animi ratione. Sunt odit similique doloribus temporibus\r\n              reiciendis! Ullam. Dolor dolores veniam animi sequi dolores\r\n              molestias voluptatem iure velit. Elit dolore quaerat incidunt enim\r\n              aut distinctio. Ratione molestiae laboriosam similique laboriosam\r\n              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.\r\n            </p>\r\n          </Modal.Body>\r\n          <Modal.Footer>\r\n            <Button onClick={this.handleHide}>Close</Button>\r\n          </Modal.Footer>\r\n        </Modal>\r\n      </ButtonToolbar>\r\n    );\r\n  }\r\n}\r\n\r\nrender(<Example />);\r\n'},445:function(e,t){"use strict";e.exports='class MySmallModal extends React.Component {\r\n  render() {\r\n    return (\r\n      <Modal\r\n        {...this.props}\r\n        bsSize="small"\r\n        aria-labelledby="contained-modal-title-sm"\r\n      >\r\n        <Modal.Header closeButton>\r\n          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>\r\n          <h4>Wrapped Text</h4>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n        </Modal.Body>\r\n        <Modal.Footer>\r\n          <Button onClick={this.props.onHide}>Close</Button>\r\n        </Modal.Footer>\r\n      </Modal>\r\n    );\r\n  }\r\n}\r\n\r\nclass MyLargeModal extends React.Component {\r\n  render() {\r\n    return (\r\n      <Modal\r\n        {...this.props}\r\n        bsSize="large"\r\n        aria-labelledby="contained-modal-title-lg"\r\n      >\r\n        <Modal.Header closeButton>\r\n          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>\r\n        </Modal.Header>\r\n        <Modal.Body>\r\n          <h4>Wrapped Text</h4>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\r\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\r\n            ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n            auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\r\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\r\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n        </Modal.Body>\r\n        <Modal.Footer>\r\n          <Button onClick={this.props.onHide}>Close</Button>\r\n        </Modal.Footer>\r\n      </Modal>\r\n    );\r\n  }\r\n}\r\n\r\nclass App extends React.Component {\r\n  constructor(props, context) {\r\n    super(props, context);\r\n\r\n    this.state = {\r\n      smShow: false,\r\n      lgShow: false\r\n    };\r\n  }\r\n  render() {\r\n    let smClose = () => this.setState({ smShow: false });\r\n    let lgClose = () => this.setState({ lgShow: false });\r\n\r\n    return (\r\n      <ButtonToolbar>\r\n        <Button\r\n          bsStyle="primary"\r\n          onClick={() => this.setState({ smShow: true })}\r\n        >\r\n          Launch small demo modal\r\n        </Button>\r\n        <Button\r\n          bsStyle="primary"\r\n          onClick={() => this.setState({ lgShow: true })}\r\n        >\r\n          Launch large demo modal\r\n        </Button>\r\n\r\n        <MySmallModal show={this.state.smShow} onHide={smClose} />\r\n        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />\r\n      </ButtonToolbar>\r\n    );\r\n  }\r\n}\r\n\r\nrender(<App />);\r\n'},446:function(e,t){"use strict";e.exports='<div className="static-modal">\r\n  <Modal.Dialog>\r\n    <Modal.Header>\r\n      <Modal.Title>Modal title</Modal.Title>\r\n    </Modal.Header>\r\n\r\n    <Modal.Body>One fine body...</Modal.Body>\r\n\r\n    <Modal.Footer>\r\n      <Button>Close</Button>\r\n      <Button bsStyle="primary">Save changes</Button>\r\n    </Modal.Footer>\r\n  </Modal.Dialog>\r\n</div>;\r\n'},520:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.data;return i.default.createElement("div",{className:"bs-docs-section"},i.default.createElement("h2",{className:"page-header"},i.default.createElement(s.default,{id:"modals"},"Modals")," ",i.default.createElement("small",null,"Modal")),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modals-static"},"Static Markup")),i.default.createElement("p",null,"A modal dialog component"),i.default.createElement(h.default,{codeText:b.default}),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modals-live"},"Basic example")),i.default.createElement("p",null),i.default.createElement("p",null,"A modal with header, body, and set of actions in the footer. Use"," ",i.default.createElement("code",null,"<Modal/>")," in combination with other components to show or hide your Modal. The ",i.default.createElement("code",null,"<Modal/>"),' Component comes with a few convenient "sub components": ',i.default.createElement("code",null,"<Modal.Header/>"),","," ",i.default.createElement("code",null,"<Modal.Title/>"),", ",i.default.createElement("code",null,"<Modal.Body/>"),", and"," ",i.default.createElement("code",null,"<Modal.Footer/>"),", which you can use to build the Modal content."),i.default.createElement(h.default,{codeText:v.default}),i.default.createElement("div",{className:"bs-callout bs-callout-info"},i.default.createElement("h4",null,"Additional Import Options"),i.default.createElement("p",null,"The Modal Header, Title, Body, and Footer components are available as static properties the ",i.default.createElement("code",null,"<Modal/>")," component, but you can also, import them directly from the ",i.default.createElement("code",null,"/lib")," directory like:"," ",i.default.createElement("code",null,'require("react-bootstrap/lib/ModalHeader")'),".")),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modals-contained"},"Contained Modal")),i.default.createElement("p",null,"You will need to add the following css to your project and ensure that your container has the ",i.default.createElement("code",null,"modal-container")," class."),i.default.createElement("pre",null,i.default.DOM.code(null,".modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n")),i.default.createElement(h.default,{codeText:M.default}),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modal-default-sizing"},"Sizing modals using standard Bootstrap props")),i.default.createElement("p",null,'You can specify a bootstrap large or small modal by using the "bsSize" prop.'),i.default.createElement(h.default,{codeText:y.default}),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modal-custom-sizing"},"Sizing modals using custom CSS")),i.default.createElement("p",null,'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'),i.default.createElement(h.default,{codeText:S.default}),i.default.createElement("h3",null,i.default.createElement(s.default,{id:"modals-props"},"Props")),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal"},"Modal"),i.default.createElement(d.default,{component:t.Modal.displayName})),i.default.createElement(m.default,{metadata:t.Modal}),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal-dialog"},"Modal.Dialog"),i.default.createElement(d.default,{component:t.ModalDialog.displayName})),i.default.createElement(m.default,{metadata:t.ModalDialog}),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal-header"},"Modal.Header"),i.default.createElement(d.default,{component:t.ModalHeader.displayName})),i.default.createElement(m.default,{metadata:t.ModalHeader}),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal-title"},"Modal.Title"),i.default.createElement(d.default,{component:t.ModalTitle.displayName})),i.default.createElement(m.default,{metadata:t.ModalTitle}),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal-body"},"Modal.Body"),i.default.createElement(d.default,{component:t.ModalBody.displayName})),i.default.createElement(m.default,{metadata:t.ModalBody}),i.default.createElement("h4",null,i.default.createElement(s.default,{id:"modals-props-modal-footer"},"Modal.Footer"),i.default.createElement(d.default,{component:t.ModalFooter.displayName})),i.default.createElement(m.default,{metadata:t.ModalFooter}))}t.__esModule=!0,t.query=void 0,t.default=a;var o=n(1),i=r(o),l=n(12),s=r(l),u=n(17),d=r(u),c=n(14),m=r(c),p=n(13),h=r(p),f=n(446),b=r(f),g=n(442),v=r(g),q=n(443),M=r(q),E=n(445),y=r(E),C=n(444),S=r(C);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-modal-js-e6ea363d4e1327c9adfe.js.map