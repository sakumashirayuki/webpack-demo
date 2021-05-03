// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// import style from "./style.css";
// console.log(style);
import _ from "lodash";
import $ from "jquery";
import { ui } from "./jquery.ui";

ui();
const dom = $('<div>');
dom.html(_.join(['dell', 'lee'], '___'));
$('body').append(dom);