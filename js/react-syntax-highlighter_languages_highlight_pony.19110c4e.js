(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["react-syntax-highlighter_languages_highlight_pony"],{c8c9:function(e,n){function a(e){var n={keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},a={className:"string",begin:'"""',end:'"""',relevance:10},r={className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},i={className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},t={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},s={begin:e.IDENT_RE+"'",relevance:0},c={className:"number",begin:"(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",relevance:0};return{name:"Pony",keywords:n,contains:[t,a,r,i,s,c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}e.exports=a}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_pony.19110c4e.js.map