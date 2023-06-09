"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,r){var n={};for(var o in e)r.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function make(){return name||(name=(0,_globals.animation)(rule))}function RubberBand(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,r=e.children,n=(e.out,e.timeout),o=e.duration,t=void 0===o?_globals.defaults.duration:o,a=e.delay,u=void 0===a?_globals.defaults.delay:a,l=e.count,p=void 0===l?_globals.defaults.count:l,s=e.forever,d=_objectWithoutProperties(e,["children","out","timeout","duration","delay","count","forever"]),i={make:make,duration:void 0===n?t:n,delay:u,forever:s,count:p,style:{animationFillMode:"both"}};return(0,_wrap2.default)(d,i,!1,r,!0)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=require("prop-types"),_wrap=require("./wrap"),_wrap2=_interopRequireDefault(_wrap),_globals=require("./globals"),propTypes={duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},rule="\n from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n}\n",name=!1;RubberBand.propTypes=propTypes,exports.default=RubberBand,module.exports=exports.default;