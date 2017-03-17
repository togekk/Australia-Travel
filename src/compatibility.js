function web_animation_api_check() {
    "use strict";

    try {
      eval("document.querySelector('html').animate({ opacity: [1, 0] }, 1)");
    }
    catch (e) { return false; }
    return true;
}

let waapi = true;

if (!web_animation_api_check()) {
    // window.location.href = "src/redirect.html";
    console.log('Web Animation API not supported. Using GSAP');
    waapi = false;
}
