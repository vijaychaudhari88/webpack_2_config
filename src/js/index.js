
import { sayHello } from './hello.js';
import { showMessage, showImage, showSvg } from './jqueryDemo.js';
import '../assets/styles/style.scss';
import image from './../assets/images/farm-3840x2160-terrace-farming-agriculture-4k-8k-6814.jpg';
import svg from './../assets/svg/image.svg';

// require('!!script-loader!./libs/jquery-3.2.0.min.js');


sayHello();
showMessage();
showImage(image);
showSvg(svg);
