(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof require!=="undefined"?require("shCore").SyntaxHighlighter:null);function a(){function b(f,h){var e=SyntaxHighlighter.Match,d=f[0],j=new XRegExp("(&lt;|<)[\\s\\/\\?!]*(?<name>[:\\w-\\.]+)","xg").exec(d),i=[];if(f.attributes!=null){var c,g=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");while((c=g.exec(d))!=null){i.push(new e(c.name,f.index+c.index,"color1"));i.push(new e(c.value,f.index+c.index+c[0].indexOf(c.value),"string"))}}if(j!=null){i.push(new e(j.name,f.index+j[0].indexOf(j.name),"keyword"))}return i}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?!]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:b}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["xml","xhtml","xslt","html","plist"];SyntaxHighlighter.brushes.Xml=a;typeof(exports)!="undefined"?exports.Brush=a:null})();