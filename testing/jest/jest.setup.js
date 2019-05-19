const { configure, shallow, render, mount } = require('enzyme');

global.fetch = require('jest-fetch-mock');

global.shallow = shallow;
global.render = render;
global.mount = mount;

window.scrollTo = () => {};
