function createInstance(ClassReference, selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        new ClassReference({ element: elements[i] });
    }

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var body             = document.querySelector("body");
    var observer         = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // needed for IE
            var nodesArray = [].slice.call(mutation.addedNodes);
            if (nodesArray.length > 0) {
                nodesArray.forEach(function(addedNode) {
                    if (addedNode.querySelectorAll) {
                        var elementsArray = [].slice.call(addedNode.querySelectorAll(selector.self));
                        elementsArray.forEach(function(element) {
                            new ClassReference({ element: element });
                        });
                    }
                });
            }
        });
    });

    observer.observe(body, {
        subtree: true,
        childList: true,
        characterData: true
    });
}

export function componentCtrl(funcRef, selector) {
    function Component(prop) {
        function init(prop) {
            prop.element.removeAttribute("data-cmp-is");
    
            var property = prop.element.querySelectorAll(selector.property);
            property = property.length == 1 ? property[0].textContent : null;
    
            var model = prop.element.querySelectorAll(selector.message);
            model = model.length == 1 ? model[0].textContent : null;
            
            funcRef(prop);
        }
    
        if (prop && prop.element) {
            init(prop);
        }
    }

    if (document.readyState !== "loading") {
        createInstance(Component, selector.self);
    } else {
        document.addEventListener("DOMContentLoaded", () => createInstance(Component, selector.self));
    }
}

export function componentCtrl2(funcRef, selector) {
    function Component(prop) {
        function init(prop) {
            prop.element.removeAttribute("data-cmp-is2");
    
            var property = prop.element.querySelectorAll(selector.property);
            property = property.length == 1 ? property[0].textContent : null;
    
            var model = prop.element.querySelectorAll(selector.message);
            model = model.length == 1 ? model[0].textContent : null;
            
            funcRef(prop);
        }
    
        if (prop && prop.element) {
            init(prop);
        }
    }

    if (document.readyState !== "loading") {
        createInstance(Component, selector.self);
    } else {
        document.addEventListener("DOMContentLoaded", () => createInstance(Component, selector.self));
    }
}
