function check() {
    "use strict";

    try {
      eval("const onload = () => {}");
    }
    catch (e) { return false; }
    return true;
}

if (!check()) {
    window.location.href = "redirect.html";
}
