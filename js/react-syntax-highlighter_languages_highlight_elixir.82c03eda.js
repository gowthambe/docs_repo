(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["react-syntax-highlighter_languages_highlight_elixir"],{90918:function(e,n){function i(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",i="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={$pattern:n,keyword:"and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"},s={className:"subst",begin:"#\\{",end:"}",keywords:a},b={className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},d="[/|([{<\"']",g={className:"string",begin:"~[a-z](?="+d+")",contains:[{endsParent:!0,contains:[{contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]}]}]},r={className:"string",begin:"~[A-Z](?="+d+")",contains:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/\</,end:/\>/}]},t={className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},o={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},c=e.inherit(o,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),l=[t,r,g,e.HASH_COMMENT_MODE,c,o,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[t,{begin:i}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},b,{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{begin:/\/: (?=\d+\s*[,\]])/,relevance:0,contains:[b]},{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return s.contains=l,{name:"Elixir",keywords:a,contains:l}}e.exports=i}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elixir.82c03eda.js.map