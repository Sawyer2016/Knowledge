<p dangerouslySetInnerHTML={createMarkup(content)}></p>

function createMarkup(str) {
    str = str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
    str = str.replace(/\n/g, '<br/>')
    return { __html: str }
  }