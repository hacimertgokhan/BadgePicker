let pickedItems = document.getElementById('pickedItems');
const delay = ms => new Promise(res => setTimeout(res, ms));
const pickedItemsArray = [];

let err = document.getElementById('err');
let err_reason = document.getElementById('err_reason');
const errBox = async (reason) => {
    err_reason.innerHTML = reason;
    err.style.transform = 'translateY(0%)'
    await delay(5000);
    err.style.transition = '500ms';
    err.style.transform = 'translateY(-500%)'
  };


/*

    Badges Remove
    
*/

let copyArea = document.getElementById('copy_md_part')
function updateCopyArea(){
    let items = `${pickedItemsArray.join(" ")}`;
    let md = "<div align='center'>" + items + "</div>";
    copyArea.innerText = md;
}

let removeAllBadges = document.getElementById('removeAllBadges');

removeAllBadges.addEventListener("click", () => {

    const listItems = document.querySelectorAll('#pickedItems li');

    Array.from(listItems).forEach(listItem => {
      listItem.parentNode.removeChild(listItem);
      pickedItemsArray.forEach(items => {
        pickedItemsArray.splice(items, 1);
      });
      updateCopyArea();
    });

});

let apachegroovy = document.getElementById('apachegroovy');
let apachegroovyimage = document.getElementById('agimg');
apachegroovy.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = apachegroovyimage.getAttribute('src');
        pickedItemsArray.push(`<img src="${apachegroovyimage.getAttribute('src')}"/>`)
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
        updateCopyArea();
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let c = document.getElementById('c');
let cimage = document.getElementById('cimg');
c.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = cimage.getAttribute('src');
        pickedItemsArray.push(`<img src="${cimage.getAttribute('src')}"/>`)
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
        updateCopyArea();
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let csharp = document.getElementById('c#');
let csharpimage = document.getElementById('csharpimg');
csharp.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = csharpimage.getAttribute('src');
        pickedItemsArray.push(`<img src="${csharpimage.getAttribute('src')}"/>`)
        img.setAttribute('onclick','deleteThis(this);');
        updateCopyArea();
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let cplus = document.getElementById('c++');
let cplusimage = document.getElementById('cplusimg');
cplus.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = cplusimage.getAttribute('src');
        pickedItemsArray.push(`<img src="${cplusimage.getAttribute('src')}"/>`)

        img.setAttribute('onclick','deleteThis(this);');
        updateCopyArea();
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let cj = document.getElementById('clojure');
let clojureimage = document.getElementById('cjimg');
cj.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = clojureimage.getAttribute('src');
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItemsArray.push(`<img src="${clojureimage.getAttribute('src')}"/>`)
        updateCopyArea();

        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let cry = document.getElementById('crystal');
let cryimage = document.getElementById('cryimg');
cry.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = cryimage.getAttribute('src');
        pickedItemsArray.push(`<img src="${cryimage.getAttribute('src')}"/>`)

        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        updateCopyArea();
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }

});

let css = document.getElementById('css3');
let css_img = document.getElementById('css3_img');
css.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = css_img.getAttribute('src');
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItemsArray.push(`<img src="${css_img.getAttribute('src')}"/>`)
        updateCopyArea();

        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

let dart = document.getElementById('dart');
let dart_img = document.getElementById('dart_img');
dart.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = dart_img.getAttribute('src');
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItemsArray.push(`<img src="${dart_img.getAttribute('src')}"/>`)
        updateCopyArea();

        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

let elixir = document.getElementById('elixir');
let elixir_img = document.getElementById('elixir_img');
elixir.addEventListener("click", () => {
    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = elixir_img.getAttribute('src');
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItemsArray.push(`<img src="${elixir_img.getAttribute('src')}"/>`)
        updateCopyArea();

        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('elm').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('elm_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('elm_img').getAttribute('src')}"/>`)
        updateCopyArea();

        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('erlang').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('erlang_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('erlang_img').getAttribute('src')}"/>`)
        updateCopyArea();

        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('fortran').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('fortran_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('fortran_img').getAttribute('src')}"/>`)
        updateCopyArea();

        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('go').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('go_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('go_img').getAttribute('src')}"/>`)
        updateCopyArea();

        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('graphql').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('graphql_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('graphql_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('haskell').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('haskell_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('haskell_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('html').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('html_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('html_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});


document.getElementById('java').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('java_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('java_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('js').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('js_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('js_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('julia').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('julia_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('julia_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('kotlin').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('kotlin_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('kotlin_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('latex').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('latex_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('latex_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('lua').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('lua_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('lua_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('md').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('md_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('md_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nim').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nim_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nim_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nix').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nix_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nix_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('objc').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('objc_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('objc_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('octave').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('octave_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('octave_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('orgmode').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('orgmode_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('orgmode_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('perl').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('perl_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('perl_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('php').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('php_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('php_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('powers').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('powers_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('powers_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('py').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('py_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('py_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('r').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('r_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('r_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('ruby').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ruby_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ruby_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('rust').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('rust_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('rust_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('scala').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('scala_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('scala_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('shell').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('shell_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('shell_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('solidity').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('solidity_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('solidity_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('swift').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('swift_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('swift_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});


document.getElementById('ts').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ts_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ts_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});


document.getElementById('wt').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('wt_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('wt_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});


document.getElementById('zig').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('zig_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('zig_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});


document.getElementById('r').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('r_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('r_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('copy_md_part_text').addEventListener("click", () => {
    var copyText = document.getElementById("copy_md_part");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
});

document.getElementById('amzdb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('amzdb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('amzdb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('td').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('td_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('td_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('sqlite').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('sqlite_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('sqlite_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('ss').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ss_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ss_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('redis').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('redis_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('redis_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('fb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('fb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('fb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('infdb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('infdb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('infdb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('srrdb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('srrdb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('srrdb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('csdr').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('csdr_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('csdr_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('realm').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('realm_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('realm_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('postgres').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('postgres_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('postgres_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('planet').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('planet_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('planet_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('neo').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('neo_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('neo_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('mydb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('mydb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('mydb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('mondb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('mondb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('mondb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('msql').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('msql_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('msql_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('couch').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('couch_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('couch_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('croh').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('croh_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('croh_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('csdr').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('csdr_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('csdr_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('sb').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('sb_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('sb_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

/*

    frameworks

*/

document.getElementById('dotnet').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('dotnet_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('dotnet_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('adonisjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('adonisjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('adonisjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('anaconda').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('anaconda_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('anaconda_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('angular').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('angular_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('angular_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('angularjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('angularjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('angularjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('antdesign').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('antdesign_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('antdesign_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('apachespark').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('apachespark_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('apachespark_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('apachekafka').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('apachekafka_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('apachekafka_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('apachehadoop').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('apachehadoop_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('apachehadoop_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('apachehive').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('apachehive_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('apachehive_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('apollographql').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('apollographql_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('apollographql_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('aurelia').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('aurelia_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('aurelia_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('blazor').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('blazor_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('blazor_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('bootstrap').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('bootstrap_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('buefy').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('buefy_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('bulma').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('bulma_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('bulma_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('bun').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('bun_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('bun_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('chakraui').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('chakraui_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('chakraui_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('chartjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('chartjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('chartjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('codeigniter').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('codeigniter_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('codeigniter_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('daisyui').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('daisyui_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('daisyui_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('denojs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('denojs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('denojs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('directus').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('directus_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('directus_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('django').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('django_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('django_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('django_rest').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('django_rest_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('django_rest_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('drupal').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('drupal_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('drupal_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('electron').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('electron_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('electron_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('ember').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ember_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ember_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('expo').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('expo_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('expo_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('express').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('express_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('express_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('fastapi').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('fastapi_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('fastapi_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('fastify').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('fastify_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('fastify_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('flask').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('flask_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('flask_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('flutter').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('flutter_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('flutter_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('gatsby').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('gatsby_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('gatsby_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('green').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('green_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('green_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('gulp').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('gulp_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('gulp_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('insomnia').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('insomnia_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('insomnia_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('hugoblack').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('hugoblack_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('hugoblack_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('ionic').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ionic_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ionic_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('jasmine').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('jasmine_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('jasmine_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('jinja').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('jinja_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('jinja_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('joola').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('joola_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('joola_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('jquery').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('jquery_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('jquery_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('jwtblack').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('jwtblack_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('jwtblack_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('laravel').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('laravel_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('laravel_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('less').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('less_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('less_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('mui').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('mui_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('mui_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('meteorjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('meteorjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('meteorjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('maxcompute').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('maxcompute_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('maxcompute_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('npm').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('npm_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('npm_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nestjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nestjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nestjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nextblackstyle').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nextblackstyle_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nextblackstyle_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nodejs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nodejs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nodejs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nodemon').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nodemon_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nodemon_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nodered').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nodered_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nodered_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nuxt').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nuxt_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nuxt_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('nx').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('nx_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('nx_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('opencv').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('opencv_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('opencv_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('opengl').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('opengl_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('opengl_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('p5').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('p5_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('p5_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('pnpm').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('pnpm_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('pnpm_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('perfect').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('perfect_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('perfect_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('pug').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('pug_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('pug_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('qt').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('qt_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('qt_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('quasar').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('quasar_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('quasar_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('ros').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('ros_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('ros_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('rabbitmq').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('rabbitmq_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('rabbitmq_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('rails').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('rails_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('rails_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('react').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('react_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('react_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('react_native').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('react_native_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('react_native_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('react_query').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('react_query_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('react_query_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('react_router').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('react_router_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('react_router_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('react_hook').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('react_hook_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('react_hook_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('redux').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('redux_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('redux_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('remix').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('remix_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('remix_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('rollupjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('rollupjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('rollupjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('rxjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('rxjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('rxjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('sass').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('sass_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('sass_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('semantic').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('semantic_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('semantic_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('socketio').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('socketio_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('socketio_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('solidjs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('solidjs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('solidjs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('spring').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('spring_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('spring_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('strapi').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('strapi_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('strapi_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('styled').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('styled_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('styled_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('stylus').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('stylus_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('stylus_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('svelte').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('svelte_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('svelte_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('symfony').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('symfony_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('symfony_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('tailwindcss').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('tailwindcss_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('tailwindcss_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('tauri').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('tauri_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('tauri_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('threejs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('threejs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('threejs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('thymeleaf').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('thymeleaf_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('thymeleaf_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('typegraphql').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('typegraphql_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('typegraphql_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('unocss').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('unocss_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('unocss_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('vite').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('vite_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('vite_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('vuejs').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('vuejs_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('vuejs_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('vuetify').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('vuetify_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('vuetify_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('webgl').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('webgl_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('webgl_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('webpack').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('webpack_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('webpack_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('web3').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('web3_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('web3_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('windicss').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('windicss_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('windicss_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('wordpress').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('wordpress_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('wordpress_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('xamarin').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('xamarin_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('xamarin_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

document.getElementById('yarn').addEventListener("click", () => {

    if(pickedItems.childNodes.length < 20) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = document.getElementById('yarn_img').getAttribute('src');
        pickedItemsArray.push(`<img src="${document.getElementById('yarn_img').getAttribute('src')}"/>`)
        updateCopyArea();
        img.setAttribute('onclick','deleteThis(this);');
        li.appendChild(img);
        pickedItems.appendChild(li);
    } else {
        errBox("20`den fazla dil seçemezsin.");
    }
});

function deleteThis(ths) {
    var x = ths.parentElement.remove();
}

