(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["react-syntax-highlighter_languages_highlight_haxe"],{af23:function(e,n){function a(e){var n="Int Float String Bool Dynamic Void Array ";return{name:"Haxe",aliases:["hx"],keywords:{keyword:"break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while "+n,built_in:"trace this",literal:"true false null _"},contains:[{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"},{className:"subst",begin:"\\$",end:"\\W}"}]},e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@:",end:"$"},{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elseif end error"}},{className:"type",begin:":[ \t]*",end:"[^A-Za-z0-9_ \t\\->]",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:":[ \t]*",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"new *",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"class",beginKeywords:"enum",end:"\\{",contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"abstract",end:"[\\{$]",contains:[{className:"type",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"from +",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"to +",end:"\\W",excludeBegin:!0,excludeEnd:!0},e.TITLE_MODE],keywords:{keyword:"abstract from to"}},{className:"class",begin:"\\b(class|interface) +",end:"[\\{$]",excludeEnd:!0,keywords:"class interface",contains:[{className:"keyword",begin:"\\b(extends|implements) +",keywords:"extends implements",contains:[{className:"type",begin:e.IDENT_RE,relevance:0}]},e.TITLE_MODE]},{className:"function",beginKeywords:"function",end:"\\(",excludeEnd:!0,illegal:"\\S",contains:[e.TITLE_MODE]}],illegal:/<\//}}e.exports=a}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_haxe.6a2604f8.js.map