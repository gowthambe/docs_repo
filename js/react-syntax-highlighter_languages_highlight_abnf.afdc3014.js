(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["react-syntax-highlighter_languages_highlight_abnf"],{"94c4":function(e,a){function s(e){var a={ruleDeclaration:"^[a-zA-Z][a-zA-Z0-9-]*",unexpectedChars:"[!@#$^&',?+~`|:]"},s=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],n=e.COMMENT(";","$"),i={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},l={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},c={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},o={className:"symbol",begin:/%[si]/},t={className:"attribute",begin:a.ruleDeclaration+"(?=\\s*=)"};return{name:"Augmented Backus-Naur Form",illegal:a.unexpectedChars,keywords:s.join(" "),contains:[t,n,i,l,c,o,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}e.exports=s}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_abnf.afdc3014.js.map