(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["react-syntax-highlighter_languages_highlight_handlebars"],{"81ce":function(e,n){function a(e){return e?"string"===typeof e?e:e.source:null}function t(...e){const n=e.map(e=>a(e)).join("");return n}function s(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"].join(" ")},a={literal:["true","false","undefined","null"].join(" ")},s=/".*?"/,i=/'.*?'/,l=/\[.*?\]/,r=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,o=/\.|\//,c=t("(",i,"|",s,"|",l,"|",r,"|",o,")+"),d=t("(",l,"|",r,")(?==)"),m={begin:c,lexemes:/[\w.\/]+/},g=e.inherit(m,{keywords:a}),b={begin:/\(/,end:/\)/},u={className:"attr",begin:d,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,g,b]}}},h={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},p={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,h,u,g,b],returnEnd:!0},N=e.inherit(m,{className:"name",keywords:n,starts:e.inherit(p,{end:/\)/})});b.contains=[N];const w=e.inherit(m,{keywords:n,className:"name",starts:e.inherit(p,{end:/}}/})}),k=e.inherit(m,{keywords:n,className:"name"}),E=e.inherit(m,{className:"name",keywords:n,starts:e.inherit(p,{end:/}}/})}),_={begin:/\\\{\{/,skip:!0},y={begin:/\\\\(?=\{\{)/,skip:!0};return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[_,y,e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[w],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[k]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[w]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[k]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[E]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[E]}]}}e.exports=s}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_handlebars.b53e2b3c.js.map