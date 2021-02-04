
    document.ready = function() {

        if(dataLayer[0].country == 'se') { // targeting in Optimize should cover this
        var css,
            head = document.head,
            style = document.createElement('style'),

            header = document.createElement('h1'),
            tabs = document.querySelector('#bank-id-tab'),
            tabsContainer = document.querySelector('#bank-id-tab .form-group'),
            emailTab = document.querySelector('a[href="#password"]'),
            bankidTab = document.querySelector('a[href="#bankid"]');


        css = `
body.login {background:#fff !important;}
header[role=banner] nav .logo {width: 100px; margin-top:10px;}
body.login header[role=banner] {background:#f8f6ff;}
body.login header[role=banner] .abort-link {left:auto; right:15px; font-size:12px;}
body.login main[role=main] {z-index: 1; position: relative; padding-top:10px; background:#fff; box-shadow: 0 0 2px rgb(0 0 0 / 10%);}

a.tab {margin:0 2px !important; height: 44px !important; padding-top:12px; text-transform: none; background: rgb(60 54 130 / 5%); color:#666 !important; font-size:14px !important; font-weight:600 !important; border: 0 !important; border-bottom-left-radius:0 !important; border-bottom-right-radius:0 !important;}
a.tab * {position: static; margin:0 3px; display:inline-block; vertical-align:middle; float:none !important; left: auto !important; color:#666;}
a.tab-selected {background: #fff; border: none !important; color:#666 !important; cursor: default;}
a.tab.btn:hover {border: none !important; color:#555; background:rgb(60 54 130 / 10%) !important;}
a.tab.btn:hover span {color:#555;}
a.tab-selected.btn:hover, a.tab-selected.btn:hover span {color:#555; background:#fff !important; }
a.tab svg path {fill:#666;}

h1 {font-size:24px; font-weight:300; line-height:1.3; margin:0; color: rgb(60 54 130);}
@media screen and (max-width: 375px) {h1 {font-size:20px;}}
header[role=banner] nav {height:auto; padding-bottom:24px;}
.container-centered .container-inner {padding-top:0 !important;}

#bank-id-tab {margin: 0 auto -20px; max-width:380px; position:relative; z-index:2;}
#bank-id-tab .form-group:first-child {display: flex; flex-basis:0; flex-direction: row-reverse; margin: 0 -10px 20px;}
#bank-id-tab .form-group:last-child {display:none;}

form.form-horizontal .form-group {top:0 !important;}
.form-group.password-strength-container {margin-bottom:0;}
.hideShowPassword-toggle, .hideShowPassword-toggle:hover, .hideShowPassword-toggle-show {margin:1px !important; width:50px; height:42px; font-size:12px; background:#fff; filter: brightness(100%); text-indent:0; color:#fff;}
.hideShowPassword-toggle::before {display:block; position:absolute; width:50px; height:42px; content:'Dölj'; color:#333;}
.hideShowPassword-toggle-show::before {content:'Visa';}
.password-strength-container .progress {margin: -3px 1px 0 1px !important; height: 2px !important; z-index:1; position: relative; background:#fff;}
.password-strength-container .password-verdict {height:auto !important; font-size:12px !important; margin-right:10px;}
.password-strength-container .password-verdict.active {margin-top:-5px; border-bottom:1px solid #ccc;}

.container-tab .form-group label {margin: 8px 0 4px !important; font-size: 12px !important;}

input[type="checkbox"] {margin-right:5px;}
::placeholder {color: #bbb !important; font-weight:400; opacity: 1;}

`;

        header.innerHTML = 'Skaffa konto gratis –<br>inga dolda avgifter';
        document.querySelector('header nav').appendChild(header);

        emailTab.setAttribute('class', 'tab tab-selected btn btn-clear btn-block');
        tabsContainer.append(emailTab);
        document.querySelector('#bank-id-tab .form-group a').setAttribute('class', 'tab btn btn-clear btn-block');
        document.querySelector('input#password').setAttribute('placeholder', 'Lösenord, minst 6 tecken');
        document.querySelector('header').append(tabs);
        document.querySelector('a[href="#bankid"] span').innerHTML = 'BankID';

        emailTab.addEventListener("click", function() {
            bankidTab.classList.remove('tab-selected');
            this.classList.add('tab-selected');
        });
        bankidTab.addEventListener("click", function() {
            emailTab.classList.remove('tab-selected');
            this.classList.add('tab-selected');
        });

        head.appendChild(style);

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));

        }

    }
